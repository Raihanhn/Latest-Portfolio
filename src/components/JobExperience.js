// JobExperience.js

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const jobs = [
  {
    id: "01",
    title: "Full Stack Software Developer",
    company: "PineForgeLabs",
    type: "Full-time",
    period: "Dec 2025 – Present · 5 mos",
    location: "Dhaka, Bangladesh · Remote",
    current: true,
    badgeColor: "from-[#ff56f6] to-[#b936ee]",
    borderColor: "border-[#ff56f6]/30",
    highlights: [
      "Built full-scale SaaS products from concept to production",
      "Developed with Next.js, React, Node.js, Three.js, MySQL & MongoDB",
      "Handled international client requirements end-to-end",
      "Created 3D interactive UI experiences using Three.js",
      "Collaborated in agile workflows across complex multi-feature projects",
    ],
  },
  {
    id: "02",
    title: "Full Stack Developer",
    company: "Weberspoint",
    type: "Contract",
    period: "Nov 2025 – Present · 6 mos",
    location: "Dhaka, Bangladesh · Remote",
    current: true,
    badgeColor: "from-[#3bace2] to-[#ff56f6]",
    borderColor: "border-[#3bace2]/30",
    highlights: [
      "Managed and closed deals with 50+ international clients",
      "Built custom websites and web apps from scratch per client specs",
      "Developed scalable solutions using Next.js, React, Node.js, MySQL, MongoDB",
      "Maintained strong client relationships ensuring timely delivery",
      "Handled multiple projects simultaneously in a fast-paced remote env",
    ],
  },
  {
    id: "03",
    title: "Full Stack Developer",
    company: "Nexis365",
    type: "Full-time",
    period: "May 2023 – Nov 2025 · 2 yrs 7 mos",
    location: "Baridhara, Dhaka · On-site",
    current: false,
    badgeColor: "from-[#b936ee] to-[#3bace2]",
    borderColor: "border-[#b936ee]/30",
    highlights: [
      "Built SaaS platforms using React, Node.js, Express & Tailwind CSS",
      "Developed cross-platform mobile apps with React Native",
      "Created 3D interactive experiences using Three.js",
      "Gained hands-on Next.js experience for SSR/SEO-focused apps",
      "Managed deployment on cPanel and other hosting environments",
    ],
  },
  {
    id: "04",
    title: "Front-End Developer",
    company: "Upwork",
    type: "Freelance",
    period: "Jan 2022 – Dec 2023 · 2 yrs",
    location: "Bangladesh · Remote",
    current: false,
    badgeColor: "from-[#3bace2] to-[#406aff]",
    borderColor: "border-[#406aff]/30",
    highlights: [
      "Delivered 5+ projects with 5-star ratings and repeat hires",
      "Built responsive UIs with React, Next.js, TypeScript & Tailwind CSS",
      "Converted Figma/XD/PSD designs to pixel-perfect frontends",
      "Implemented optimized UI/UX for fast load times & cross-device support",
      "Earned consistent praise for professionalism and on-time delivery",
    ],
  },
];

const JobExperience = () => {
  return (
    <section className="section" id="experience">
      <div className="container mx-auto lg:mt-[200px]">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[4px] text-accent mb-2">Career</p>
          <h2 className="h2 text-white">Job Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff56f6] via-[#b936ee] to-[#3bace2] -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {jobs.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={job.id}
                  variants={fadeIn(isLeft ? "right" : "left", 0.3 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="relative flex flex-col lg:flex-row items-center lg:items-start"
                >
                  {/* Left card */}
                  <div className={`w-full lg:w-[calc(50%-40px)] ${isLeft ? "lg:mr-auto" : "lg:ml-auto lg:order-2"}`}>
                    <div className={`border ${job.borderColor} bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300`}>
                      {/* Badge */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className={`text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${job.badgeColor} text-white`}>
                          {job.company} · {job.type}
                        </span>
                        {job.current && (
                          <span className="text-[10px] px-2 py-1 rounded-full border border-[#ff56f6]/40 text-[#ff56f6] bg-[#ff56f6]/10">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-[18px] font-primary font-semibold text-white mb-1">
                        {job.title}
                      </h3>
                      <p className="text-sm text-white/50 mb-1">{job.period}</p>
                      <p className="text-sm text-white/40 mb-4">{job.location}</p>

                      <ul className="space-y-2">
                        {job.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <span className={`mt-[6px] w-[6px] h-[6px] rounded-full flex-shrink-0 bg-gradient-to-br ${job.badgeColor}`} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-[#ff56f6] to-[#3bace2] items-center justify-center text-white text-[13px] font-bold z-10 shadow-lg">
                    {job.id}
                  </div>

                  {/* Mobile dot */}
                  <div className="flex lg:hidden w-10 h-10 rounded-full bg-gradient-to-br from-[#ff56f6] to-[#3bace2] items-center justify-center text-white text-[12px] font-bold mb-4">
                    {job.id}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobExperience;