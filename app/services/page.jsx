"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "As a passionate and skilled full-stack developer, I focus on building responsive and user-friendly web applications. Through my academic projects and personal initiatives, I have developed a strong understanding of modern web technologies. I am eager to apply my skills in real-world projects, delivering solutions that are optimized for performance and usability.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "I have honed my front-end development skills through hands-on experience in creating interactive and visually appealing user interfaces. Utilizing frameworks like React and Nextjs, I strive to design responsive and engaging websites. My focus is on building clean and intuitive designs that provide a seamless user experience across all devices.",
    href: "",
  },
  {
    num: "03",
    title: " Backend Development",
    description:
      "With a solid foundation in back-end development, I specialize in building efficient and scalable server-side applications. Through my academic projects, I have gained experience in Node.js, Express.js, and database management. I am enthusiastic about developing secure and maintainable back-end systems that support dynamic web applications.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className=" text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
