import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import prisma from "@/app/lib/prisma";
import { ITEM_PER_PAGE } from "@/app/lib/setting";
import { auth } from "@clerk/nextjs/server";
import { Class, Prisma, Teacher } from "@prisma/client";
import Image from "next/image";


type ClassList = Class & {supervisor:Teacher}

const ClassList = async({searchParams,

}:{
    searchParams:{[key: string]: string|undefined};
}) =>
 {
const { userId, sessionClaims } = await auth();
const role = (sessionClaims?.metadata as { role?: string })?.role;
const currentUserId = userId;
const columns =[
    {
        header:"Class Name",
        accessor:"name",
       

    },
    {
        header:"Capacity",
        accessor:"capacity",
        className:"hidden md:table-cell",

    },

    {
        header:"Grade",
        accessor:"grade",
        className:"hidden md:table-cell",

    },
    {
        header:"Supervisor",
        accessor:"supervisor",
        className:"hidden md:table-cell",

    },
   
   ...(role ==="admin" ? [{
        header:"Actions",
        accessor:"actions",
       
    } ] : []),
]

const renderRow = (item:ClassList) =>
    (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100">
        <td className="flex items-center gap-4 p-4">

        {item.name}
        </td>
        <td className="hidden md:table-cell">{item.capacity}</td>
        <td className="hidden md:table-cell">{item.name[0]}</td>
        <td className="hidden md:table-cell">{item.supervisor.name+" "+ item.supervisor.surname}</td>
        <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
        <>
         <FormModal table="classes" type="update" data={item} />
        <FormModal table="classes" type="delete" id={item.id} />
        </>
        )}

        </div>
        </td>
        </tr>
    )


    const {page, ...queryParams} = searchParams;
    const query : Prisma.ClassWhereInput = {};

    if(queryParams)
    {
    for(const [key,value] of Object.entries(queryParams))
    {
        if(value !== undefined)
        {
            switch(key)
            {
                case "supervisorId" :
                    query.name =value
                break;
                 case "search" :
                    query.name ={contains:value , mode:"insensitive"}
                break;
                default:
                    break;

                }   
            }
        }
    }
    const p = page ? parseInt(page) : 1

    const [data,count] = await  prisma.$transaction([
       prisma.class.findMany({
        where:query,
        include :{
           
            supervisor:true,
        },
        take:ITEM_PER_PAGE,
        skip:ITEM_PER_PAGE*(p-1),
        
    }), 
   prisma.class.count({where:query})
])
    

    return(
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* {top} */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
        <TableSearch/>
        <div className="flex items-center gap-4 self-end">
        <button className="w-8 h-8 rounded-full bg-yellow-400 flex   items-center justify-center">
        <Image src="/filter.png" alt="" width={14} height={14} />
        </button>
        <button className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
        <Image src="/sort.png" alt="" width={14} height={14} />
        </button>
      
       {role === "admin" && (

               <FormModal table="classes" type="create" />
       )}
    
        </div>
        </div>

        </div>
        {/* {list} */}
        <div>
        <Table columns={columns} renderRow={renderRow} data={data}/>
        </div>
        {/* {pagination} */}
         <Pagination page={p} count={count}/> 
        </div>
    )
}
export default  ClassList;