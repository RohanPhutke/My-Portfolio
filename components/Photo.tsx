"use client"
import React from 'react'
import hero from  '@/images/hero.png'
import Image from 'next/image'
import {motion} from 'motion/react'
const Photo = () => {
    const circleColors = ['#00ff99','#00ff9950',]
    const circleVariant = {
        initial:{
            strokeDasharray : "24 10 0 0",
            rotate:0,
            opacity:0,
        },
        animate:(index:number)=> ({
            strokeDasharray : ["15 120 25 25", "16 25 92 72", "4 25 22 22"],
            rotate:[120,360],
            opacity:1,
            transition:{
                 strokeDasharray:{
                    duration:20,
                    repeat:Infinity,
                    repeatType:"reverse",
                 },
                 rotate:{
                    duration:20,
                    repeat:Infinity,
                    repeatType:"reverse",
                 },
                 opacity:
                 {
                    duration:0.4,
                    delay: 2 + index*0.4,
                    ease:"easeIn",
                 },
            },
        })
    };
  return (
    <div className='w-full h-full relative flex items-top
    justify-center'>
        <motion.div initial={{opacity:0}} animate={{opacity:1,
        transition:
            {delay:2,duration:0.4,ease:'easeIn'}
        }} 
        className='relative'
        >
            <motion.div initial={{opacity:0}} animate={{opacity:1,
            transition : {delay:2.4,duration:0.4,ease:'easeInOut'}
            }}
            className='absolute top-1/2 left-1/2 transform
            -translate-x-1/2 -translate-y-1/2 z-10 justify-top'>
                <div className='w-[450px] h-[450px] lg:w-[400px] lg:h-[420px]
                mix-blend-lighten overflow-hidden rounded-full -mt-20'>
                <Image 
                src={hero} 
                alt="heroImage" 
                width={400} 
                height={400}    
                quality={100} 
                className="object-contain w-full h-full" 
                priority
                />
                </div>
            </motion.div>
            <svg className='w-[300px] lg:w-[506px] h-[300px] lg:h-[506px] 
            viewBox="0 0 506 506' fill = "none" xmlns="http://www.w3.org/2000/svg">
               {circleColors.map((color,index)=>(
                 <motion.circle key={index} cx="253" cy ="253" r = {240 - index * 15} 
                 stroke={color}
                 strokeWidth={4}
                 strokeLinecap='round'
                 variants={circleVariant}
                 initial='intial'
                 animate="animate"
                 custom={index}
                 />
               ))}
            </svg>
        </motion.div>
    </div>
  )
}

export default Photo