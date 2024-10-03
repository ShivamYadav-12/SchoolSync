import Announcements from "@/app/components/Announcements";
import AttendanceChart from "@/app/components/AttendanceChart";
import CountChart from "@/app/components/CountChart";
import EventCalendar from "@/app/components/EventCalendar";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";

const Admin = ()=>{
    return(
        <div className="p-4 flex flex-col gap-4 md:flex-row ">
          {/* {left} */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
             {/* {userchard} */}
         <div className="flex gap-6 flex-wrap">
            <UserCard type="student"/>
            <UserCard type="Teacher"/>
            <UserCard type="Parent"/>
            <UserCard type="Staff"/>

         </div>
         {/* {middlecharts} */}
         <div  className="  flex gap-4 flex-col lg:flex-row">
            <div className="w-full  lg:w-1/3 h-[450px]">
            <CountChart/>
            </div>
            <div className="w-full  lg:w-2/3 h-[450px]">
            <AttendanceChart/>
            </div>
         </div>
        {/* {bottomchart} */}
        <div className="w-full h-[500px]">
        <FinanceChart/>
        </div>

        </div>

        {/* {right} */}

        <div className="w-full lg:w-1/3 flex flex-col gap-8">
         <EventCalendar/>
         <Announcements/>
        </div>
        </div>
    )
}
export default Admin;