import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Card1 from '../ui/Card1';
import { FaClock } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import SalesGraph from '../ui/SalesGraph';
function Home({slideOrNot}) {
  console.log(slideOrNot)
  return (
    <div className={`w-full min-h-[100vh] flex flex-col respw `}>
        <div className='w-f flex justify-between mt-8 px-2 hometitle'>

            <div className='relative flex items-center searchbar ml-20  '> <CiSearch  className="absolute lg:left-[13%] searchicon font-bold text-[1.3rem] text-[#d050f4]"/>
<input type="search" className='bg-[#5f5f604d] navitem lg:ml-10 lg:pl-12 sm:ml-6 outline-none pl-[3rem] sm:pl-[2rem] lg:w-[400px] rounded-md py-2 px-2  placeholder:text-opacity-[0.5]'  placeholder='Search Worker Name'/></div>
               <div className='text-[#cccaca] flex gap-4 text-[1.3rem] mt-3'><IoMdNotificationsOutline/> <MdOutlineMessage/></div></div>

      <div className='w-[95%] mx-auto grid lg:grid-cols-4 gap-2 doeji mt-10'>
         <Card1 tag={<FaClock className='text-[white] scale-[1.3] '/>} title="Delivery on time" c="#4242e0" data={{first:"20%",second:"18%"}}></Card1>
         <Card1 tag={<CiDollar className='text-[white] scale-[1.3]'/>} title="Total Revenue" c="#4ecd8e" data={{first:"15%",second:"18%"}} ></Card1>
         <Card1 tag={<FaHandshakeAngle className='text-[white] scale-[1.3]'/>} title="Custumer Retention" c="#f460e5" data={{first:"80%",second:"50%"}}></Card1>
         <Card1 tag={<MdOutlineReviews className='text-[white] scale-[1.3]'/>} title="Avg Ratings" c="#c1c1c1" data={{first:"4.7",second:"4.2"}}></Card1>
      </div>


      <div className='w-[95%] mx-auto h-fit'>
        <SalesGraph></SalesGraph>
      </div>


    </div>
  )
}

export default Home