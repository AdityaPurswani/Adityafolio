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

        <motion.p 
            variants={fadeIn("", "", 0.1, 1)} 
            className='mt-4 text-secondary2 text-[17px] w-full leading-[30px]'
          >
            I’m Aditya Purswani — an AI enthusiast, problem-solver, and MSc Computer Science (AI) postgraduate at the University of Nottingham. I don’t just write code — I build intelligent systems that solve real-world problems and improve lives.
            <br /><br />
            🔬 At the frontier of medical AI, I developed <strong>CogNID-Assist</strong> — a clinical decision support platform that combines MRI scans, radiology reports, and biomarker data to diagnose neurodegenerative disorders like Alzheimer’s and FTD with <strong>91.67% accuracy</strong>. Built in collaboration with NHS researchers, this system is designed for clinical deployment — not just academic results.
            <br /><br />
            🌐 Previously, I resolved 70+ critical cloud support cases at <strong>Rubrik</strong>, built an e-commerce platform at <strong>Silfra Technologies</strong>, and ranked <strong>top 5</strong> in my undergraduate cohort. I’ve also published two international research papers in AI and blockchain.
            <br /><br />
            💡 I bring a unique blend of deep technical skills, data fluency, and human-centered design:
            <br />
            <strong>AI/ML & Data:</strong> Python (pandas, PyTorch, OpenCV), Spark, R, Scikit-learn, SHAP, LIME<br />
            <strong>Full-Stack:</strong> React.js, Tailwind CSS, Firebase, MongoDB, Git<br />
            <strong>Big Data & Tools:</strong> Databricks, Tableau, MySQL<br />
            <strong>Soft Skills:</strong> Clear communicator, adaptive team player, curiosity-driven problem solver
            <br /><br />
            📣 Whether it’s building scalable AI platforms, analyzing 300,000+ genomic features, or creating clean, explainable models under pressure — I’m always building, learning, and pushing limits.
            <br /><br />
            👉 If you’re hiring or collaborating on projects that fuse AI with meaningful impact — <strong>let’s talk</strong>.
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