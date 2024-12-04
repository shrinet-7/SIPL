import React, { useState } from 'react';
import Image from 'next/image';
import article2 from '../../../public/images/articles/b2.jpg';
import Head from 'next/head'


const B2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>SIPL | Blogs</title>
        <meta name="description" content='any description' />
      </Head>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          lineHeight: '2',
          padding: '20px',
          backgroundColor: isDarkMode ? '#1c1c1c' : '#ffffff',
          color: isDarkMode ? '#f5f5f5' : '#2d3436',
          minHeight: '100vh',
        }}
      >
        <style jsx>{`
          h1 {
            text-align: center;
            color: ${isDarkMode ? '#f5f5f5' : '#2c3e50'};
            font-size: 3rem;
            margin-bottom: 10px;
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 2.5rem;
            }
          }
          p.subheading {
            text-align: center;
            color: ${isDarkMode ? '#d3d3d3' : '#7f8c8d'};
            font-size: 1.5rem;
            margin-bottom: 30px;
          }
          @media (max-width: 768px) {
            p.subheading {
              font-size: 1.2rem;
            }
          }
          .image-container {
            text-align: center;
            margin: 20px 0;
          }
          .image-container img {
            border-radius: 10px;
            max-width: 100%;
            height: auto;
          }
          article h2 {
            color: ${isDarkMode ? '#e0e0e0' : '#34495e'};
            font-size: 2rem;
            margin: 20px 0 10px;
          }
          @media (max-width: 768px) {
            article h2 {
              font-size: 1.8rem;
            }
          }
          article p,
          article ul {
            font-size: 1.3rem;
            color: ${isDarkMode ? '#dcdcdc' : '#2d3436'};
          }
          @media (max-width: 768px) {
            article p,
            article ul {
              font-size: 1.2rem;
            }
          }
          ul {
            padding-left: 20px;
            margin: 10px 0;
          }
          ul li {
            margin-bottom: 10px;
          }
        `}</style>


        <h1>The Rise of Smart Homes in Real Estate</h1>
        <p className="subheading">
          How technology is reshaping the future of living spaces.
        </p>

        <div className="image-container">
          <Image src={article2} alt="Smart Homes" width={800} height={400} priority />
        </div>

        <article>
          <h2>Introduction</h2>
          <p>
            Smart homes are becoming a key feature in modern real estate. These homes utilize advanced
            technologies like automated lighting, security systems, and smart assistants to create
            convenience and efficiency for residents.
          </p>

          <h2>Benefits of Smart Homes</h2>
          <ul>
            <li>Enhanced convenience through automation and remote control features.</li>
            <li>Energy efficiency that leads to lower utility bills.</li>
            <li>Advanced security measures for peace of mind.</li>
          </ul>

          <h2>Future Trends</h2>
          <p>
            The adoption of smart technologies in housing is expected to grow significantly, with smart
            systems becoming standard in both urban and suburban areas.
          </p>
        </article>
      </div>
    </>
  );
};

export default B2;
