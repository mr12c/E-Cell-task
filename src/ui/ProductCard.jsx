import React from 'react'
import { useState,useEffect } from 'react';

function ProductCard({item,index}) {
    const url=`https://api.unsplash.com/search/photos?page=1}&query=chair&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
    let [imgs,setImg] = useState();
       useEffect(()=>{
        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{console.log(data)
         return data.results
         
        }).then((data)=>{setImg(data[0])}).catch((err)=>{console.log(err)})
       },[url])
 


       



  return (
    <div className='w-[210px] bg-[#55555541] rounded-lg overflow-hidden  hover:bg-[#55555576] productcard'>
        <img src={imgs?.urls?.regular} alt="" className='h-[10rem] w-full img' />
        <div className='px-3 pt-2'>
            <h1 className='text-[#fefefe] text-[0.9rem]'>{item.title}</h1>
            <p className='text-[#ffffff6b] text-[0.8rem]'>{item.description}</p>

        </div>
        <div className='bg-[#8059ff] cursor-pointer py-1 w-[90%] mx-auto text-center rounded mb-2 text-[white] font-medium mt-4'>view more</div>
    </div>
  )
}

export default ProductCard