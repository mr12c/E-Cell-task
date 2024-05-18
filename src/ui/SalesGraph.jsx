import React from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Line,Doughnut}  from "react-chartjs-2"
import { useState } from 'react';
 
function SalesGraph() {
  let [content,setContent]  = useState(true);
  let [content2,setContent2] = useState(true);
  return (
    <div className='w-full  grid grid-cols-3 grid-rows-1 gap-4 mt-5 *:rounded-lg' >
        <div className='bg-[#39383849] row-span-1 col-span-2 p-2 linegraph'>
             <div className='flex justify-between mt-4 ml-3'>
              <div><h1 className='text-[#eae8e8]'>Sales Graph</h1>
            <p className='text-[#bfbcbc] capitalize text-[0.9rem] smtxt'>track you sales on month or annual basis</p></div>
            <div className='flex'>
              <div className={`px-2 w-[9rem]  h-[2rem] relative py-1 navitem rounded-full bg-[#39383849] flex gap-6 after:w-[50%] after:h-[90%] after:translate-y-[5%] after:left-[2%] after:absolute after:navitem after:bg-[#2349e2] after:top-0 after:rounded-full cursor-pointer ${content? "after:left-[48%]":"after:left-[2%]"} `} onClick={()=>setContent(prev=>!prev)}>
                        <h1 className='font-medium text-[#7e7e7e] '>Annual</h1>
                        <h2 className='font-medium text-[#c4c4c4] '>Week</h2>
                      </div>
            </div>
             </div>
             <div>
              <Line
                data={ content? {
                  labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
                  datasets:[
                    {
                      label:'sales',
                      data:[10,60,30,40,300,60,73,650,600,100,1100,120],
                      backgroundColor:'#42e06f',
                      borderColor:'#42e06f',
                      borderWidth:1
                    },
                    {
                      label:'profit',
                      data:[500,900,300,250,120,60,400,890,700,1000,1500,1240],
                      backgroundColor:'#f460e5',
                      borderColor:'#f460e5',
                      borderWidth:1
                    }
                    
                  ]
                } : {
                  labels:["sun","mon","tues","wed","thurs","fri","sat","sun"],
                  datasets:[
                    {
                      label:'sales',
                      data:[20,90,200,250,900,1500,1200],
                      backgroundColor:'#42e06f',
                      borderColor:'#42e06f',
                      borderWidth:1
                    },
                    {
                      label:'profit',
                      data:[500,900,300,250,120,60,400],
                      backgroundColor:'#f460e5',
                      borderColor:'#f460e5',
                      borderWidth:1
                    }
                    
                  ]
                }}
              ></Line>
             </div>
        </div>
       
        <div className='bg-[#39383849] row-span-1 p-2 bargraph'>
              <h1 className='text-[#c8c7c7]'>Employer Tracker</h1>

              <div className='mt-8'>
               <Doughnut data={{
                labels:["trainee","SDE-1","SDE-2","SDE-3"],
                datasets:[
                  {
                    label:"employe",
                    data:[20,90,200,250],
                    backgroundColor:["#42e06f","#4190ff","#f460e5","#ff823f"],
                    borderWidth:1
                  }
                ]
               }}>

               </Doughnut>
                 
              </div>
        </div>
        <div className='bg-[#39383849] col-span-3 row-span-1 p-2 linegraph'>
        <div className='flex justify-between mt-4 ml-3'>
              <div><h1 className='text-[#eae8e8]'>Custumer Retention</h1>
            <p className='text-[#bfbcbc] capitalize text-[0.9rem] smtxt'>track you Custumers on month or annual basis</p></div>
            <div className='flex'>
              <div className={`px-2 w-[9rem]  h-[2rem] relative py-1 navitem rounded-full bg-[#39383849] flex gap-6 after:w-[50%] after:h-[90%] after:translate-y-[5%] after:left-[2%] after:absolute after:navitem after:bg-[#2349e2] after:top-0 after:rounded-full cursor-pointer ${content2? "after:left-[48%]":"after:left-[2%]"} `} onClick={()=>setContent2(prev=>!prev)}>
                        <h1 className='font-medium text-[#7e7e7e] '>Annual</h1>
                        <h2 className='font-medium text-[#c4c4c4] '>Week</h2>
                      </div>
            </div>
             </div>
             <div >
             <Bar 
                data={ content2? {
                  labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
                  datasets:[
                    {
                      label:'retained',
                      data:[10,60,30,40,300,60,73,650,600,100,1100,120],
                      backgroundColor:'#42e06f',
                      borderColor:'#42e06f',
                      borderWidth:1
                    },
                    {
                      label:'leave',
                      data:[500,900,300,250,120,60,400,890,700,1000,1500,1240],
                      backgroundColor:'#f460e5',
                      borderColor:'#f460e5',
                      borderWidth:1
                    }
                    
                  ]
                } : {
                  labels:["sun","mon","tues","wed","thurs","fri","sat","sun"],
                  datasets:[
                    {
                      label:'retained',
                      data:[20,90,200,250,900,1500,1200],
                      backgroundColor:'#42e06f',
                      borderColor:'#42e06f',
                      borderWidth:1
                    },
                    {
                      label:'leave',
                      data:[500,900,300,250,120,60,400],
                      backgroundColor:'#f460e5',
                      borderColor:'#f460e5',
                      borderWidth:1
                    }
                    
                  ]
                }}
              ></Bar>
             </div>
        </div>
    </div>
  )
}

export default SalesGraph