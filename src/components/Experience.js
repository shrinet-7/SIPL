import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, work }) => {

  const ref = useRef(null);

  return (
    <li ref={ref} className = 'my-8 first:mt:-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]' >
      <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring"}}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg text-fir dark:text-sec'>
          {position}&nbsp;
        </h3>
        <div>&nbsp;</div>
      <p className='font-medium w-full md:text-sm'>
        {work}
      </p>
    </motion.div>
  </li >
  );
};

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end","center start"]
    }
  )

  return (
    <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 capitalize'>
        What Sets Us Apart
      </h2>
      
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-[2rem] w-[4px] h-[95%] bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          ' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

          <Details
            position="Project Inception"
            work="We begin by understanding the client’s vision and requirements, conducting feasibility studies, and preparing initial project plans that align with their goals."
          />
          <Details
            position="Design Development"
            work="Collaborating with architects and designers, we create detailed designs that reflect the client’s aspirations while adhering to regulatory standards and budget constraints."
          />
          <Details
            position="Permitting and Approvals"
            work="Our team navigates the complex landscape of local regulations to secure necessary permits and approvals, ensuring compliance with all legal requirements."
          />
          <Details
            position="Construction Management"
            work="We oversee the entire construction process, coordinating subcontractors, managing schedules, and ensuring that work is completed to our high standards of quality."
          />
          <Details
            position="Quality Control"
            work="Rigorous quality control measures are implemented at every stage of construction to guarantee that materials and workmanship meet our uncompromising standards."
          />
          <Details
            position="Budget Management"
            work="We provide transparent budgeting processes, monitoring expenses closely to ensure projects remain within financial parameters while delivering value."
          />
          <Details
            position="Client Communication"
            work="Regular updates and open lines of communication keep clients informed about progress, challenges, and milestones throughout the project lifecycle."
          />
          <Details
            position="Post-Construction Services"
            work="After project completion, we offer support services such as maintenance planning and property management to ensure long-term satisfaction for our clients."
          />
          <Details
            position="Real Estate Transactions"
            work="Our expertise extends to facilitating real estate transactions, including market analysis, property valuation, negotiation strategies, and closing processes."
          />
          <Details
            position="Market Insights"
            work="Leveraging our deep understanding of market trends allows us to provide clients with valuable insights for making informed decisions regarding property investments or sales."
          />
          <Details
            position="Strategic Partnerships"
            work="Collaborations with esteemed firms like Karalee Construction enhance our service offerings by integrating specialized skills and resources into our projects."
          />

        
        </ul>
    </div>

    </div>
    
  )
}

export default Experience
