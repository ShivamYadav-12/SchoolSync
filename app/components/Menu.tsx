import Link from "next/link";
import Image from "next/image";
const menuItems = [
    {
        title:"MENU",
        items:[
            {
                icon:'/home.png',
                label:"Home",
                href:'/'
            },
            {
                icon:'/teacher.png',
                label:"Teachers",
                href:'/teachers'
            },
            {
                icon:'/student.png',
                label:"Students",
                href:'/students'
            },
            {
                icon:'/parent.png',
                label:"Parents",
                href:'/parents'
            },
            {
                icon:'/class.png',
                label:"Classes",
                href:'/classes'
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
              },

        ]
    },
    {

    title:'Others',
    items:[
        
            {
                icon:'/profile.png',
                label:"Profile",
                href:'/profile'
            },

            {
                icon:'/setting.png',
                label:"Settings",
                href:'/settings'
            },
            {
                icon:'/logout.png',
                label:'Logout',
                href:'/logout'
            },
        
    ]


    }

]

const Menu =()=>{
    return (
        <div  className="mt-4  text-sm">
       {menuItems.map((i) =>( 
        <div  className="flex flex-col gap-2 " key={i.title}>
        <span className="hidden lg:block my-4 font-light text-gray-400">{i.title}
       
        </span>
    {i.items.map((item)=>(
        <Link 
        className="flex items-center justify-center gap-4 py-2 "
        href={item.href}  
        key={item.label}
        >
           <Image src={item.icon} alt="" width ={20} height={20}/>
            <span className="hidden lg:block text-gray-500">{item.label}</span>

        </Link>
    ))}
    </div>
       ))}
        </div>
    )
}
export default Menu;