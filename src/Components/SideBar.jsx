import React from 'react'
import { TiHomeOutline } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogoCodepen } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useEffect,useState } from 'react';


function SideBar({slideOrNot,className}) {
    const url=`https://api.unsplash.com/search/photos?page=1&query=user&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
    let [imgs,setImg] = useState();
       useEffect(()=>{
        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{console.log(data)
         return data.results
         
        }).then((data)=>{setImg(data[0])}).catch((err)=>{console.log(err)})
       },[url])
    const NavItems=[{tag:<TiHomeOutline className="text-white" />,title:"Home"},{tag:<FaUserAlt  className="text-white"/>,title:"user"},{tag:<AiFillProduct className="text-[white]" />,title:"product"},{tag:<FaCartShopping  className="text-white"/>,title:"order"},{tag:<GrUserWorker className="text-[white]" />,title:"worker"}]
    
  
    const [width,setWidth] = useState()
    useEffect(()=>{
      setWidth(window.innerWidth)
      
    },[width])
    window.addEventListener('resize',()=>{
      setWidth(window.innerWidth)
    })

  return (
    <div className={` w-[16vw] bg-[#1C1C1E] min-h-[100vh] fixed sidebar  z-[1000] ${slideOrNot? "" : "left-[-70%]"} wforpad`}>
      <div className='flex  items-center text-[2rem] mx-4 gap-3 pt-28 gellytrans'>
        <div><IoLogoCodepen className='text-[#b947ff] text-[2.4rem]' /></div> <h1 className='text-white font-semibold'>Werker</h1>
        
      </div>
       

       <div className='flex flex-col gap-4 mx-auto w-[90%] mt-[30%]'>
         {NavItems.map((item)=> 
        <NavLink to={`/${item.title}`} className={({isActive})=>`flex gap-3 items-center navitem w-[95%] bg-[#363638] rounded-lg px-2 text-[1.1rem] text-[#fcf1f1]  py-[6.6px] capitalize ${isActive? "bg-[#b947ff]" : ""}`}>
            {item.tag}
            {item.title}
        </NavLink>)}
       </div>
         
         

         <div className='w-full h-7rem flex gap-2 items-center bg-[#363638] absolute b1 navitem bottom-0 py-2 px-2'>
             <div className='w-[3rem] h-[3rem] rounded-full bg-white overflow-hidden'><img src={imgs?.urls?.regular} alt="" /></div>
            <div> 
                <h1 className="text-[#d7d6d6] text-[0.9rem]">Vishal kumar</h1>
                <p className='text-[#a1a0a0] text-[0.7rem]'>Hr Mangager</p>
            </div>

              
         </div>
      
        
       
      
       
    </div>
  )
}

export default SideBar