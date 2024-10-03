"use client"
import Image from "next/image";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 70,
    
  },
  {
    name: 'Tue',
    present: 30,
    absent: 20,
    
  },
  {
    name: 'Wed',
    present: 80,
    absent: 90,
    
  },
  {
    name: 'Thu',
    present: 90,
    absent: 60,
    
  },
  {
    name: 'Fri',
    present: 50,
    absent: 40,
    
  },
  
];
const AttendanceChart = () =>
{
    return(
        <div className=" bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-end">
            <h1 className="text-xl font-semibold">Attendance</h1>
            <Image src="/moredark.png" alt="" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill :"#d1d5db"}} tickLine={false}  />
          <YAxis axisLine={false} />
          <Tooltip   contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"} } />
          <Bar dataKey="present" fill="yellow" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType="circle" radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="cyan" activeBar={<Rectangle fill="gold" stroke="purple" />} legendType="circle" radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>

        </div>
    )
}
export default AttendanceChart;