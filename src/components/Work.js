import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img3.png";
import Img5 from "../assets/portfolio-img3.png";

const projects = [
  {
    id: 1,
    image: Img1,
    category: "UI/UX Design",
    title: "Creative Landing Page",
    link: "#",
  },
  {
    id: 2,
    image: Img2,
    category: "Web Development",
    title: "E-Commerce Website",
    link: "#",
  },
  {
    id: 3,
    image: Img3,
    category: "Mobile App",
    title: "Task Management App",
    link: "#",
  },
    {
    id: 4,
    image: Img4,
    category: "Web e Development",
    title: "E-Commerce Website",
    link: "#",
  },
  {
    id: 5,
    image: Img5,
    category: "Mobile e App",
    title: "Task Management App",
    link: "#",
  },
];

const Work = () => {
  return (
    <section className="section lg:mt-[180px] lg:mb-[200px]" id="work">
      <div className="container mx-auto lg:mt-[250px]">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* Left Side */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16 text-gray-300">
                Here are some of my recent design and development projects —
                from sleek landing pages to fully functional apps and websites.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>

            {/* First Project Card */}
            <ProjectCard project={projects[0]} />
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/30 rounded-xl shadow-lg hover:shadow-accent/50 transition-all duration-500">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 z-40 transition-all duration-500"></div>

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="group-hover:scale-110 transition-all duration-700 w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-50 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
        <div className="flex flex-col items-start">
          <span className="text-gradient text-sm tracking-wider block mb-1">
            {project.category}
          </span>
          <h3 className="text-2xl font-semibold text-white mb-4">
            {project.title}
          </h3>

          {/* Left-Aligned Button */}
          <button
            className="btn btn-sm"
            onClick={() => window.open(project.link, "_blank")}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
