import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head'
import article1 from '../../../public/images/articles/b1.jpg';

const B1 = () => {
  const [isDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>SIPL | Blogs</title>
        <meta name="description" content='any description' />
      </Head>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.8',
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
            font-size: 2.5rem;
            margin-bottom: 10px;
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }
          }
          p.subheading {
            text-align: center;
            color: ${isDarkMode ? '#d3d3d3' : '#7f8c8d'};
            font-size: 1.2rem;
            margin-bottom: 30px;
          }
          @media (max-width: 768px) {
            p.subheading {
              font-size: 1rem;
            }
          }
          .image-container {
            text-align: center;
            justify-content: center;
            margin: 20px 0;
          }
          .image-container img {
            border-radius: 10px;
            max-width: 100%;
            height: auto;
          }
          article h2 {
            color: ${isDarkMode ? '#e0e0e0' : '#34495e'};
            font-size: 1.8rem;
            margin: 20px 0 10px;
          }
          @media (max-width: 768px) {
            article h2 {
              font-size: 1.5rem;
            }
          }
          article p,
          article ul {
            font-size: 1.1rem;
            color: ${isDarkMode ? '#dcdcdc' : '#2d3436'};
          }
          @media (max-width: 768px) {
            article p,
            article ul {
              font-size: 1rem;
            }
          }
          ul {
            padding-left: 20px;
            margin: 10px 0;
          }
          ul li {
            margin-bottom: 8px;
          }
        `}</style>

        <h1>Exploring the Real Estate Market in 2025</h1>
        <p className="subheading">
          Discover trends, opportunities, and challenges in the evolving world of real estate.
        </p>

        <div className="image-container">
          <Image src={article1} alt="Real Estate Market" width={800} height={400} priority />
        </div>

        <article>
          <h2>Introduction</h2>
          <p>
            The real estate market has undergone significant transformations over the past few years.
            In 2025, we see a mix of technological advancements, changing buyer preferences, and economic
            factors shaping the industry.
          </p>

          <h2>Key Trends</h2>
          <ul>
            <li>Rise of eco-friendly and sustainable housing options.</li>
            <li>Increased use of smart home technologies.</li>
            <li>Shift toward suburban and rural properties due to remote work trends.</li>
          </ul>

          <h2>Opportunities in Real Estate</h2>
          <p>
            Whether you are an investor, buyer, or seller, understanding the current trends can help you
            make informed decisions. The demand for mixed-use developments and affordable housing remains strong,
            while luxury properties continue to captivate high-net-worth individuals.
          </p>

          <h2>Conclusion</h2>
          <p>
            Staying ahead in the real estate market requires continuous learning and adaptation. By keeping an eye
            on emerging trends and leveraging technology, stakeholders can thrive in this dynamic environment.
          </p>
        </article>
      </div>
    </>
  );
};

export default B1;
