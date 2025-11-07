import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaCube,
} from "react-icons/fa";

const services = [
  {
    name: "Full-Stack Development",
    description:
      "Design and build end-to-end web applications with React, Next.js, Node.js, Express, and databases like MongoDB/MySQL. I create scalable, high-performance, and maintainable solutions for real-world problems.",
    tagline: "Build Smarter",
    icon: <FaCode size={24} />,
  },
  {
    name: "Mobile App Development",
    description:
      "Develop cross-platform mobile apps with React Native, delivering smooth UI/UX, high performance, and native-like experiences on both Android and iOS devices.",
    tagline: "Go Mobile",
    icon: <FaMobileAlt size={24} />,
  },
  {
    name: "UI/UX & Frontend Design",
    description:
      "Craft visually stunning, user-friendly, and responsive interfaces using Tailwind CSS, Material UI, and Shadcn UI, ensuring your users enjoy seamless interactions across all devices.",
    tagline: "Design Better",
    icon: <FaPalette size={24} />,
  },
  {
    name: "3D & Interactive Experiences",
    description:
      "Bring web applications to life with 3D graphics and interactive experiences using Three.js, creating engaging, memorable, and immersive user journeys.",
    tagline: "Feel Real",
    icon: <FaCube size={24} />,
  },
];

const Services = () => {
  return (
    <section className="section lg:mt-[180px]" id="services">
      <div className="container mx-auto lg:mt-[250px] ">
        <div className=" flex flex-col lg:flex-row  ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1  lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-14 lg:mb-0  "
          >
            <h2 className=" h2 text-accent mb-6 ">What I Do.</h2>
            <h3 className=" h3 max-w-[455px] mb-16 ">
              I'm a Full Stack Developer with over 3 years of experience.
            </h3>
            <Link to="work" smooth={true} spy={true}>
              <button className="btn btn-sm ">See my work</button>{" "}
            </Link>
          </motion.div>
          <motion.div  
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 "
          >
            <div className="">
              {" "}
              {services.map((service, index) => {
                const { name, description, tagline, icon } = service;

                return (
                  <div
                    key={index}
                    className=" border-b border-white/20 h-[146px] mb-[30px] flex  "
                  >
                    <div className=" max-w-[476px] ">
                      <h4 className=" text-[20px] tracking-wider font-primary font-semibold  ">
                        {" "}
                        {name}{" "}
                      </h4>
                      <p className=" font-secondary leading-tight ">
                        {" "}
                        {description}{" "}
                      </p>
                    </div>
                    <div className=" flex flex-col flex-1 items-end ">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center "
                      >
                        {" "}
                        {icon}{" "}
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {" "}
                        {tagline}{" "}
                      </a>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
