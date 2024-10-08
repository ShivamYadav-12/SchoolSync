import Image from "next/image";

const TableSearch = () =>
{
    return(
        <div  className="w-full md:w-auto flex  gap-2 items-center justify-center rounded-full ring-[1.5px] ring-gray-400 px-2 " >
        <Image src ="/search.png" alt="" width={14} height={16}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 outline-none"/>
        </div>
    )
}
export default TableSearch;