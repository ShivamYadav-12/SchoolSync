import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import {  role } from "@/app/lib/data";
import prisma from "@/app/lib/prisma";
import { ITEM_PER_PAGE } from "@/app/lib/setting";
import { Assignment, Subject, Class, Teacher, Prisma } from "@prisma/client";
import Image from "next/image";

type AssignmentList=Assignment & {
    lesson:{
        subject:Subject,
        class:Class,
        teacher:Teacher
    }
}
const columns =[
    {
        header:"Subject Name",
        accessor:"subject",
       

    },
    {
        header:"Class",
        accessor:"class",

    },

    {
        header:"Teacher",
        accessor:"teacher",
        className:"hidden md:table-cell",

    },
    {
        header:"Due Date",
        accessor:"dueDate",
        className:"hidden md:table-cell",

    },
    
   
    {
        header:"Actions",
        accessor:"actions",
       
    },
]

const renderRow = (item:AssignmentList) =>
    (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100">
        <td className="flex items-center gap-4 p-4">

        {item.lesson.subject.name}
        </td>
        <td>{item.lesson.class.name}</td>
        <td className="hidden md:table-cell">{item.lesson.teacher.name + " "+ item.lesson.teacher.surname}</td>
        <td className="hidden md:table-cell">{new Intl.DateTimeFormat("en-IN").format(item.dueDate)}</td>
       
        <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
        <>
         <FormModal table="assignments" type="update" data={item} />
        <FormModal table="assignments" type="delete" id={item.id} />
        </>
        )}

        </div>
        </td>
        </tr>
    )


    const AssignmentList =async({searchParams,

    }:{
        searchParams:{[key: string]: string|undefined};
    }) =>
     {
        const {page, ...queryParams} = searchParams;
        const query : Prisma.AssignmentWhereInput = {};
    
        if(queryParams)
        {
        for(const [key,value] of Object.entries(queryParams))
        {
            if(value !== undefined)
            {
                switch(key)
                {
                    case "teacherId" :
                        query.lesson = {teacherId:value};
                    break;
                    case "classId" :
                        query.lesson = {classId:parseInt(value)};
                     case "search" :
                        query.lesson ={
                            subject: {
                                name:{contains:value,mode:"insensitive"}
                            }
                        }
                    break;
                    default:
                        break;
    
                    }   
                }
            }
        }
        const p = page ? parseInt(page) : 1
    
        const [data,count] = await  prisma.$transaction([
           prisma.assignment.findMany({
            where:query,
            include :{
               
                lesson:{
                    select:{
                        subject:{select :{name:true}},
                        teacher:{select :{name:true,surname:true}},
                        class:{select :{name:true}}
                    }
                },
            },
            take:ITEM_PER_PAGE,
            skip:ITEM_PER_PAGE*(p-1),
            
        }), 
       prisma.assignment.count({where:query})
    ])

    return(
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* {top} */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
        <TableSearch/>
        <div className="flex items-center gap-4 self-end">
        <button className="w-8 h-8 rounded-full bg-yellow-400 flex   items-center justify-center">
        <Image src="/filter.png" alt="" width={14} height={14} />
        </button>
        <button className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
        <Image src="/sort.png" alt="" width={14} height={14} />
        </button>
       {/* {} <button className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
        <Image src="/plus.png" alt="" width={14} height={14} />
        </button> */}
        {role === "admin" && (
               <FormModal table="assignments" type="create" />
        )}
    
        </div>
        </div>

        </div>
        {/* {list} */}
        <div>
        <Table columns={columns} renderRow={renderRow} data={data}/>
        </div>
        {/* {pagination} */}
         <Pagination count={count} page={p}/> 
        </div>
    )
}
export default  AssignmentList;