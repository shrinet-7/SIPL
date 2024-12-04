import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Form from '../../components/Form';
import AnimatedText from '../../components/AnimatedText';


const UttarakhandPropertyPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/images/uttarakhand1.jpg',
        '/images/uttarakhand2.jpg',
        '/images/uttarakhand3.jpg',
        '/images/uttarakhand4.jpg',
    ];

    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <Head>
                <title>Uttarakhand Property | SIPL</title>
                <meta name="description" content="Explore our premium properties in the serene Uttarakhand region." />
            </Head>

            <Layout>
                <main className="w-full px-4 py-8 flex flex-col items-center dark:text-light">
                      <AnimatedText text="Schedule your private tour!" className='mb-16
                     lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                     ' />
                    {/* Property Title */}
                    <h1 className="text-4xl xs:text-2xl font-bold text-center mb-8">Uttarakhand Property Gallery</h1>

                    {/* Image Slider */}
                    <div className="relative w-full max-w-4xl h-96 mb-8">
                        <Image
                            src={images[currentImage]}
                            alt={`Uttarakhand property image ${currentImage + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark text-light p-2 rounded-full hover:bg-primary"
                            onClick={prevImage}
                        >
                            &larr;
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark text-light p-2 rounded-full hover:bg-primary"
                            onClick={nextImage}
                        >
                            &rarr;
                        </button>
                    </div>

                    {/* Property Information */}
                    <section className="w-full max-w-4xl text-lg mb-16">
                        <h2 className="text-3xl font-semibold mb-4">Property Details</h2>
                        <p className="mb-2">
                            Nestled amidst the serene mountains of Uttarakhand, these properties offer unmatched peace,
                            stunning views, and a perfect retreat from urban life. Experience luxurious living in the lap
                            of nature.
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Located in prime areas across Uttarakhand</li>
                            <li>Eco-friendly and sustainable developments</li>
                            <li>Modern amenities with traditional charm</li>
                            <li>24/7 gated security</li>
                            <li>Plots starting from 100 sq yards</li>
                        </ul>
                    </section>

                    {/* Contact Form */}
                    <section className="w-full max-w-4xl">
                        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                        
                        <Form />

                    </section>
                </main>
            </Layout>
        </>
    );
};

export default UttarakhandPropertyPage;
