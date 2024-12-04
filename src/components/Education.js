import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import Image from 'next/image';
import vishav from '../../public/images/profile/vishav.jpg'


const Details = ({ type, info, pic }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt:-0 last:mb-0 w-[30%] mx-auto flex flex-col items-center justify-between md:w-[90%]' >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <div className='flex w-full'>
                    <Image
                        src={pic}
                        width={150}
                        alt="Picture of the author"
                        className='rounded-full h-fit'
                    />
                    <div>
                        <h3 className='capitalize font-bold text-4xl sm:text-xl xs:text-lg text-balance mt-7 sm:text-justify'>
                            &nbsp;{type}&nbsp;
                        </h3>
                        <p>&nbsp;</p>
                        <p className='font-medium w-full md:text-sm ml-3 xs:hidden'>
                            {info}
                        </p>
                       
                    </div>

                </div>

            </motion.div>
        </li >
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Team Ally
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-[2rem] w-[4px] h-[95%] bg-dark origin-top dark:bg-light
                     md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

                    <Details
                        pic={vishav}
                        type="Director"
                        info=" oversees operations"
                    />
                    <Details
                        pic={vishav}
                        type="Director"
                        info=" oversees operations"
                    />
                    <Details
                        pic={vishav}
                        type="Director"
                        info=" oversees operations"
                    />
                    <Details
                        pic={vishav}
                        type="Director"
                        info=" oversees operations"
                    />
                    <Details
                        pic={vishav}
                        type="Director"
                        info=" oversees operations"
                    />
                   
                    {/* <Details
                        pic={vishav}
                        type="Director"
                        info=" oversees strategic planning, financial management, regulatory compliance, stakeholder engagement, project oversight, marketing strategies, risk management, and performance evaluation to ensure successful construction and sales operations."
                    />
                    <Details
                        pic={vishav}
                        type="Director"
                        info=" oversees strategic planning, financial management, regulatory compliance, stakeholder engagement, project oversight, marketing strategies, risk management, and performance evaluation to ensure successful construction and sales operations."
                    /> */}
                   


                </ul>
            </div>

        </div>

    )
}

export default Education
