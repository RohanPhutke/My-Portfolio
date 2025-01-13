// import React from 'react'
'use client'
import { useTypeWriter } from '@/hooks/use-type-writer'
import {motion} from 'motion/react'
import { useEffect, useState } from 'react'
const HomeDescription = () => {
    const description = 
    ' As a tech-savvy student, I build innovative software projects, solve complex problems, and create user-friendly solutions. I bridge theory and practice through web development and exploring new tools to tackle real-world challenges.'
    const [hasloaded,setHaslLoaded] = useState(false)
    const {displayedText,isComplete} = useTypeWriter(description,30);
    
    useEffect(()=>{
        setHaslLoaded(true)
    },[])

  return ( <motion.p className='w-auto font-normal leading-7 mb-6 min-h-30'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1,duration:0.5}}
            >

            {hasloaded ? displayedText.split("").map((char,index) =>
            <motion.span key={index} 
            initial={{color:'rgb(156 163 175)'}}
            animate ={{color:isComplete?'rgb(255 255 255 255)':'rgb(156 163 175)'}}
            transition={{duration:0.5,delay:index*0.03}}
            >
            {char}
            </motion.span>)
            : (<span>{description}</span>)
            }

  </motion.p>
  );
};

export default HomeDescription