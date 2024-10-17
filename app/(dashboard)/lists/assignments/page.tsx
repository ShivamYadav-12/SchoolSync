import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import {  assignmentsData,role } from "@/app/lib/data";
import Image from "next/image";

type Assignment={
    id:number;
    class:string;
    subject:string;
    teacher:string;
    dueDate:string;
   

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
const AssignmentList =() =>
    
{
    const renderRow = (item:Assignment) =>
    (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100">
        <td className="flex items-center gap-4 p-4">

        {item.subject}
        </td>
        <td>{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.dueDate}</td>
       
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
        <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
        </div>
        {/* {pagination} */}
         <Pagination/> 
        </div>
    )
}
export default  AssignmentList;