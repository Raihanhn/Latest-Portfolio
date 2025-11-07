import React from "react";
import Image from "../assets/mine.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className=" flex-1 text-center font-secondary lg:text-left ">
            {/* <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}} className=' text-[55px] font-bold leading-[0.8] lg:text-[10px]  ' >
            MD <span>RAIHAN</span>
          </motion.h1> */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4  ">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Engineer",
                  2000,
                  "Programmer",
                  2000,
                  "Designer",
                  2000,
                  "App Developer",
                  2000,
                  "Freelancer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-8 max-w-lg mx-auto lg:mx-0"
            >
              ☁ I enjoy solving complex problems, learning new technologies, and
              delivering digital solutions that make an impact. I believe in
              writing clean, maintainable, and scalable code that balances
              performance and design.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0  cursor-pointer "
            >
              <Link to="contact" smooth={true} spy={true}>
                <button className="btn btn-lg ">Contact me</button>
              </Link>

              <a href="#" className=" text-gradient btn-link   ">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.7 }}
              className=" flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:relative lg:z-[999] cursor-pointer "
            >
              <a
                href="https://www.upwork.com/freelancers/~01e0ec6b9f7f16ac1b"
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer"
              >
                <SiUpwork />
              </a>
              <a
                href="https://github.com/raihanhn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/raihan20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px] "
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
