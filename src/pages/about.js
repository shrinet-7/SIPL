import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
// import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import profilePic from '../../public/images/profile/d.jpg'
import { useRef, useEffect } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>SIPL | About Page</title>
                <meta name="description" content='any description' />
            </Head>

            <TransitionEffect/>

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text=" Passion Fuels Purpose! " className='mb-16 lg:!text-7xl sm:text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className="font-medium text-sm">
                                At Shrinet Infrastructure Pvt Ltd, we are more than just contractors and property agents; we are visionaries committed to turning concepts into reality. With over 25 years of experience in construction and real estate, we expertly navigate complex projects with precision and creativity. Our focus is on understanding each client’s unique needs, ensuring that every project reflects their aspirations while addressing practical challenges.</p>
                            <p className="my-4 font-medium text-sm">
                                We believe properties go beyond aesthetics; they provide solutions that enhance functionality and create enjoyable experiences for investors. Our commitment to design excellence and client-centered thinking drives our work. Collaborating with esteemed partners like Karalee Construction and Channel Partners allows us to deliver exceptional results tailored to our clients’ visions. Passionate about innovation, our dedicated team strives to exceed expectations, creating inspiring and enduring spaces for every investment.
                            </p>
                            {/* <p className="font-medium">
                                Passionate about innovation, we continuously seek new methodologies to elevate our projects and provide unparalleled service. We look forward to leveraging our skills in your next project, creating inspiring and enduring spaces.
                            </p> */}
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                      bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                      '>
                            <div className='absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark
                            dark:bg-light
                            ' />
                            <Image src={profilePic} alt="profile" className='w-full h-auto rounded-2xl'
                                priority
                                sizes='(max-width: 768px) 100vw,
                                 (max:width: 1200px) 50vw,
                                 33vw'
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={150} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                 dark:text-light/75
                                 xl:text-center md:text-lg sm:text-base sm:text-sm
                                 '>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={30} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 
                                dark:text-light/75
                                 xl:text-center md:text-lg sm:text-base sm:text-sm
                                '>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={25} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                dark:text-light/75
                                 xl:text-center md:text-lg sm:text-base sm:text-sm
                                '>years of experience</h2>
                            </div>

                        </div>

                    </div>

                    <Skills />

                    <Experience />

                    <Education />
                </Layout>

            </main>

        </>
    )
}

export default about
