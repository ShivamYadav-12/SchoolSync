"use client"
import Image from "next/image";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
      },
    
    {
      name: 'Girls',
      count: 50,
      fill: 'cyan',
    },
    {
      name: 'boys',
      count: 50,
      fill: 'yellow',
    },
  ];

const CountChart = () =>

{


    return(
        <div className="bg-white rounded-xl p-4 w-full h-full">
            {/* {title } */}
        <div className="flex justify-between items-center">
        <h1 className="font-semibold">Students</h1>
        <Image src ="/moredark.png" alt="" width={20} height={20}/>

        </div>
        {/* {countchart} */}
        <div className="w-full h-[75%] relative">
        <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
          
           
            background
           
            dataKey="count"
          />
        
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />


        </div>
        {/* {bottom } */}
        <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 ">
            <div className="rounded-full bg-cyan-500 h-5 w-5"></div>
            <h1 className="font-bold">1,234</h1>
            <h2  className="text-xs text-gray-300">Boys [45%]</h2>
        </div>
        <div className="flex flex-col gap-1 ">
            <div className="rounded-full bg-yellow-500 h-5 w-5"></div>
            <h1 className="font-bold">1,234</h1>
            <h2  className="text-xs text-gray-300">Girls [55%]</h2>
        </div>

        </div>

    
        </div>
    )
}
export default CountChart;