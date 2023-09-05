import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>
      <motion.p className='text-secondary mt-4 text-[17px] max-w-3xl leading-[30px] ' variants={fadeIn("", "", 0.1, 1)}>
        I am a highly motivated and enthusiastic MERN Stack Developer with a passion for delivering innovative and impactful solutions.

        With expertise in MongoDB, Express JS, React, and Node Js, I excel in building full-stack web applications and creating seamless user experiences with React.

        Moreover I have a strong command of React Native for cross-platform mobile app development. With a solid background in database management, particularly MySQL, I design robust and scalable systems.

        Eager to explore the possibilities of Next Js for server-rendered React applications, I stay updated with the latest technologies and continuously seek growth opportunities.

        Committed to delivering high-quality solutions my goal is to make a positive impact in the tech industry through innovative and efficient development practices.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) =>
        (
          <ServiceCard key={service.title} index={index} {...service} />

        )
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");




const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className='w-16 h-16 object-contain ' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}