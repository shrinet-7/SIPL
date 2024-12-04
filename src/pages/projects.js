import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, Youtube } from './../components/Icons';
import project1 from '../../public/images/projects/Amore Banquet Hall.png'
import project2 from '../../public/images/projects/Assotech blith.png'
import project3 from '../../public/images/projects/Embark plaza.png'
import project4 from '../../public/images/projects/G.K INDUSTRIES.png'
import project5 from '../../public/images/projects/Kamrah Institute   of Info. & Tech..png'
import project6 from '../../public/images/projects/Koyal-Enclave.png'
import project7 from '../../public/images/projects/Parsvnath Paramount.png'
import project8 from '../../public/images/projects/Shivoy Street.png'
import project9 from '../../public/images/projects/smart villas.png'
import project10 from '../../public/images/projects/Super tik Stamps.png'
import project11 from '../../public/images/projects/White orchid.png'
import project12 from '../../public/images/projects/World Infracon centre.png'
import { motion } from 'framer-motion';
import TransitionEffect from '../components/TransitionEffect'


const FramerImage = motion(Image);


const FeaturedProject = ({type,title,summary,img,link,github})=>{
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:right-2  sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />

            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max:width: 1200px) 50vw,
              50vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className="w-10 dark:fill-light"><Youtube/></Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    hover:bg-light hover:text-dark 
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark
                    dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
                    sm:px-4 sm:text-base
                    '
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title,type,img,link,github})=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank'
                        className=' text-lg font-semibold underline md:text-base'
                    >Visit</Link>

                    <Link href={github} target='_blank' className="w-8 md:w-6">
                    <Youtube />
            
                    </Link>

                </div>
            </div>

        </article>

    )
}

const projects = () => {
  return (
      <>
          <Head>
              <title>SIPL | Projects Page</title>
              <meta name='decription' content='any description'/>
          </Head>

            <TransitionEffect/>

          <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
              <Layout className='pt-16'>
                  <AnimatedText text="Imagination Trumps Knowledge!"
                  className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                  />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                      <div className='col-span-12'>
                          <FeaturedProject
                              title='White Orchid'
                              img={project11}
                              summary='The project was started in 2013, from foundation to top, structural
                               work for all towers completred by Shrinet Infrastructure Pvt Ltd also including Swimming Pool, Park, Both gates, Play zone, etc"'
                          link='https://www.youtube.com/@shrinetinfrastructure'
                          github='https://www.youtube.com/@shrinetinfrastructure'
                          type='Featured Project'
                              
                          />
                    </div>
                      <div className='col-span-6 sm:col-span-12'>
                          <Project
                              title='The Amore Banquet Hall'
                              img={project1}
                              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                          local currency.'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                    </div>
                      <div className='col-span-6 sm:col-span-12'>
                          <Project
                              title='G.K. Industries'
                              img={project4}
                              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                          local currency.'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                    </div>
                      <div className='col-span-12'>
                          <FeaturedProject
                              title='Embark Plaza'
                              img={project3}
                              summary="Plaza located near Gaur' s Mall, started in 2016, fashionable shops structure made by Shrinet Infrastructure Pvt Ltd, also completed the water tank structure as well as the front parking lot "
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                    </div>
                      <div className='col-span-6 sm:col-span-12'>
                          <Project
                              title='Super Tik Stamps'
                              img={project10}
                              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                          local currency.'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                    </div>
                      <div className='col-span-6 sm:col-span-12'>
                          <Project
                              title='Parsvnath Paramount'
                              img={project7}
                              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                          local currency.'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                      </div>
                      <div className='col-span-12'>
                          <FeaturedProject
                              title='Koyal Enclave'
                              img={project6}
                              summary='The project was started in 2015, location - Rajnagaer Extension, completed the structure of whole society by Shrinet Infrastructure Pvt Ltd.'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                      </div>
                      <div className='col-span-6 sm:col-span-12'>
                          <Project
                              title='Shivoy Street'
                              img={project8}
                              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                          local currency.'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                      </div>
                      <div className='col-span-6 sm:col-span-12'>
                          <Project
                              title='Smart Villas'
                              img={project9}
                              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                          local currency.'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                      </div>
                      <div className='col-span-12'>
                          <FeaturedProject
                              title='Assotech Blith'
                              img={project2}
                              summary='Assotech project located in Gurugram, worked in 5 towers completion as well as society all exterior work is completed by Shrinet Infrastructure Pvt Ltd'
                              link='https://www.youtube.com/@shrinetinfrastructure'
                              github='https://www.youtube.com/@shrinetinfrastructure'
                              type='Featured Project'

                          />
                      </div>
                     
                      
                </div>

              </Layout>
                  
          </main>
          
      </>
  )
}

export default projects
