import React from 'react'

function Card1({title,data,tag,c}) {
  return (
    <div className='bg-[#39383849] w-[100%] rounded-lg py-5 px-4 flex flex-col gap-4'>
      <div className={`w-[2rem] h-[2rem]  rounded-lg flex justify-center items-center`} style={{background:c}}>{tag}</div>
      <h1 className='text-[#d6d6d6aa] text-[1.1rem]'>{title}</h1>
      <div className='flex items-center gap-[50%]'><h1 className='text-[2rem] font-medium text-[white]'>{data.first}</h1>  

      <p className='text-[#42e06f] mt-4 text-[0.8rem]'>{data.second}</p>
       </div>
    </div>
  )
}

export default Card1