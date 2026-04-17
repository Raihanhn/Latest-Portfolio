// Skills.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const categories = {
  All: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
    "Redux", "TailwindCSS", "Material UI", "Bootstrap", "DaisyUI", "SCSS",
    "Shadcn UI", "Node.js", "Express.js", "MongoDB", "MySQL", "React Native",
    "Firebase", "ReactBricks", "TinaCMS", "Hugo", "Markdown", "Three.js",
    "VS Code", "Brackets", "Android Studio", "Xcode", "Git", "GitHub",
    "Figma", "Adobe XD", "Sketch", "Canva", "Photoshop",
    "Vercel", "Netlify", "cPanel", "Hostinger",
  ],
  Frontend: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
    "Redux", "TailwindCSS", "Material UI", "Bootstrap", "DaisyUI", "SCSS",
    "Shadcn UI", "Three.js", "ReactBricks", "TinaCMS", "Hugo", "Markdown",
  ],
  Backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
  Mobile: ["React Native", "Android Studio", "Xcode"],
  Design: ["Figma", "Adobe XD", "Sketch", "Canva", "Photoshop"],
  Tools: ["VS Code", "Brackets", "Git", "GitHub", "Vercel", "Netlify", "cPanel", "Hostinger"],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section className='mt-[230px] sm-[50px] md-[50px] section lg:mt-[40px] mb-10' id='skills'>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="h2 text-accent mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build modern, scalable, and responsive applications.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-primary border transition-all duration-300 ${
                activeTab === cat
                  ? 'btn text-white border-transparent'
                  : 'border-white/30 text-white/60 hover:text-white hover:border-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          className="flex flex-wrap justify-center gap-4"
        >
          {categories[activeTab].map((skill, index) => (
            <div
              key={index}
              className="px-5 py-3 rounded-lg border border-white/30 backdrop-blur-md bg-white/5 text-white font-medium text-sm sm:text-base transition hover:bg-white/10 hover:scale-105 hover:border-accent cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;