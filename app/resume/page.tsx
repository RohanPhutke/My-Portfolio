'use client';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { Code2, GraduationCap, User } from 'lucide-react';
import { motion } from 'motion/react';

const tabMenu = [
  {
    title: "Education",
    value: "education",
    icon: GraduationCap,
  },
  {
    title: "Skills",
    value: "skills",
    icon: Code2,
  },
  {
    title: "About me",
    value: "about",
    icon: User,
  },
];

const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="education"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          {/* TabsList has a fixed width on large screens and equal sized triggers */}
          <TabsList className="flex md:flex-col h-full bg-transparent w-full md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm flex items-center gap-1.5 md:w-full md:gap-3"
              >
                {/* Icon size adjusted for consistent spacing */}
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                {item?.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content section */}
          <div className="w-full overflow-y-auto">
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                Education
              </motion.h2>
              <ul className="text-white">
                <li className="mb-2">
                  <strong>B.Tech in Information Technology</strong> at
                  Indian Institute of Information Technology, Allahabad (Nov 2022
                  - Present): Specialized in IT with a focus on software engineering.
                  CGPA : 8.67
                </li>
                <li className="mb-2">
                  <strong>Class XII</strong> at Narayana Jr College, TSBIE (2021): Achieved 97.60%
                  in board examinations.
                </li>
                <li className="mb-2">
                  <strong>Class X</strong> at New High School, MHSSC (2019): Scored 99.40%, ranking
                  among the top students.
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                Skills
              </motion.h2>
              <ul className="text-white">
                <li className="mb-2">
                  <strong>Programming Languages:</strong> Node.js, C, C++, JavaScript, Basic Java, Python
                </li>
                <li className="mb-2">
                  <strong>Frameworks:</strong> ExpressJS, ReactJS, NextJS
                </li>
                <li className="mb-2">
                  <strong>Database:</strong> SQL,Convex
                </li>
                <li className="mb-2">
                  <strong>Developer Tools:</strong> Git
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                About Me
              </motion.h2>
              <p className="text-white mb-2">
                I am a dedicated student at IIITA pursuing B.Tech in Information Technology. Passionate
                about solving real-world problems through software solutions.
              </p>
              <p className="text-white mb-2">
                With experience in web development, machine learning, and collaborative projects, I strive
                to innovate and contribute to impactful technology.
              </p>
              <h3 className="text-white font-semibold mt-4">Achievements:</h3>
              <ul className="text-white">
                <li className="mb-2">Achieved 223rd Rank in Codechef Starters 154 Contest among 6,000 contestants.</li>
                <li className="mb-2">Solved over 500 coding questions across various platforms, improving problem-solving skills by 30%.</li>
                <li className="mb-2">Awarded State Scholarship for academic excellence, ranking in the top 5% of the state.</li>
                <li className="mb-2">Contributed to OPENCODE, impacting over 1,000 users and enabling collaboration among 200+ developers.</li>
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
