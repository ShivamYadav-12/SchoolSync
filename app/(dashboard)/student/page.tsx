import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import EventCalendar from "@/app/components/EventCalendar";

const Student = ()=>{
    return(
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
        <div className="w-full xl:w-2/3">
        <div className="bg-white h-full rounded-md p-4">
        <h1 className="font-semibold text-xl">Schedule(4A)</h1>
        <BigCalendar/>

        </div>
        </div>
        <div className="w-full xl:w-1/3">
        <EventCalendar/>
        <Announcements/>
        
        </div>
        </div>
    )
}
export default Student;