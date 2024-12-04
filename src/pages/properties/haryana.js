import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Form from '../../components/Form';
import AnimatedText from '../../components/AnimatedText';


const HaryanaPropertyPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/images/haryana1.jpg',
        '/images/haryana2.jpg',
        '/images/haryana3.jpg',
        '/images/haryana4.jpg',
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
                <title>Haryana Property | SIPL</title>
                <meta name="description" content="Explore our stunning Haryana region properties." />
            </Head>

            <Layout>
                <main className="w-full px-4 py-8 flex flex-col items-center dark:text-light">
  <AnimatedText text="Schedule your private tour!" className='mb-16
                     lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                     ' />

                    {/* Property Title */}
                    <h1 className="text-4xl xs:text-2xl font-bold text-center mb-8">Haryana Property Gallery</h1>

                    {/* Image Slider */}
                    <div className="relative w-full max-w-4xl h-96 mb-8">
                        <Image
                            src={images[currentImage]}
                            alt={`Haryana property image ${currentImage + 1}`}
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
                            Discover the charm of Haryana properties. This region offers a unique blend of traditional culture and modern infrastructure with luxurious and sustainable living spaces.
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Prime locations across Haryana</li>
                            <li>Wide internal roads</li>
                            <li>Government electricity and water supply</li>
                            <li>24/7 gated security</li>
                            <li>Plots starting from 200 sq yards</li>
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

export default HaryanaPropertyPage;
