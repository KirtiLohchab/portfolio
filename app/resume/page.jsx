"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I’m Kirti Lohchab, a passionate full-stack developer dedicated to crafting innovative and user-centric applications. With a strong foundation in both front-end and back-end technologies, I am committed to delivering robust and scalable solutions that enhance user experiences. I am currently available for freelance opportunities and actively seeking a full-time role where I can contribute my skills and grow in a dynamic environment.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kirti Lohchab",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)9354386639",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "ahlawatkirti227@gmail.com",
    },

    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    " I am a fresher, I have honed my skills in full-stack development through academic projects and personal initiatives. My focus has been on building dynamic and efficient web applications using modern technologies. With a solid programming foundation and a keen eye for detail, I am excited to bring my skills to a professional setting. I am actively seeking opportunities to join a forward-thinking company where I can grow as a developer and contribute to impactful projects.",
  items: [
    // {
    //   company: "Tech Solution Inc.",
    //   position: "Full Stack developer",
    //   duration: "2022-Present",
    // },
    // {
    //   company: "Web Design Studio",
    //   position: "Front-End developer intern",
    //   duration: " Summer-2021",
    // },
    // {
    //   company: "E-commerce",
    //   position: "Freelance Web developer",
    //   duration: "2020-2021",
    // },
    // {
    //   company: "Tech Academy",
    //   position: "Teaching Assistant",
    //   duration: "2019-2020",
    // },
    // {
    //   company: "Digital Agency",
    //   position: "UI/UX Designer",
    //   duration: "2018-2019",
    // },
    // {
    //   company: "Software Development Firm",
    //   position: "Junior Developer",
    //   duration: "2017-2018",
    // },
  ],
};
// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    " I hold a Master of Computer Applications (MCA) with a specialization in Full Stack Web Development from Jain University, Bangalore. My academic journey has provided me with a deep understanding of both front-end and back-end technologies, preparing me to tackle complex challenges in the development world. Prior to this, I completed my Bachelor of Computer Applications (BCA) from Maharshi Dayanand University, Rohtak, where I built a strong foundation in programming and software development.",
  items: [
    {
      university: "Jain University (Bangalore)",
      degree: "(MCA) Full Stack Web development",
      duration: "2022-2024",
    },
    {
      university: "Maharshi Dayanand University (Rohtak)",
      degree: "BCA",
      duration: "2011-2013",
    },
  ],
};
const skills = {
  title: "Skills",
  description:
    "I possess a diverse skill set that spans both front-end and back-end development. My proficiency in these tools and technologies allows me to build complete, end-to-end web applications efficiently.",
  skillList: [
    {
      icon: <FaHtml5 />,
      skill: "HTML5",
    },
    {
      icon: <FaCss3 />,
      skill: "Css3",
    },
    {
      icon: <FaJs />,
      skill: "JavaScript",
    },
    // {
    //   icon: <FaFigma />,
    //   skill: "Figma",
    // },
    {
      icon: <FaReact />,
      skill: "React",
    },
    {
      icon: <FaNodeJs />,
      skill: "Nodejs",
    },
    {
      icon: <SiBootstrap />,
      skill: "Bootstrap",
    },
    {
      icon: <SiExpress />,
      skill: "Express",
    },
    {
      icon: <SiMongodb />,
      skill: "MongoDB",
    },
    {
      icon: <SiTailwindcss />,
      skill: "Tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      skill: "Nextjs",
    },
    {
      icon: <SiTypescript />,
      skill: "Typescript",
    },
    {
      icon: <FaGithub />,
      skill: "Github",
    },
    {
      icon: <FaJava />,
      skill: "Java",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[30px]">
                  {skills.skillList.map((skill, i) => {
                    return (
                      <li key={i}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300  ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.skill}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.university}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
