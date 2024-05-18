import React from 'react'
import { useState,useEffect } from 'react';

function UserCard({item,index}) {
    const url=`https://api.unsplash.com/search/photos?page=${index}&query=user&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
    let [imgs,setImg] = useState();
       useEffect(()=>{
        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{console.log(data)
         return data.results
         
        }).then((data)=>{setImg(data[0])}).catch((err)=>{console.log(err)})
       },[url])
      
  return (
    <div className=' text-[white]   smtc flex smfc justify-between bg-[#4747472a] hover:bg-[#47474759] rounded-lg p-2 items-center px-4'>
        <div className='flex  smfc items-center gap-4' >
          <div className='w-[5rem] h-[5rem] bg-white rounded-full overflow-hidden'><img src={imgs?.urls.regular} alt="" className='scale-[1.8]' /></div>
          <div>
          <div>{item.name}</div>
           <p className='text-[0.9rem] capitalize text-[#d4d4d4]'>total products: <span className='text-[#56ee56]'>{item.productBy}</span></p>
          </div>
        </div>
        <div>
            <div className='text-[#d0d0d0] capitalize text-[0.9rem]'> joined Date : <span className='text-[#a24cfe] text-[0.8rem]'>
                {item.jd}</span></div>
            <div className='text-[#d0d0d0] capitalize text-[0.9rem]'>last purchase: <span className='text-[#ffb13b] text-[0.8rem]'>{item.lb}</span></div>
        </div>

    </div>
  )
}

export default UserCard