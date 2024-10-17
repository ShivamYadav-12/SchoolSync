import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { classesData,role } from "@/app/lib/data";
import Image from "next/image";


type Class ={
    id:number;
    capacity:number;
    grade:number;
    supervisor:string;
    name:string;
   

}
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
   
    {
        header:"Actions",
        accessor:"actions",
       
    },
]
const ClassList =() =>
    
{
    const renderRow = (item:Class) =>
    (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100">
        <td className="flex items-center gap-4 p-4">

        {item.name}
        </td>
        <td className="hidden md:table-cell">{item.capacity}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden md:table-cell">{item.supervisor}</td>
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
       {/* {} <button className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
        <Image src="/plus.png" alt="" width={14} height={14} />
        </button> */}
       {role === "admin" && (

               <FormModal table="classes" type="create" />
       )}
    
        </div>
        </div>

        </div>
        {/* {list} */}
        <div>
        <Table columns={columns} renderRow={renderRow} data={classesData}/>
        </div>
        {/* {pagination} */}
         <Pagination/> 
        </div>
    )
}
export default  ClassList;