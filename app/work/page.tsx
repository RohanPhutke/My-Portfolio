'use client';
import PageLayout from '@/components/PageLayout'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import WhiteLinkImg from "@/images/WhiteLinkImg.jpeg";
import HMS from "@/images/HMS.png"
import MOD from "@/images/MOD.jpg"
import WeatherP from "@/images/WeatherP.png"
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const projects = [
  {
    id: "01",
    title: "WhiteLink - Realtime Collaboration Project",
    category: "Collaboration, Real-time Sync",
    description: "Built a digital whiteboard for real-time collaboration with instant updates. Features include brainstorming, app wireframing, and idea organization. Enabled team collaboration with organization creation and member invites. Used Liveblocks for real-time sync and Clerk for secure authentication.",
    stack: ["NextJS 14", "React", "Tailwind", "ShadCN UI", "Convex", "Liveblocks", "Clerk"],
    image: WhiteLinkImg,  // Add the appropriate image path here
    liveURL: "https://white-link.vercel.app",  // Add the live project URL if available
    githubURL: "https://github.com/Rohanphutke",
  },
  {
    id: "02",
    title: "Hostel Management System",
    category: "Backend, Frontend, Database",
    description: "Worked as a Backend Developer and contributed to the frontend, creating RESTful APIs for seamless communication between the frontend and MySQL database, improving data retrieval times by 50%. Developed room booking functionality with a locking system and designed dedicated admin and student dashboards for enhanced user experience.",
    stack: ["ReactJS", "NodeJS", "ExpressJS", "HTML", "CSS", "MySQL"],
    image: HMS,  // Add the appropriate image path here
    liveURL: "/",  // Add the live project URL if available
    githubURL: "https://github.com/Rohanphutke",
  },
  {
    id: "03",
    title: "Malicious Object Detection - Machine Learning",
    category: "Machine Learning, Object Detection",
    description: "Built a system to detect and classify malicious objects. Trained on an 11k balanced dataset sourced from Roboflow. Used YOLOv8 for object detection and DepthAnythingv2 for depth verification. Added a YOLO-based classifier to differentiate real and fake objects.",
    stack: ["YOLOv8", "DepthAnythingv2", "Python", "OpenCV"],
    image: MOD,  // Add the appropriate image path here
    liveURL: "/",  // Add the live project URL if available
    githubURL: "https://github.com/Rohanphutke",
  },
  {
    id: "04",
    title: "Weather Forecasting App",
    category: "Frontend, Weather API",
    description: "Solely developed the frontend, integrating a weather API to fetch and display real-time weather data. Implemented a feature that displays current weather and a 7-day forecast for any city.",
    stack: ["ReactJS", "HTML", "CSS"],
    image: WeatherP,  // Add the appropriate image path here
    liveURL: "/",  // Add the live project URL if available
    githubURL: "https://github.com/Rohanphutke",
  },
];

const WorkPage = () => {

  return (
    <div className='py-6 md:py-12'>
      <PageLayout>
        <Carousel opts={{align :"start",loop:true}}
        className='w-full'
        >
          <CarouselContent>
          {
            projects?.map((project)=>(
              <CarouselItem key = {project?.id}>
                <Card className='bg-bodyColor border-lightSky/20'>
                  <CardContent className='p-6'>
                    <div className='flex flex-col md:flex-row
                    md:items-center md:space-x-8 group'>
                      {/*  des  */}
                      <div className='w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0 '>
                        <div className='space-y-3 md:space-y-6 mt-4 md:mt-0'>
                          <h2 
                            className='text-4xl md:text-8xl leading-none 
                            font-extrabold text-transparent text-outline'
                          >
                          {project?.id}
                          </h2>
                          <h3 className='text-xl md:text-3xl font-bold
                           leading-none text-white group-hover:text-lightSky hoverEffect'>
                            {project.title} project
                          </h3>
                          <p className='text-white/60 text-sm md:text-base
                          leading-6 md:leading-normal'>
                            {project.description}
                          </p>
                          <ul className='flex flex-wrap md:flex-nowrap
                          gap-2 md:gap-4 items-center'>
                            {project.stack?.map((item,index)=>(
                              <li key = {index} className="text-xs md:text-base
                              text-lightSky/80">
                                {item}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className='bg-gray-700'/>
                          <div className='flex items-center space-x-4'>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button 
                                  variant='outline' 
                                  size='icon' 
                                  className="bg-lightSky/5 
                                  text-white/80 border border-lightSky/20
                                  hover:bg-lightSky/20
                                  hover:border-lightSky
                                  hover:text-hoverColor hoverEffect" >
                                     <Link href={project.liveURL} target="_blank" className="bg-lightSky/5 
                                  text-white/80 border-lightSky/20 hover:border-lightSky
                                  hover:text-hoverColor hoverEffect">
                                    <ArrowUpRight/> {" "}
                                    <span className='sr-only'>Live Project</span>
                                  </Link>
                                  </Button>       
                                </TooltipTrigger>
                                <TooltipContent className='bg-white text-black font-semibold'>
                                  <p>Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button 
                                  variant='outline' 
                                  size='icon' 
                                  className="bg-lightSky/5 
                                  text-white/80 border border-lightSky/20
                                  hover:bg-lightSky/20
                                  hover:border-lightSky
                                  hover:text-hoverColor hoverEffect" >
                                     <Link href={project.githubURL} target='_blank' className="bg-lightSky/5 
                                  text-white/80 border-lightSky/20 hover:border-lightSky
                                  hover:text-hoverColor hoverEffect">
                                    <Github/> {" "}
                                    <span className='sr-only'>Live Project</span>
                                  </Link>
                                  </Button>       
                                </TooltipTrigger>
                                <TooltipContent className='bg-white text-black font-semibold'>
                                  <p>Github Repo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <div className='w-full md:w-1/2 order-1 md:order-2'>
                        <div className='relative h-72 sm:h-96
                         bg-gray-700 rounded-lg overflow-hidden'>
                          <Image 
                            src={project?.image} 
                            alt={project.title}
                            fill 
                            className='object-cover'/>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          }
          </CarouselContent>
          <div className='absolute right-10 -bottom-8'>
            <CarouselPrevious className='rounded-md bg-transparent 
            border border-lightSky/20 hover:bg-hoverColor/20 
            hover:text-white hover:border-hoverColor p-5 hoverEffect'/>
            <CarouselNext className='rounded-md bg-transparent 
            border border-lightSky/20 hover:bg-hoverColor/20 
            hover:text-white hover:border-hoverColor p-5 hoverEffect'/>
          </div>
        </Carousel>
      </PageLayout>
    </div>
  )
}

export default WorkPage