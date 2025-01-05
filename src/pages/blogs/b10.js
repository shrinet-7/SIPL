import React, { useState } from 'react';
import Image from 'next/image';
import article10 from '../../../public/images/articles/b10.jpg';
import Head from 'next/head'

const B10 = () => {
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

                <h1>Understanding Property Taxes and Their Impact on Investment</h1>
                <p className="subheading">How property taxes can affect your real estate returns and planning.</p>
                <div className="image-container">
                    <Image src={article10} alt="Property Taxes" width={800} height={400} priority />
                </div>
                <article>
                    <h2>Introduction</h2>
                    <p>
                        Property taxes are a key consideration for real estate investors. Understanding how they work and how to manage them is crucial to long-term success.
                    </p>

                    <h2>Key Factors Influencing Property Taxes</h2>
                    <ul>
                        <li>Location and local tax rates.</li>
                        <li>The value of the property and its assessed worth.</li>
                        <li>Exemptions and tax deductions available for property owners.</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Smart tax planning can help investors maximize returns by minimizing liabilities and maximizing deductions.</p>
                </article>
            </div>
        </>
    );
};

export default B10;
