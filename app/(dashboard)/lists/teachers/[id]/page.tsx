import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import FormModal from "@/app/components/FormModal";
import Performance from "@/app/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () =>
{
    return(
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* {left} */}
        <div className="w-full xl:w-2/3">
        {/* {top} */}
        <div className="flex flex-col  lg:flex-row gap-4">
        {/* {user info card} */}
        <div className="bg-blue-300 py-6 px-4  rounded-md  flex-1 flex gap-4">
        <div className="w-1/3">
        <Image src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200" 
        alt="" 
        width={144} 
        height={144} 
        className="w-36 h-36 rounded-full object-cover"/>
        </div>
        <div className="w-2/3 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Luis Monroe</h1>
        <FormModal table="teacher" type="update" data={{
              id:1,
              username:"charlie chaplin",
              password:"password",
              email:"charlie@gmail.com",
              firstName:"Charlie",
              lastName:"Chaplin",
              phone:"+91 6382837464",
              address:"minnesota ohio, michigan",
              bloodType:"A+",
              dateOfBirth:"2000-12-12",
              sex:"male",
              img:"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",

         } }/>
         </div>
        <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quia?
        </p>
        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
        
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
        <Image src="/blood.png" alt="" width={14} height={14}/>
        <span>A++</span>
        </div>

        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
        <Image src="/date.png" alt="" width={14} height={14}/>
        <span>January 2025</span>
        </div>

        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
        <Image src="/mail.png" alt="" width={14} height={14}/>
        <span>User@gmail.com</span>
        </div>

        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
        <Image src="/phone.png" alt="" width={14} height={14}/>
        <span>+91 3456784560</span>
        </div>

        </div>
        </div>
        </div>
        {/* {small card} */}
        <div className="flex-1 flex justify-between flex-wrap ">

        {/* {card} */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
        <Image src="/singleAttendance.png" alt=" " width={24} height={24} className="w-6 h-6"/>
        <div className="">
        <h1 className="text-xl font-semibold">90%</h1>
        <span className="text-sm text-gray-400">Attendance</span>
        </div>
        </div>

         {/* {card} */}
         <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
        <Image src="/singleClass.png" alt=" " width={24} height={24} className="w-6 h-6"/>
        <div className="">
        <h1 className="text-xl font-semibold">6</h1>
        <span className="text-sm text-gray-400">Classes</span>
        </div>
        </div>

         {/* {card} */}
         <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
        <Image src="/singleBranch.png" alt=" " width={24} height={24} className="w-6 h-6"/>
        <div className="">
        <h1 className="text-xl font-semibold">2</h1>
        <span className="text-sm text-gray-400">Branches</span>
        </div>
        </div>

         {/* {card} */}
         <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
        <Image src="/singleLesson.png" alt=" " width={24} height={24} className="w-6 h-6"/>
        <div className="">
        <h1 className="text-xl font-semibold">6</h1>
        <span className="text-sm text-gray-400">Lessons</span>
        </div>
        </div>

        </div>
        </div>
        {/* {bottom} */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
        <h1 className="text-xl font-semibold">Teacher&apos;s Schedule</h1>
        <BigCalendar/>
        </div>
        </div>
        {/* {right} */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md">
        <h1 className="font-semibold text-xl">Shortcuts</h1>
        <div className=" mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
        <Link href="/" className="p-3 rounded-md bg-blue-100">Teacher&apos;s Classes</Link>
        <Link href="/" className="p-3 rounded-md bg-yellow-100">Teacher&apos;s Exams</Link>
        <Link href="/" className="p-3 rounded-md bg-pink-100">Teacher&apos;s Assignments</Link>
        <Link href="/" className="p-3 rounded-md bg-purple-100">Teacher&apos;s Lessons</Link>
        <Link href="/" className="p-3 rounded-md bg-blue-100">Teacher&apos;s Students</Link>
        
        </div>
        </div>
        <Performance/>
        <Announcements/>
        </div>
        </div>
        )
}
export default SingleTeacherPage;