import Image from "next/image"
const UserCard = ({type}:{type:string}) =>{
    return(
        <div className="rounded-2xl odd:bg-yellow-400 even:bg-purple-500 flex-1 p-4 min-w-[130px]">
        <div className="flex justify-between items-center ">
        <span className=" text-xl px-2 py-1 rounded-lg bg-white text-green-600 ">2024/25</span>
        <Image src="/more.png" alt="" width={20} height={20}/>
       
        </div>
        <div>
            <h1 className="text-2xl font-semibold my-4"> 1,234</h1>
            <h2 className="capitalize text-sm fomnt-medium text-gray-400">{type}s</h2>
        </div>
       
        </div>
    )
}

export default UserCard;