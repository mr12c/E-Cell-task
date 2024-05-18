import React, { useEffect } from 'react'
import WorkerCard from '../ui/WorkerCard'
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

function Worker() {
  const data = [
    { name: "John Doe", position: "trainee", salary: "500$", experienced: "DevOps", skills: "Python, Java, Kubernetes, Docker", index: 1 },
    { name: "Jane Smith", position: "sde-1", salary: "450$", experienced: "Backend Developer", skills: "JavaScript, React, Node.js", index: 2 },
    { name: "Michael Johnson", position: "sde-2", salary: "600$", experienced: "Frontend Developer", skills: "HTML, CSS, JavaScript", index: 3 },
    { name: "Emily Davis", position: "swe", salary: "550$", experienced: "Full Stack Developer", skills: "Java, Spring, Angular", index: 4 },
    { name: "Chris Brown", position: "product manager", salary: "650$", experienced: "Project Management", skills: "Agile, Scrum, Kanban", index: 5 },
    { name: "Patricia Garcia", position: "trainee", salary: "480$", experienced: "DevOps", skills: "Docker, Kubernetes, CI/CD", index: 6 },
    { name: "Robert Martinez", position: "sde-1", salary: "470$", experienced: "Backend Developer", skills: "Node.js, Express, MongoDB", index: 7 },
    { name: "Linda Rodriguez", position: "sde-2", salary: "580$", experienced: "Frontend Developer", skills: "Vue.js, Nuxt.js, JavaScript", index: 8 },
    { name: "David Wilson", position: "swe", salary: "600$", experienced: "Full Stack Developer", skills: "Python, Django, React", index: 9 },
    { name: "Barbara Hernandez", position: "product manager", salary: "660$", experienced: "Product Management", skills: "Roadmapping, User Stories, UX/UI", index: 10 },
    { name: "James Clark", position: "trainee", salary: "510$", experienced: "DevOps", skills: "AWS, Terraform, Jenkins", index: 11 },
    { name: "Mary Lewis", position: "sde-1", salary: "460$", experienced: "Backend Developer", skills: "PHP, Laravel, MySQL", index: 12 },
    { name: "Paul Walker", position: "sde-2", salary: "590$", experienced: "Frontend Developer", skills: "Svelte, JavaScript, TypeScript", index: 13 },
    { name: "Susan Hall", position: "swe", salary: "540$", experienced: "Full Stack Developer", skills: "Ruby, Rails, React", index: 14 },
    { name: "Mark Allen", position: "product manager", salary: "630$", experienced: "Product Management", skills: "Market Analysis, UX Research, MVP", index: 15 },
    { name: "Nancy Young", position: "trainee", salary: "520$", experienced: "DevOps", skills: "Azure, Ansible, Kubernetes", index: 16 },
    { name: "Charles King", position: "sde-1", salary: "455$", experienced: "Backend Developer", skills: "Java, Spring Boot, PostgreSQL", index: 17 },
    { name: "Karen Wright", position: "sde-2", salary: "610$", experienced: "Frontend Developer", skills: "Angular, TypeScript, RxJS", index: 18 },
    { name: "Steven Lopez", position: "swe", salary: "570$", experienced: "Full Stack Developer", skills: "C#, .NET, Vue.js", index: 19 },
    { name: "Lisa Hill", position: "product manager", salary: "620$", experienced: "Product Management", skills: "Lean, Prototyping, User Testing", index: 20 },
    { name: "Daniel Scott", position: "trainee", salary: "530$", experienced: "DevOps", skills: "GCP, Docker, Helm", index: 21 },
    { name: "Betty Green", position: "sde-1", salary: "465$", experienced: "Backend Developer", skills: "Python, Flask, SQLite", index: 22 },
    { name: "Joseph Adams", position: "sde-2", salary: "620$", experienced: "Frontend Developer", skills: "Ember.js, JavaScript, Sass", index: 23 },
    { name: "Dorothy Baker", position: "swe", salary: "560$", experienced: "Full Stack Developer", skills: "Go, Echo, Angular", index: 24 },
    { name: "Thomas Gonzalez", position: "product manager", salary: "640$", experienced: "Product Management", skills: "Strategic Planning, User Research, Wireframing", index: 25 },
    { name: "Sarah Nelson", position: "trainee", salary: "540$", experienced: "DevOps", skills: "Linux, Shell Scripting, Puppet", index: 26 },
    { name: "Donald Carter", position: "sde-1", salary: "475$", experienced: "Backend Developer", skills: "Rust, Actix, PostgreSQL", index: 27 },
    { name: "Karen Mitchell", position: "sde-2", salary: "630$", experienced: "Frontend Developer", skills: "Backbone.js, JavaScript, LESS", index: 28 },
    { name: "Michael Perez", position: "swe", salary: "580$", experienced: "Full Stack Developer", skills: "Scala, Play, React", index: 29 },
    { name: "Linda Roberts", position: "product manager", salary: "650$", experienced: "Product Management", skills: "User Personas, Roadmapping, Agile", index: 30 }
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
    <div className='w-[82vw]'>
           <div className='flex justify-between workertitle worker320ij'><div className='text-[#b348ff] font-bold text-[1.4rem] capitalize ml-[8%] wortxt mt-[3%] '><h1>users</h1></div>    <div className='relative flex items-center mt-5 '> <CiSearch  className="absolute left-[13%]  worksearchicon font-bold text-[1.3rem] text-[#d050f4]"/>
<input type="search" value={query}  onChange={(e)=>setQuery(e.target.value)} className='bg-[#5f5f604d] text-[white] navitem ml-10 outline-none pl-[3rem] w-[400px] rounded-md py-2 px-2  placeholder:text-opacity-[0.5]'  placeholder='Search Worker Name'/></div></div>
      <div className='grid w-[96%] mx-auto  gap-4 mt-10 workergrid'>
     {searchArray?.length<=0? data.map((item)=><WorkerCard item={item}/>) : searchArray?.map((item)=><WorkerCard item={item}/>)}
      </div>
    </div>
  )
}

export default Worker