import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { role } from "@/app/lib/data";
import prisma from "@/app/lib/prisma";
import { ITEM_PER_PAGE } from "@/app/lib/setting";
import { Prisma } from "@prisma/client";
import Image from "next/image";

type Result={
    id: number;
    title:string;
    studentName:string;
    studentSurname: string;
    teacherName: string;
    teachersurname: string;
    score:number;
    className:string;
    startTime:Date;
   

}
const columns =[
    {
        header:"Subject Name",
        accessor:"subject",
       

    },
   
   
    {
        header:"Student",
        accessor:"student",

    },
    {
        header:"Score",
        accessor:"score",
        className:"hidden md:table-cell",

    },

    {
        header:"Teacher",
        accessor:"teacher",
        className:"hidden md:table-cell",

    },
    {
        header:"Class",
        accessor:"class",
        className:"hidden md:table-cell",


    },
    
    {
        header:"Date",
        accessor:"date",
        className:"hidden md:table-cell",

    },
    
   
    {
        header:"Actions",
        accessor:"actions",
       
    },
]

const renderRow = (item:Result) =>
    (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100">
        <td className="flex items-center gap-4 p-4">

        {item.title}
        </td>
        <td >{item.studentName + " " +item.studentSurname }</td>
        <td className="hidden md:table-cell">{item.score}</td>
        <td className="hidden md:table-cell">{item.teacherName +" " + item.teachersurname}</td>
        <td className="hidden md:table-cell">{item.className}</td>
        <td className="hidden md:table-cell">{new Intl.DateTimeFormat("en-IN").format(item.startTime)}</td>
       
        <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
        <>
         <FormModal table="results" type="update" data={item} />
        <FormModal table="results" type="delete" id={item.id} />
        </>
        )}

        </div>
        </td>
        </tr>
    )

    const ResultList =async({searchParams,

    }:{
        searchParams:{[key: string]: string|undefined};
    }) =>
     {
        const {page, ...queryParams} = searchParams;
        const query : Prisma.ResultWhereInput = {};
    
        if(queryParams)
        {
        for(const [key,value] of Object.entries(queryParams))
        {
            if(value !== undefined)
            {
                switch(key)
                {
                    case "studentId" :
                        query.studentId = value;
                    break;
                    
                     case "search" :
                        query.OR =[
                            {exam: {title:{contains:value, mode:"insensitive"}}},
                            {student: {name:{contains:value, mode:"insensitive"}}}
                        ]
                        
                    break;
                    default:
                        break;
    
                    }   
                }
            }
        }
        const p = page ? parseInt(page) : 1
    
        const [dataRes,count] = await  prisma.$transaction([
           prisma.result.findMany({
            where:query,
            include :{
                student:{select:{name:true,surname:true}},
                exam:{
                    include:{
                        lesson:{
                            select:{
                                class: {select:{name:true}},
                                teacher:{select:{name:true,surname:true}}
                            }
                        }
                    }
                },
                assignment:{
                    include:{
                        lesson:{
                            select:{
                                class: {select:{name:true}},
                                teacher:{select:{name:true,surname:true}}
                            }
                        }
                    }
                }
               
               
            },
            take:ITEM_PER_PAGE,
            skip:ITEM_PER_PAGE*(p-1),
            
        }), 
       prisma.result.count({where:query})

    ])
    const data = dataRes.map((item)=>{
        const assessment = item.exam || item.assignment;


        if(!assessment) return null
        const isExam= "startTime" in assessment
       return {
       id: item.id,
        title: assessment.title,
        studentName: item.student.name,
        studentSurname: item.student.surname,
        teacherName: assessment.lesson.teacher.name,
        teachersurname: assessment.lesson.teacher.surname,
        score:item.score,
        className:assessment.lesson.class.name,
        startTime:isExam? assessment.startTime : assessment.startDate,


       }
    })

   

    return(
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* {top} */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
               <FormModal table="results" type="create" />
        )}
        </div>
        </div>

        </div>
        {/* {list} */}
        <div>
        <Table columns={columns} renderRow={renderRow} data={data}/>
        </div>
        {/* {pagination} */}
         <Pagination count={count} page ={p}/> 
        </div>
    )
}
export default  ResultList;