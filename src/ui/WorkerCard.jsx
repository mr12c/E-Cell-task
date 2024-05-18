import React from 'react'
import { useState
,useEffect } from 'react';
function Worker({item}) {
  const url=`https://api.unsplash.com/search/photos?page=${item.index+30}&query=user&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
  let [imgs,setImg] = useState();
     useEffect(()=>{
      fetch(url).then((res)=>{
        return res.json()
      }).then((data)=>{console.log(data)
       return data.results
       
      }).then((data)=>{setImg(data[0])}).catch((err)=>{console.log(err)})
     },[url])
  return (
    <div className=' bg-[#2626265b] rounded-lg flex flex-col navitem p-3 workercard'>
      <div className='w-[5rem] h-[5rem]  rounded-full bg-white mx-auto  overflow-hidden'><img src={imgs?.urls.regular} alt="" /></div>
      <div className='flex text-[0.9rem] text-[white] mt-3'><h1>Name:</h1><span className='text-[#adadadaa]'>{item.name}</span></div>
      <div className='capitalize text-[0.9rem] text-[#e0e0e0] '>position: <span className='text-[#53ff75]'>{item.position}</span></div>
      <div className='capitalize text-[#dad8d8] text-[0.9rem]'>salary : <span className='text-[#5c5cff]'>{item.salary}</span></div>
      <div className='capitalize text-[#dfdede] text-[0.9rem]'>experienced: <span className='text-[0.8rem] text-[#cdcbcb]'>10+ yrs experience in {item.experienced}</span></div>
      <div className='capitalize text-[#d6d3d3] text-[0.9rem]'>skills: <span  className='text-[#868686]'>{item.skills}</span></div>

    </div>
  )
}

export default Worker