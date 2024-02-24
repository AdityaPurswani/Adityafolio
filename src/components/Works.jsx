import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import { styles } from "../styles"
import {github} from "../assets"
import { SectionWrapper } from "../hoc"
import { projects, otherprojects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index, name , description, tags, image, source_code_link}) => {
  return(
    <motion.div>
      <Tilt options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-black-100 p-5 rounded-2xl sm:w-[350px] w-full'>
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt='github' className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const OtherProjectCard = ({index, name , description, projecttags, image, source_code_link}) => {
  return(
    <motion.div>
      <Tilt options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-black-100 p-5 pt-1 rounded-2xl sm:w-[350px] w-full'>
        <div className="relative w-full h-auto">
          <p></p>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt='github' className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {projecttags.map((tag) => (
           <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
           </p>
          ))}
        </div>
        
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div>
      <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary2 text[17px] w-full leading-[30px]"
        >
          The following projects describe and showcase my skills through the real time projects as examples of my work. Each project is linked to code repositories and live demos where ever available. It reflects my ability to solve problems and flexibility to work and learn with new technologies and effectively serve the customers. Each projects display different technologies that I have worked on.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-10 sm:justify-center sm:items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index}/>
        ))}
      </div>

      <motion.div>
      <p className={styles.sectionSubText}>Some more Projects</p>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10 sm:justify-center sm:items-center">
        {otherprojects.map((otherproject, index) => (
          <OtherProjectCard key={`otherproject-${index}`} {...otherproject} index={index}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");