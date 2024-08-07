import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {publications} from '../constants'
import { paper } from '../assets'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const PublicationCard = ({index, name , image, paper_link, description}) => {
    return(
      <motion.div variants={fadeIn('up', 'spring', index*0.5, 0.75)}>
        <Tilt options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary p-5 rounded-2xl xs:w-[450px] w-full'>
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(paper_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={paper} alt='paper' className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary2 text-[14px]">{description}</p>
          </div>
        </Tilt>
      </motion.div>
    )
  }
  
  const Publications = () => {
    return (
  
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Publications</p>
          <h2 className={styles.sectionHeadText}>Papers.</h2>
        </motion.div>
  
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary2 text-[17px] w-full leading-[30px]'>
        Here are some papers that I have published alongside my fellow authors in fields of Blockchain and Machine Learning. Preparing to add some more papers in my portfolio.
        </motion.p>
  
        <div className='mt-10 flex flex-wrap gap-7 items-center justify-center'>
          {publications.map((publication, index) => (          
            <PublicationCard key={publication.name} index={index} {...publication} />
      
          ))}
        </div>
      </>
  
    )
  }
  
  export default SectionWrapper(Publications, "");