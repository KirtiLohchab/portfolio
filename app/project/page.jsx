"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Trips and Travel",
    description:
      "Trips and Travel is a sleek and modern web application designed to enhance the user’s travel experience. This project provides a responsive and visually appealing platform where users can explore various travel destinations.",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "Javascript" }],
    image: "/assets/project/thumb1.png",
    liveLink: "https://trips-and-travel.netlify.app",
    githubLink: "https://github.com/KirtiLohchab/Trips-and-Travel",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "E-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex perspiciatis, repellendus sapiente eaque nisi.",
    stack: [{ name: "MERN Stack" }],
    image: "/assets/project/thumb2.png",
    liveLink: "https://trips-and-travel.netlify.app",
    githubLink: "https://github.com/KirtiLohchab/Trips-and-Travel",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Portfolio",
    description:
      "This project showcases a dynamic and responsive portfolio website built with Next.js and Tailwind CSS. it highlights skills in front-end and back-end development, featuring sections like an about me, skills, projects, and contact information. The portfolio emphasizes modern design principles, optimized performance, and clean code, providing a professional platform to present personal projects, technologies, and expertise",

    stack: [{ name: "Next js" }, { name: "Tailwind Css" }],
    image: "/assets/project/thumb3.png",
    liveLink: "https://trips-and-travel.netlify.app",
    githubLink: "https://github.com/KirtiLohchab/Trips-and-Travel",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                {project.category} project
              </h2>
              <h3 className="h3">{project.title}</h3>
              {/*project description  */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, i) => (
                  <li key={i} className="text-xl text-accent">
                    {item.name}
                    {/* remove last (,) */}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border-t-2 border-white/20">
                {/* buttons */}
                <div className="flex items-center gap-4 py-5">
                  {/* live project button */}
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {/* github project */}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div>
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
