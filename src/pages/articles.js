import Head from 'next/head'
import React, { useRef } from 'react'
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import article1 from '../../public/images/articles/b1.jpg'
import article2 from '../../public/images/articles/b2.jpg'
import article3 from '../../public/images/articles/b3.jpg'
import article4 from '../../public/images/articles/b4.jpg'
import article5 from '../../public/images/articles/b5.jpg'
import article6 from '../../public/images/articles/b6.jpg'
import article7 from '../../public/images/articles/b7.jpg'
import article8 from '../../public/images/articles/b8.jpg'
import article9 from '../../public/images/articles/b9.jpg'
import article10 from '../../public/images/articles/b10.jpg'

import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '../components/TransitionEffect';

import { useState } from "react";
import InquiryForm from "../components/InquiryForm"; 


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave() {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target='_blank'

            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}

                ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden" />

        </Link>
    )
}


const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            viewport={{ once: true }}

            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark
        first:mt-0
        border border-solid border-dark border-r-4 border-b-4
         dark:border-light dark:bg-dark dark:text-light
         sm:flex-col
        '>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}




const Properties = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const openForm = (propertyName) => {
        setSelectedProperty(propertyName);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setSelectedProperty(null);
    };



    const ncrRef = useRef(null);
    const haryanaRef = useRef(null);
    const uttarakhandRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ncrProperties = [
        {
            name: 'Modern Apartment in Noida',
            img: '/images/property/noida.jpg',
        },
        {
            name: 'Modern Apartment in Raj Nagar',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/raj_nagar.jpg',
        },
        {
            name: 'Luxury Apartment, Siddhart Vihar',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/siddhart_vihar.jpg',
        },
        {
            name: 'Modern Apartment in Vasundhara',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/vasundhra.jpg',
        },
    ];

    const haryanaProperties = [
        {
            name: 'Premium Plots near Jewar Airport',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/i1.jpg',
        },
        {
            name: 'Premium Plots near Jewar Airport',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/i2.jpg',
        },
        {
            name: 'Premium Plots near Jewar Airport',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/i3.jpg',
        },
        {
            name: 'Premium Plots near Jewar Airport',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/i4.jpg',
        },
    ];

    const uttarakhandProperties = [
        {
            name: 'Scenic Plots, Dehradun',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/u1.jpg',
        },
        {
            name: 'Luxurious Cottages, Padampuri',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/u3.jpg',
        },
        {
            name: 'Osho Hills Cottages, Mussoorie',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/u4.jpg',
        },
        {
            name: 'Amoda Sari Plots, Almora',
            whatsappLink: 'https://wa.me/9718269561?text=I%20am%20interested%20in%20Modern%20Apartment%20in%20Noida',
            price: "Query Now",
            img: '/images/property/u5.jpg',
        },
    ];

    // const renderSlider = (title, properties, ref) => (
    //     <div ref={ref} className="w-full mb-16">
    //         <h2 className="text-3xl lg:text-2xl font-bold mb-6 lg:mb-8">{title}</h2>
    //         <Swiper
    //             modules={[Navigation, Pagination, Autoplay]}
    //             spaceBetween={15}
    //             slidesPerView={1}
    //             navigation
    //             pagination={{ clickable: true }}
    //             autoplay={{ delay: 4000, disableOnInteraction: false }}
    //             breakpoints={{
    //                 640: { slidesPerView: 1 },
    //                 768: { slidesPerView: 2 },
    //                 1024: { slidesPerView: 3 },
    //             }}
    //             className="property-slider"
    //         >
    //             {properties.map((property, index) => (
    //                 <SwiperSlide key={index}>
    //                     <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 rectangle-card">
    //                         <Image
    //                             src={property.img}
    //                             alt={property.name}
    //                             width={400}
    //                             height={200}
    //                             className="w-full h-40 lg:h-48 object-cover"
    //                         />
    //                         <div className="p-4 text-center">
    //                             <h3 className="text-lg lg:text-lg font-semibold mb-1 lg:mb-2">
    //                                 {property.name}
    //                             </h3>
    //                             <p className="text-lg lg:text-md text-primary">{property.price}</p>
    //                         </div>
    //                     </div>
    //                 </SwiperSlide>
    //             ))}
    //         </Swiper>
    //     </div>
    // );

    // const renderSlider = (title, properties, ref) => (
    //     <div ref={ref} className="w-full mb-16">
    //         <h2 className="text-3xl lg:text-2xl font-bold mb-6 lg:mb-8">{title}</h2>
    //         <Swiper
    //             modules={[Navigation, Pagination, Autoplay]}
    //             spaceBetween={15}
    //             slidesPerView={1}
    //             navigation
    //             pagination={{ clickable: true }}
    //             autoplay={{ delay: 4000, disableOnInteraction: false }}
    //             breakpoints={{
    //                 640: { slidesPerView: 1 },
    //                 768: { slidesPerView: 2 },
    //                 1024: { slidesPerView: 3 },
    //             }}
    //             className="property-slider"
    //         >
    //             {properties.map((property, index) => (
    //                 <SwiperSlide key={index}>
    //                     <a
    //                         href={property.whatsappLink}
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                     >
    //                         <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 rectangle-card">
    //                             <Image
    //                                 src={property.img}
    //                                 alt={property.name}
    //                                 width={400}
    //                                 height={200}
    //                                 className="w-full h-40 lg:h-48 object-cover"
    //                             />
    //                             <div className="p-4 text-center">
    //                                 <h3 className="text-lg lg:text-lg font-semibold mb-1 lg:mb-2">
    //                                     {property.name}
    //                                 </h3>
    //                                 <p className="text-lg lg:text-md text-primary">{property.price}</p>
    //                             </div>
    //                         </div>
    //                     </a>
    //                 </SwiperSlide>
    //             ))}
    //         </Swiper>
    //     </div>
    // );

    const renderSlider = (title, properties) => (
        <div className="w-full mb-16">
            <h2 className="text-3xl lg:text-2xl font-bold mb-6 lg:mb-8">{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="property-slider"
            >
                {properties.map((property, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 rectangle-card">
                            <Image
                                src={property.img}
                                alt={property.name}
                                width={400}
                                height={200}
                                className="w-full h-40 lg:h-48 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg lg:text-lg font-semibold mb-1 lg:mb-2">
                                    {property.name}
                                </h3>
                                <button
                                    onClick={() => openForm(property.name)}
                                    className="bg-green-600 text-white py-2 px-4 rounded-lg mt-2"
                                >
                                    Query Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

    return (
        <>
            <Head>
                <title>SIPL | Inventory & Properties</title>
                <meta name="description" content="Explore our extensive property inventory." />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Discover Your Dream Property!"
                        className="mb-8 lg:mb-16 lg:!text-7xl sm:mb-6 sm:!text-5xl xs:!text-3xl"
                    />
                    {/* <AnimatedText
                        text="Explore Properties by Region"
                        className="mb-8 lg:mb-16 !text-4xl lg:!text-3xl sm:mb-6 sm:!text-xl xs:!text-lg"
                    /> */}

                    <AnimatedText
                        text="Explore Properties by Region"
                        className="mb-8 lg:mb-16 !text-4xl lg:!text-3xl sm:mb-6 sm:!text-xl xs:!text-lg text-dark dark:text-light font-semibold border-b-4 border-primary dark:border-primaryDark pb-2"
                    />


                    {/* Region Filter */}
                    <div className="flex justify-center items-center mb-6 lg:mb-8">
                        <button
                            onClick={() => scrollToSection(ncrRef)}
                            className="mx-1 lg:mx-2 px-4 py-2 !text-2xl lg:!text-lg sm:!text-xs  font-medium border rounded-lg bg-light text-dark border-dark hover:bg-primary hover:text-white transition dark:bg-dark dark:text-light dark:border-light"
                        >
                            NCR
                        </button>
                        <button
                            onClick={() => scrollToSection(haryanaRef)}
                            className="mx-1 lg:mx-2 px-4 py-2 text-2xl lg:!text-lg sm:!text-xs font-medium border rounded-lg bg-light text-dark border-dark hover:bg-primary hover:text-white transition dark:bg-dark dark:text-light dark:border-light"
                        >
                            Haryana
                        </button>
                        <button
                            onClick={() => scrollToSection(uttarakhandRef)}
                            className="mx-1 lg:mx-2 px-4 py-2 text-2xl lg:!text-lg sm:!text-xs font-medium border rounded-lg bg-light text-dark border-dark hover:bg-primary hover:text-white transition dark:bg-dark dark:text-light dark:border-light"
                        >
                            Uttarakhand
                        </button>
                    </div>

                    {/* NCR Properties Slider */}
                    {renderSlider('NCR Properties', ncrProperties, ncrRef)}

                    {/* Haryana Properties Slider */}
                    {renderSlider('Haryana Properties', haryanaProperties, haryanaRef)}

                    {/* Uttarakhand Properties Slider */}
                    {renderSlider('Uttarakhand Properties', uttarakhandProperties, uttarakhandRef)}


                    <InquiryForm isOpen={isFormOpen} onClose={closeForm} propertyName={selectedProperty} />


                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Words Can Change The World! </h2>
                    <ul>
                        <Article
                            title='Exploring the Real Estate Market in 2025'
                            date='December 1,2024'
                            link='/blogs/b1'
                            img={article1}
                        />
                        <Article
                            title='The Rise of Smart Homes in Real Estate'
                            date='December 1,2024'
                            link='/blogs/b2'
                            img={article2}
                        />
                        <Article
                            title='Eco-Friendly Housing: The Future of Real Estate'
                            date='December 1,2024'
                            link='/blogs/b3'
                            img={article3}
                        />
                        <Article
                            title='The Importance of Location in Real Estate Investments'
                            date='December 1,2024'
                            link='/blogs/b4'
                            img={article4}
                        />
                        <Article
                            title='Trends in Urban Real Estate Development'
                            date='December 1,2024'
                            link='/blogs/b5'
                            img={article5}
                        />
                        <Article
                            title='How to Maximize ROI in Real Estate Investments'
                            date='December 1,2024'
                            link='/blogs/b6'
                            img={article6}
                        />
                        <Article
                            title='The Role of Technology in Real Estate'
                            date='December 1,2024'
                            link='/blogs/b7'
                            img={article7}
                        />
                        <Article
                            title='How to Evaluate the Potential of a Property'
                            date='December 1,2024'
                            link='/blogs/b8'
                            img={article8}
                        />
                        <Article
                            title='The Future of Smart Homes in Real Estate'
                            date='December 1,2024'
                            link='/blogs/b9'
                            img={article9}
                        />
                        <Article
                            title='Understanding Property Taxes and Their Impact on Investment'
                            date='December 1,2024'
                            link='/blogs/b10'
                            img={article10}
                        />

                    </ul>



                </Layout>
            </main>
        </>
    );
};

export default Properties;













