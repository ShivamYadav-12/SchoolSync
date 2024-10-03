import Image from "next/image"
const Navbar = ()=>{
    return (
        <div className="flex justify-between items-center p-4">
    
        <div  className="hidden md:flex  gap-2 items-center justify-center rounded-full ring-[1.5px] ring-gray-400 px-2 " >
        <Image src ="/search.png" alt="" width={14} height={16}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 outline-none"/>
        </div>

        <div className="flex w-full justify-end gap-6 ">
        <div  className="bg-white w-7 h-7 flex items-center justify-center cursor-pointer relative">
        <Image  src="/announcement.png"  alt="" width={20} height={20} />
        <div className="absolute w-5 h-5 -top-3 -right-3 rounded-full text-white bg-purple-500 flex items-center justify-center text-xs">1</div>
        </div>
        <div  className="bg-white w-7 h-7 flex items-center justify-center cursor-pointer">
        <Image  src="/message.png"  alt="" width={20} height={20} />
      
        </div>
        <div className="flex flex-col">
        <span className="text-xs leading-3 font font-medium">Horrid Henry</span>
        <span className="w-[10px] text-gray-500 text-right">Admin</span>
        </div>
     
      <Image src="/avatar.png" alt="" width={36} height={36 } className="rounded-full"/>
        </div>
 
        </div>
    )
}
export default Navbar;