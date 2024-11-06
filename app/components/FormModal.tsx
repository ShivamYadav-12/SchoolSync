"use client"

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./Forms/TeacherForm";



const FormModal = ({table,type,data,id}:
{
table:"teacher"|"student"|"classes"|"lessons"|"subjects"|"parent"|"exams"|"assignments"|"results"|"events"|"announcements";
type:"create"|"update"|"delete";
data?:any;
id?:number| string;
}) =>
{
    const size =  type === "create"? "w-8 h-8": "w-7 h-7 ";
    const bgColor = type === "create"?  "bg-yellow-400" : type ==="update"? " bg-blue-100":" bg-purple-200";
    const [open,SetOpen] = useState(false);
    const Form = ()=>
        {
            return type ==="delete" && id ? (
                <form action="" className="p-4 flex flex-col gap-4" >
                <span className="text-center font-medium">All data will be lost. Are you sure you want to delete this {table} ?</span>
                <button  className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>

                </form>
            ): <TeacherForm type="update" data={data}/>
        }
    return(
        <>
        <button className= {`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={()=>SetOpen(true)}>
        <Image src={`/${type}.png`}  alt="" width={16} height={16}/>
        </button>
        {open && (
        <div className=" absolute w-screen h-screen flex justify-center items-center bg-opacity-60 bg-black top-0 left-0 z-50">
        <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]  2xl:w-[40%] ">
        <Form/>
        <div className="absolute top-4 right-4 cursor-pointer " onClick={()=> SetOpen(false)}>
        <Image src="/close.png" alt="" width={14} height={14}/>
         </div>
         
         </div>
        </div>
        )}

        </>
    )
}
export default FormModal;