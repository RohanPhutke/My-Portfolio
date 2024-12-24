'use client';
import PageLayout from '@/components/PageLayout'
import { Tabs, TabsList,TabsTrigger  } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { Briefcase, Code2, GraduationCap, User } from 'lucide-react'
import {motion} from 'motion/react';

const tabContent = ["sa"];
const tabMenu = [
  {
    title: "Experience",
    value:"experience",
    icon: Briefcase
  },
  {
    title: "Education",
    value:"education",
    icon: GraduationCap
  },
  {
    title: "Skills",
    value:"skills",
    icon: Code2
  },
  {
    title: "About me",
    value:"about",
    icon: User
  },
];
// const tabContent = 
//   experience : {
//     title: "Experience",
//     items:[
//       {
//         role:,
//         company:,
//         period:,
//         description:"",
//         highlights:["","",],
//       }
//       {
//         role:,
//         company:,
//         period:,
//         description:"",
//         highlights:["","",],
//       }
//       {
//         role:,
//         company:,
//         period:,
//         description:"",
//         highlights:["","",],
//       }
//     ]
//   },
//   education : {
//     title: "Educational Background",
//     items:[
//       {
//         degree:"s ero ompu er c ence",
//         institution: "Tech University",
//         period: "2e16 - 2e18",
//         description:
//         "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors." ,
//         achievements:["4 .e GPA-", "Research Publication","Dean's List "],
//       }
//     ]
//   },

//   skills: {
//     title: "Experience",
//     items:[
//       {
//         role:,
//         company:,
//         period:,
//         description:
//         "",
//       }
//     ]
//   }
 



const ResumePage = () => {
  return (
    <div className='flex flex-col justify-center py-10'>
    <PageLayout>
      <Tabs defaultValue='experience' 
      className='w-full flex flex-col md:flex-row
      gap-6 md:gap-10'>
        <TabsList className='flex md:flex-col h-full bg-transparent md:w-64 gap-4'>
          {tabMenu?.map((item)=>(
            <TabsTrigger key={item?.value} value={item?.value}
            className='bg-white/10 w-full py-2.5 text-white
             data-[state=active]:bg-hoverColor hover:bg-lightSky/50 
             text-xs sm:text-sm'>
              <div className='flex items-center gap-1.5 md:w-[50%] md:gap-3 '>
                <item.icon className='w-4 h-4 md:h-5 md:w-5'/>
                {item?.title}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div>
          <TabsContent value='experience'> 
           <motion.h2 
                initial = {{opacity:0}}
                animate ={{opacity:1}}
                className='text-2xl font-bold mb-6 text-lightSky'
            >
              {tabContent}
           </motion.h2> 
           <div>
              {tabContent}
           </div>
          </TabsContent>
        </div>
      </Tabs>
    </PageLayout>
    </div>
  )
}

export default ResumePage