'use client'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";;
import { Movie } from '@/types/typing';
import { useRef, useState } from 'react';
import Thumbnail from "@/components/ui/Thumbnail";

interface Props{
    title:string,
    movies:Movie[]
}
function Row({title,movies}: Props){
  const rowRef = useRef<HTMLDivElement>(null)

  const[isMoved ,setIsmoved] = useState(false)

  const handleClick = (direction: string) =>{
    setIsmoved(true)
    
    console.log("hello", movies);

    if(rowRef.current){
        const {scrollLeft , clientWidth} = rowRef.current

        const scrollTo = direction === "left"
         ? scrollLeft - clientWidth 
         : scrollLeft + clientWidth
         
         rowRef.current.scrollTo({left : scrollTo , behavior: "smooth"})
    }
  }

  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
     <h2 className='w-56 cursor-pointer text-sm font-semibold 
     text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>
        {title}
     </h2>
     <div className='group relative md:-ml-2'>
        <SlArrowLeft className={`absolute top-0 bottom-0 left-2 
         z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition
         hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`} 
         onClick={() => handleClick("left")}/>
        
        <div
         ref={rowRef}
         className='flex items-center space-x-10  pl-7
         overflow-x-auto scrollbar-hide  md:space-x-2.5 md:p-2' >
        
        {movies.map((movie)=>(
           <Thumbnail key={movie.id} movie={movie}/>
        ))}
       
        </div>

        <SlArrowRight  className={`absolute top-0 bottom-0 right-2 
        z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition
         hover:scale-125 group-hover:opacity-100`} 
        onClick={() => handleClick("right")}/>

     </div>
    </div>
  )
  }

export default Row