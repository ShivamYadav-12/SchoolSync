import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";


const Teacher = ()=>{
    return(
        <div className=" p-4 flex  gap-4 flex-col xl:flex-row flex-1">
        <div className="w-full xl:w-2/3">
        <div className="bg-white h-full rounded-md p-4">
        <h1 className="font-semibold text-xl">Schedule</h1>
        <BigCalendar/>

        </div>
        </div>
        <div className="w-full xl:w-1/3">
        
        <Announcements/>
        
        </div>
        </div>
    )
}
export default Teacher;