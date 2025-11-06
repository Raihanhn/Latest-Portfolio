import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
  "Redux", "TailwindCSS", "Material UI", "Bootstrap", "DaisyUI", "SCSS",
  "Shadcn UI", "Node.js", "Express.js", "MongoDB", "MySQL", "React Native",
  "Firebase", "ReactBricks", "TinaCMS", "Hugo", "Markdown", "Three.js", "VS Code",
  "Brackets", "Android Studio", "Git", "GitHub", "Figma", "Adobe XD", "Sketch",
  "Canva", "Photoshop", "Vercel", "Netlify", "cPanel"
];

const Skills = () => {
  return (
    <section className='mt-[230px] sm-[50px] md-[50px] section lg:mt-[40px] mb-10 lg:mb-10 ' id='skills'>
      <div className="container mx-auto">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="h2 text-accent mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            These are the technologies and tools I work with to build modern, scalable, and responsive applications.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-5 py-3 rounded-lg border border-white/30 backdrop-blur-md bg-white/5 text-white font-medium text-sm sm:text-base transition hover:bg-white/10 hover:scale-105 cursor-pointer"
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
