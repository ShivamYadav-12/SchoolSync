"use client"
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id:1,
        title: "Lorem ipsum dolor sit amet.",
        time:"12:00PM to 2:00PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas!",
    },
    {
        id:2,
        title: "Lorem ipsum dolor sit ",
        time:"12:00PM to 2:00PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas!",
    },
    {
        id:3,
        title: "Lorem ipsum dolor sit amet.",
        time:"12:00PM to 2:00PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas!",
    },
]


const EventCalendar = () =>{
    const [value, onChange] = useState<Value>(new Date());

    return(
        <div className=" bg-white p-4 rounded-md">
         <Calendar onChange={onChange} value={value} />
         <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold my-4'> Events</h1>  
        <Image   src="/moredark.png" alt='' width={20} height={20}/>
         </div>
         <div className='flex flex-col gap-4'>

            {events.map(event =>(
            <div key={event.id} className="p-5 rounded-md border-2 border-gray-100  border-t-4 odd:border-t-cyan-400 even:border-t-yellow-400">
            <div className="flex justify-between items-center">
            <h1 className=" font-semibold text-gray-600"> {event.title}</h1>
            <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>

            <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
         </div>

            ) )}

         </div>

        </div>
        
    )
}
export default EventCalendar;