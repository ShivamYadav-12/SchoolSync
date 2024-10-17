"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFields from "../InputFields";
import Image from "next/image";

const schema = z.object({
  username: z.string().min(3, { message: 'UserName must be 3 characters long!' })
    .max(20,{ message: 'UserName must be at most 20 characters long!' }),
  email: z.string().email({message:"Invalid email address"}),
  password: z.string().min(8,{message:"password must have at least 8 characters"}),
  firstName: z.string().min(1,{message:"FirstName is Required"}),
  lastName: z.string().min(1,{message:"LastName is Required"}),
  phone: z.string().min(1,{message:"phone Number is Required"}),
  address: z.string().min(1,{message:"Address is Required"}),
  bloodType: z.string().min(1,{message:"BloodType is Required"}),
  birthDay: z.date({message:"BirthDay is Required"}),
  sex: z.enum(["male","female"],{message:"It is a required field"}),
  img:z.instanceof(File,{message:"Image is required"}),


  });
 type Inputs = z.infer<typeof schema>;
const TeacherForm = ({type,data}:
   { 
    type:"create"|"update";
    data?:any;
}) =>
{
    const { register, handleSubmit ,formState: { errors }} = useForm<Inputs>({
        resolver: zodResolver(schema),
      });

      const onSubmit = handleSubmit((data)=>{
        console.log(data);
      })

    return(
    <form className="flex flex-col gap-8 " onSubmit={onSubmit}>
    <h1 className="text-xl font-semibold">Create a new teacher</h1>
    <span className="text-xa text-gray-400">
        Authenication Information
    </span>
    <div className="flex justify-between gap-2">

    <InputFields 
    label="UserName"
     name="username" 
     defaultValue={data?.username}
     register={register}
     error={errors?.username}
     />
     <InputFields 
    label="Email"
     name="email"
     type="email" 
     defaultValue={data?.email}
     register={register}
     error={errors?.email}
     />
     <InputFields 
    label="Password"
     name="password" 
     type="password"
     defaultValue={data?.password}
     register={register}
     error={errors?.password}
     />
    </div>
    <span className="text-xa text-gray-400">
        Personal Information
    </span>
    <div className="flex justify-between gap-4 flex-wrap">

    <InputFields 
    label="FirstName"
     name="firstname" 
     defaultValue={data?.firstName}
     register={register}
     error={errors?.firstName}
     />
     <InputFields 
    label="LastName"
     name="lastName" 
     defaultValue={data?.lastName}
     register={register}
     error={errors?.lastName}
     />

<InputFields 
    label="Address"
     name="address" 
     defaultValue={data?.address}
     register={register}
     error={errors?.address}
     />

<InputFields 
    label="Phone"
     name="phone" 
     defaultValue={data?.phone}
     register={register}
     error={errors?.phone}
     />
    <InputFields 
    label="Blood-Type"
     name="bloodType" 
     defaultValue={data?.bloodType}
     register={register}
     error={errors?.bloodType}
     />
     <InputFields 
    label="Birthday"
     name="birthDay" 
     defaultValue={data?.birthDay}
     register={register}
     error={errors?.birthDay}
     type="date"
     />
     <div className="flex flex-col gap-2 w-full md:w-1/4">
    <label className="text-xs text-gray-500">Sex</label>
    <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"{...register("sex")} defaultValue={data?.sex}>
    <option value="male">Male</option>
    <option value="female">Female</option>
    </select>
    {errors?.sex?.message && (
        <p className="text-xs text-red-400">{errors.sex.message.toString()}</p>
    )}

    </div>

    <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
    <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
    <Image src="/upload.png"  alt="" width={28} height={28} />
    <span>Upload a photo</span>
    </label>
    <input type="file" id="img" {...register("img")} className="hidden"/>
    {errors?.img?.message && (
        <p className="text-xs text-red-400">{errors.img.message.toString()}</p>
    )}

    </div>

    </div>
    <button className="bg-blue-400 text-white p-2 rounded-md">
        {type== "create"? "Create":"Update"}
    </button>
    
    </form>
    )
}
export default TeacherForm;