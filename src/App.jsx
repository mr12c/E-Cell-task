 import React, { useEffect } from 'react'
 import SideBar from './Components/SideBar'
 import {Outlet} from'react-router-dom'
 import { useState } from 'react'
 function App() {
  const [slideSidebar,setSlideSidebar] = useState(false)
  const [width,setWidth] = useState()
  useEffect(()=>{
    setWidth(window.innerWidth)
    
  },[width])
  window.addEventListener('scroll',()=>{
    setSlideSidebar(false)
    console.log('vishal')
  })

  window.addEventListener('resize',()=>{
    setWidth(window.innerWidth)
  })
   return (
     <div className='w-[100vw] h-[100vh] bg-[#18181a] overflow-x-hidden flex relative'>
      <SideBar slideOrNot={slideSidebar} className="gellytrans"></SideBar>
      <div className={`mht ${slideSidebar && width>900 ? "ml-[17%] w-[83vw]": "w-[100vw]"} gellytrans`}><Outlet ></Outlet></div>
      <div className={`w-[3.5vw] navgrid h-[3.5vw] fixed top-[4%] left-[2%] flex rounded-full flex-col z-[3000] cursor-pointer gap-2 bg-[#ff3fff] justify-center items-center p-2 ${slideSidebar? "gap-0":""}`} onClick={()=>setSlideSidebar(prev=>!prev)}>
        <div className={`w-full h-[2px] ${slideSidebar? "rotate-45" : ""} bg-white gellytrans` }></div>
        <div className={`w-full h-[2px] ${slideSidebar? "-rotate-45" : ""} bg-white gellytrans`}></div>
        
      </div>
     </div>
   )
 }
 
 export default App