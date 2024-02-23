import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary2 text-[17px] w-full leading-[30px]'>
      I am a passionate and hardworking student with a strong interest in Machine Learning and artificial intelligence. I am currently pursuing a master's degree in Computer Science at University of Nottingham and have a strong foundation in mathematics and computer science, and eager to learn more about the latest advances in AI.
      I am particularly interested in the applications of AI to real-world problems and believe that AI has the potential to make a positive impact on the world, and am excited to be a part of the field.
      I am a hard worker and always eager to learn new things. I am confident that I have the skills and passion to be successful in a career in AI.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-7 items-center justify-center'>
        {services.map((service, index) => (          
          <ServiceCard key={service.title} index={index} {...service} />
    
        ))}
      </div>
    </>

  )
}

export default SectionWrapper(About, "about");