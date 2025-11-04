import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const JobExperience = () => {
  return (
    <section className="section" id="experience">
      <div className="container mx-auto lg:mt-[250px] ">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h2 text-accent text-center mb-10"
        >
          Job Experience
        </motion.h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Nexis365 */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="p-6 border border-accent rounded-2xl shadow-lg hover:shadow-xl"
          >
            <h3 className="h3 mb-2">Full-Stack Developer</h3>
            {/* <p className="text-sm text-gray-400 mb-2"> */}
            <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              Nexis365 · Full-time <br />
              May 2023 - Nov 2025 · 2 yrs 7 mos <br />
              Baridhara, Dhaka · On-site
            </p>
            <p className="mb-4">
              As a Full Stack Developer at Nexis365, I contribute to building
              and scaling SaaS platforms and applications. My role involves
              designing and developing web and mobile solutions with modern
              technologies while ensuring high performance and user experience.
            </p>
            <ul className="list-disc list-outside pl-6  space-y-2 text-sm">
              <li>
                Developed SaaS platforms using React.js, Node.js, Express, and
                Tailwind CSS, delivering clean, scalable, and maintainable
                solutions.
              </li>
              <li>
                Built cross-platform SaaS mobile apps with React Native, focusing on
                smooth performance and intuitive UI/UX.
              </li>
              <li>
                Worked on 3D interactive projects with Three.js, creating engaging
                and visually compelling experiences.
              </li>
              <li>
                Gained hands-on experience in Next.js for SEO-friendly and
                server-side rendered web applications.
              </li>
              <li>
                Managed deployment and hosting of web and app projects on cPanel
                and other environments.
              </li>
              <li>
                Collaborated in agile workflows, ensuring timely delivery and
                integration of features across teams.
              </li>
            </ul>
          </motion.div>

          {/* Upwork */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="p-6 border border-accent rounded-2xl shadow-lg hover:shadow-xl"
          >
            <h3 className="h3 mb-2">Front-End Developer</h3>
            <p className="text-sm font-semibold bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">
              Upwork · Freelance <br />
              Jan 2022 - Dec 2023 · 2 yrs <br />
              Bangladesh · Remote
            </p>
            <p className="mb-4">
              As a Freelance Front-End Developer on Upwork, I have successfully
              completed multiple international projects, collaborating with
              clients from diverse industries. My work focuses on building
              modern, responsive, and high-performance web applications.
            </p>
            <ul className="list-disc list-outside pl-6  space-y-2 text-sm">
              <li>
                Delivered 5+ projects with 5-star client ratings and repeat
                hires.
              </li>
              <li>
                Developed websites and SaaS platforms using React.js, Next.js,
                TypeScript, and Tailwind CSS.
              </li>
              <li>
                Converted design files (XD/Figma/PSD) into fully responsive
                front-end solutions.
              </li>
              <li>
                Implemented optimized UI/UX ensuring fast load times and
                cross-device compatibility.
              </li>
              <li>
                Collaborated with clients to debug, enhance, and deploy
                applications.
              </li>
              <li>
                Earned consistent client feedback for persistence,
                professionalism, and on-time delivery.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
