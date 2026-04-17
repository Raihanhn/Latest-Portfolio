// Work.js

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const projects = [
  {
    id: 1,
    image: Img1,
    category: "Web Development",
    title: "Subscription-Based News Platform",
    description: [
      "Built with React.js and Tailwind CSS for a clean reader experience",
      "Subscription flow with user auth and protected routes",
      "Dynamic article feed with category filtering and search",
      "Responsive design optimized for mobile and desktop",
      "Integrated real-time news API for live content updates",
    ],
    link: "https://the-new-york-times-nine.vercel.app",
  },
  {
    id: 2,
    image: Img2,
    category: "Web Development",
    title: "E-Commerce Website",
    description: [
      "Full-stack with React frontend and Node.js/Express backend",
      "Cart system, product filtering and dynamic product pages",
      "User auth with JWT and protected checkout flow",
      "MongoDB database with full CRUD for products and orders",
      "Deployed on Vercel with responsive Tailwind CSS UI",
    ],
    link: "https://full-stack-ecommerce-eta.vercel.app",
  },
  {
    id: 3,
    image: Img3,
    category: "UI/UX Design",
    title: "Nike Store",
    description: [
      "Pixel-perfect Figma-to-React conversion",
      "Smooth scroll animations and hover interactions",
      "Dynamic color and size selection for products",
      "Fully responsive across all screen sizes",
      "Pure frontend focused on visual impact and performance",
    ],
    link: "https://raihanhn.github.io/Nike-Store",
  },
  // Add more projects here — they flow into 2-column rows below the top 3
  // {
  //   id: 4,
  //   image: Img4,
  //   category: "Web Development",
  //   title: "Your Next Project",
  //   description: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  //   link: "https://your-link.vercel.app",
  // },
];

const Work = () => {
  const featured = projects[0];       // big hero card (right side)
  const secondary = projects.slice(1, 3); // two cards below
  const extra = projects.slice(3);    // any additional projects → 2-col grid

  return (
    <section className="section lg:mt-[180px] lg:mb-[200px]" id="work">
      <div className="container mx-auto lg:mt-[230px]">

        {/* ── Original top layout: text left + big card right ── */}
        <div className="flex flex-col lg:flex-row gap-x-10">

          {/* Left Side */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
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

            {/* First small card (bottom-left) */}
            <ProjectCard project={secondary[0]} />
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* Big featured card */}
            <ProjectCard project={featured} />
            {/* Second small card (bottom-right) */}
            <ProjectCard project={secondary[1]} />
          </motion.div>

        </div>

        {/* ── Extra projects → 2-column grid below ── */}
        {extra.length > 0 && (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10"
          >
            {extra.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/30 rounded-xl shadow-lg hover:shadow-accent/50 transition-all duration-500">

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="group-hover:scale-110 transition-all duration-700 w-full h-full object-cover"
      />

      {/* Default label — visible before hover, slides away on hover */}
      <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/80 to-transparent z-30 translate-y-0 group-hover:translate-y-full transition-transform duration-500">
        <span className="text-gradient text-xs tracking-widest font-primary block mb-1">
          {project.category}
        </span>
        <h3 className="text-white text-lg font-semibold">
          {project.title}
        </h3>
      </div>

      {/* Hover overlay — blur + full description */}
      <div className="absolute inset-0 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        {/* Blur backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl" />

        {/* Content */}
        <div className="relative z-10">
          <span className="text-gradient text-xs tracking-widest font-primary block mb-1">
            {project.category}
          </span>
          <h3 className="text-white text-xl font-semibold mb-3">
            {project.title}
          </h3>

          <ul className="mb-5 space-y-1">
            {project.description.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-white/85 text-sm leading-snug">
                <span className="mt-[6px] w-[5px] h-[5px] rounded-full flex-shrink-0 bg-gradient-to-br from-[#ff56f6] to-[#3bace2]" />
                {point}
              </li>
            ))}
          </ul>

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