import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Form from '../../components/Form';
import AnimatedText from '../../components/AnimatedText';

const VasundharaPropertyPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Images grouped into collages (each array represents one collage)
    const collages = [
        ['/images/property/i.jpg', '/images/property/i2.jpg', '/images/property/i3.jpg', '/images/property/i4.jpg'],
        ['/images/property/v5.jpg', '/images/property/v6.jpg', '/images/property/v7.jpg', '/images/property/i2.jpg'],
        ['/images/property/v9.jpg', '/images/property/v10.jpg', '/images/property/v11.jpg', '/images/property/v12.jpg'],
    ];

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % collages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex - 1 + collages.length) % collages.length);
    };

    return (
        <>
            <Head>
                <title>Vasundhara Property | SIPL</title>
                <meta name="description" content="Explore stunning properties in Vasundhara with SIPL." />
            </Head>

            <Layout>
                <main className="w-full px-4 flex flex-col items-center dark:text-light">
                    {/* Animated Header */}
                    <AnimatedText
                        text="Schedule Your Private Tour in Vasundhara!"
                        className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl"
                    />

                    {/* Property Title */}
                    <h1 className="text-4xl xs:!text-2xl font-bold text-center mb-8 dark:text-light">
                        Vasundhara Property Gallery
                    </h1>

                    {/* Collage Image Slider */}
                    <div className="relative w-full max-w-4xl h-[400px] mb-8">
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-4 bg-gray-100 rounded-lg shadow-lg">
                            {collages[currentSlide].map((image, index) => (
                                <div key={index} className="relative w-full h-full">
                                    <Image
                                        src={image}
                                        alt={`Property collage image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md shadow-sm hover:scale-105 transition-transform"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark/80 text-light p-3 rounded-full shadow-lg hover:bg-primary transition"
                            onClick={prevSlide}
                        >
                            &larr;
                        </button>
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark/80 text-light p-3 rounded-full shadow-lg hover:bg-primary transition"
                            onClick={nextSlide}
                        >
                            &rarr;
                        </button>

                        {/* Dots for Navigation */}
                        <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
                            {collages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-gray-400'
                                        } hover:bg-primary transition`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Property Information */}
                    <section className="w-full max-w-4xl text-lg mb-16 dark:text-light">
                        <h2 className="text-3xl font-semibold mb-4">Property Details</h2>
                        <p className="mb-4">
                            Experience the vibrant and well-connected community of Vasundhara, a perfect blend of modern living
                            and convenience. This property offers everything you need for a luxurious and comfortable lifestyle.
                        </p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>Prime location in Vasundhara, Ghaziabad</li>
                            <li>Spacious and thoughtfully designed apartments</li>
                            <li>24/7 gated security with CCTV surveillance</li>
                            <li>Close proximity to schools, hospitals, and shopping centers</li>
                            <li>Plots starting from 150 sq yards</li>
                        </ul>
                    </section>

                    {/* Contact Form */}
                    <section className="w-full max-w-4xl dark:text-light">
                        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                        <Form />
                    </section>
                </main>
            </Layout>
        </>
    );
};

export default VasundharaPropertyPage;
