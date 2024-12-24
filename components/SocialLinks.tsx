import { GithubIcon,LinkedinIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tooltip } from './ui/tooltip'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'

const socialData = [
    {
    title:"LinkedIn", 
    Icon:<LinkedinIcon/> , 
    href : "https://www.linkedin.com/in/rohan-phutke-226247263/"
    },
    {
        title:"Github", 
        Icon:<GithubIcon/> , 
        href : "https://github.com/RohanPhutke"
    },
    {
        title:"Twitter", 
        Icon:<TwitterIcon/> , 
        href : "https://x.com/r_c_p_13"
    },
]
function SocialLinks() {
  return (
    <TooltipProvider>
        <div className='flex items-center gap-9'>
        {socialData?.map((item) => (
            <Tooltip key={item?.title}>
            <TooltipTrigger>
            <div  className='text-lightSky/80 border border-lightSky/30 p-2.5
            rounded-full hover:bg-lightSky/10
            hover:border-lightSky hoverEffect'>
                <Link href={item?.href} target='_blank'>
                <span>{item?.Icon}</span>
                </Link>
            </div>
            </TooltipTrigger>
            <TooltipContent className='bg-hoverColor text-black rounded-sm'>{item?.title}</TooltipContent>
            </Tooltip>
        ))}
    </div>
    
    </TooltipProvider>
  )
}

export default SocialLinks