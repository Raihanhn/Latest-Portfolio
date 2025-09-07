import React from 'react';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants'; 

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return(
    <section className='section' id='about' ref={ref} >
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-10 mt-[50px]  lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen  ">
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}  className=" md:hidden flex-1 bg-about bg-contain bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[620px] mix-blend-lighten bg-top "></motion.div>
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}  className=" flex-1 ">
            <h2 className=" h2 text-accent ">About me</h2>
            <h3 className=' h3 mb-2 ' >I'm a Full Stack Developer with over 3 years of experience.</h3>
            <p className=" mb-6 ">
             I specialize in React, Next.js, and React Native, and also work with Node.js, Express, and databases like MongoDB and MySQL to deliver scalable solutions. With a strong focus on clean code, performance, and user-friendly design.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12  ">
              <div className="">
                <div className=" text-[40px] font-tertiary text-gradient mb-2  ">
                  {
                    inView ?
                    <CountUp start={0} end={3} duration={3} /> : null }
                </div>
                <div className=" font-primary text-sm tracking-[2px]  ">
                  Years of <br />
                  Experience</div>
              </div>
              <div className="">
                <div className=" text-[40px] font-tertiary text-gradient mb-2  ">
                  {
                    inView ?
                    <CountUp start={0} end={46} duration={3} /> : null }+
                </div>
                <div className=" font-primary text-sm tracking-[2px]  ">
                  Projects <br />
                  Completed</div>
              </div> 
              <div className="">
                <div className=" text-[40px] font-tertiary text-gradient mb-2  ">
                  {
                    inView ?
                    <CountUp start={0} end={12} duration={3} /> : null }+
                </div>
                <div className=" font-primary text-sm tracking-[2px]  ">
                  Satisfied<br />
                  Client</div>
              </div>
            </div>
            <div className=" flex gap-x-8 items-center ">
              <button className=' btn btn-lg  ' >Contact me</button>
              <a href="#" className=' text-gradient btn-link  ' >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
