import React from 'react'
import UserCard from '../ui/UserCard'
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';
import { useEffect } from 'react';
function User() {
  const data = [
    {name: "John De", productBy: "35", jd: "23 April 2018", lb: "10 June 2020", index:1},
    {name: "Jane Smith", productBy: "36", jd: "24 April 2018", lb: "11 June 2020", index:2},
    {name: "Michael Johnson", productBy: "37", jd: "25 April 2018", lb: "12 June 2020", index:3},
    {name: "Emily Davis", productBy: "38", jd: "26 April 2018", lb: "13 June 2020", index:4},
    {name: "Chris Brown", productBy: "39", jd: "27 April 2018", lb: "14 June 2020", index:5},
    {name: "Patricia Garcia", productBy: "40", jd: "28 April 2018", lb: "15 June 2020", index:6},
    {name: "Robert Martinez", productBy: "41", jd: "29 April 2018", lb: "16 June 2020", index:7},
    {name: "Linda Rodriguez", productBy: "42", jd: "30 April 2018", lb: "17 June 2020", index:8},
    {name: "David Wilson", productBy: "43", jd: "1 May 2018", lb: "18 June 2020", index:9},
    {name: "Barbara Hernandez", productBy: "44", jd: "2 May 2018", lb: "19 June 2020", index:10},
    {name: "James Clark", productBy: "45", jd: "3 May 2018", lb: "20 June 2020", index:11},
    {name: "Mary Lewis", productBy: "46", jd: "4 May 2018", lb: "21 June 2020", index:12},
    {name: "Paul Walker", productBy: "47", jd: "5 May 2018", lb: "22 June 2020", index:13},
    {name: "Susan Hall", productBy: "48", jd: "6 May 2018", lb: "23 June 2020", index:14},
    {name: "Mark Allen", productBy: "49", jd: "7 May 2018", lb: "24 June 2020", index:15},
    {name: "Nancy Young", productBy: "50", jd: "8 May 2018", lb: "25 June 2020", index:16},
    {name: "Charles King", productBy: "51", jd: "9 May 2018", lb: "26 June 2020", index:17},
    {name: "Karen Wright", productBy: "52", jd: "10 May 2018", lb: "27 June 2020", index:18},
    {name: "Steven Lopez", productBy: "53", jd: "11 May 2018", lb: "28 June 2020", index:19},
    {name: "Lisa Hill", productBy: "54", jd: "12 May 2018", lb: "29 June 2020", index:20},
    {name: "Daniel Scott", productBy: "55", jd: "13 May 2018", lb: "30 June 2020", index:21},
    {name: "Betty Green", productBy: "56", jd: "14 May 2018", lb: "1 July 2020", index:22},
    {name: "Joseph Adams", productBy: "57", jd: "15 May 2018", lb: "2 July 2020", index:23},
    {name: "Dorothy Baker", productBy: "58", jd: "16 May 2018", lb: "3 July 2020", index:24},
    {name: "Thomas Gonzalez", productBy: "59", jd: "17 May 2018", lb: "4 July 2020", index:25},
    {name: "Sarah Nelson", productBy: "60", jd: "18 May 2018", lb: "5 July 2020", index:26},
    {name: "Donald Carter", productBy: "61", jd: "19 May 2018", lb: "6 July 2020", index:27},
    {name: "Karen Mitchell", productBy: "62", jd: "20 May 2018", lb: "7 July 2020", index:28},
    {name: "Michael Perez", productBy: "63", jd: "21 May 2018", lb: "8 July 2020", index:29},
    {name: "Linda Roberts", productBy: "64", jd: "22 May 2018", lb: "9 July 2020", index:30},
  ];

  function findUsersByPartialName(data, partialName) {
    const lowerPartialName = partialName?.toLowerCase();
    return data.filter(user => user?.name?.toLowerCase().includes(lowerPartialName));
  }
  let [query,setQuery] = useState();
  let [searchArray,setSearchArray] = useState()
  useEffect(()=>{
   setSearchArray(findUsersByPartialName(data,query))
  },[query])

  return (
    <div className='w-[100%] min-h-[100vh] mx-auto flex flex-col rspew' >
        <div className='flex justify-between  items-center ei0j0-32e'><div className='text-[#b348ff] font-bold items-center text-[1.4rem] capitalize ml-[8%] usertxt mt-4'><h1>users</h1></div>    <div className='relative flex items-center mt-5 usersbox '> <CiSearch  className="absolute dq03-0943 left-[13%]  font-bold text-[1.3rem] text-[#d050f4]"/>
<input type="search" value={query}  onChange={(e)=>setQuery(e.target.value)} className='bg-[#5f5f604d]  text-[white] navitem ml-10 outline-none pl-[3rem] w-[400px] rounded-md py-2 px-2 searchmackbool   placeholder:text-opacity-[0.5]'  placeholder='Search User Name'/></div></div>
      <div className='flex flex-col px-5 gap-4 mt-10 w-full'>
         {searchArray?.length<=0 ? data.map((item)=> <UserCard item={item}  index={item.index}></UserCard>) : searchArray?.map((item,index)=> <UserCard item={item} index={item.index}/>)}
      </div>
    </div>
  )
}

export default User