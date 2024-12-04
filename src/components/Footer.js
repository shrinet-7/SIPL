// // import React from 'react'
// // import Layout from './Layout'
// // import Link from 'next/link'

// // const Footer = () => {
// //   return (
//     // <div>
//     //   <footer className="w-full border-t-2 border-solid border-dark
//     //   font-medium text-lg dark:text-light dark:border-light sm:text-base
//     //   ">

//     //     <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
//     //       <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
//     //       <div className='flex items-center lg:py-2'>
//     //         Build with <span className='text-primary dark:text-primaryDark text-2xl px-1' >&#9825;</span>by&nbsp;<Link href="/"
//     //           className='underline underline-offset-2'
//     //           target='_blank'>DCC</Link>
//     //       </div>

//     //       <Link href="/contact"
//     //         className='underline underline-offset-2'
//     //       >Say hello!!</Link>


//     //     </Layout>
//     //   </footer>

//     // </div>
// //   )
// // }

// // export default Footer




// import React from 'react'
// import Link from 'next/link'

// const Footer = () => {
//   return (
//     <>
//       <footer className="m-4 w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base py-10 px-4 lg:flex-col">
//         <div className="container mx-auto flex flex-row gap-12 justify-between items-start lg:flex-col">
//           {/* Services Section */}
//           <div className="flex flex-col mb-8 w-1/3">
//             <h3 className="text-2xl font-bold mb-4">Our Services</h3>
//             <ul className="space-y-2 text-lg">
//               <li><Link href="/projects" className="hover:text-red-500">Construction Services</Link></li>
//               <li><Link href="/articles" className="hover:text-red-500">Property Sales</Link></li>
//               <li><Link href="/articles" className="hover:text-red-500">Property Investment</Link></li>
//               <li><Link href="/articles" className="hover:text-red-500">Residential Properties</Link></li>
//               <li><Link href="/articles" className="hover:text-red-500">Commercial Properties</Link></li>
//             </ul>
//           </div>

//           {/* Address and Contact Info Section */}
//           <div className="flex flex-col mb-8 w-1/3">
//             <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
//             <p className="text-lg mb-2">Shrinet Infrastructure Pvt. Ltd.</p>
//             <p className="text-lg mb-2">Address: Office no. 1426 - Galaxy Diamond Plaza, Greater Noida West</p>
//             <p className="text-lg mb-2">Phone: +91-9718269561</p>
//             <p className="text-lg mb-2">Email: contact.siplproperties@gmail.com</p>
//             <p className="text-lg mb-2">Website: <Link href="https://www.sipl.com" className="text-red-500">www.sipl.com</Link></p>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
//           <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
//           <div className="flex items-center lg:py-2">
//             Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
//             <Link href="/" className="underline underline-offset-2" target="_blank">DCC</Link>
//           </div>
//           <Link href="/contact" className="underline underline-offset-2">Say hello!!</Link>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default Footer


import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="ml-4 w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base py-10 px-4 lg:flex-col">
        <div className="container mx-auto flex flex-row gap-12 justify-between items-start lg:flex-col">
          {/* Services Section */}
          <div className="flex flex-col mb-8 w-1/3">
            <h3 className="text-2xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-lg">
              <li><Link href="/projects" className="hover:text-red-500">Construction Services</Link></li>
              <li><Link href="/articles" className="hover:text-red-500">Property Sales</Link></li>
              <li><Link href="/articles" className="hover:text-red-500">Property Investment</Link></li>
              <li><Link href="/articles" className="hover:text-red-500">Residential Properties</Link></li>
              <li><Link href="/articles" className="hover:text-red-500">Commercial Properties</Link></li>
            </ul>
          </div>

          {/* Address and Contact Info Section */}
          <div className="flex flex-col mb-8 w-1/3">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg mb-2">Shrinet Infrastructure Pvt. Ltd.</p>
            <p className="text-lg mb-2">Address: Office no. 1426 - Galaxy Diamond Plaza, Greater Noida West</p>
            <p className="text-lg mb-2">Phone: +91-9718269561</p>
            <p className="text-lg mb-2">Email: contact.siplproperties@gmail.com</p>
            <p className="text-lg mb-2">Website: <Link href="https://www.sipl.com" className="text-red-500">www.sipl.com</Link></p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col mb-8 w-1/3">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <Link href="https://instagram.com/your-instagram" target="_blank" className="hover:text-red-500">
                <FaInstagram />
              </Link>
              <Link href="https://twitter.com/your-twitter" target="_blank" className="hover:text-red-500">
                <FaTwitter />
              </Link>
              <Link href="https://youtube.com/your-youtube" target="_blank" className="hover:text-red-500">
                <FaYoutube />
              </Link>
              <Link href="https://facebook.com/your-facebook" target="_blank" className="hover:text-red-500">
                <FaFacebook />
              </Link>
              <Link href="https://linkedin.com/in/your-linkedin" target="_blank" className="hover:text-red-500">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="m-4 py-8 flex items-center justify-between lg:flex-col lg:py-6">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div className="flex items-center lg:py-2">
            Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
            <Link href="/" className="underline underline-offset-2" target="_blank">DCC</Link>
          </div>
          <Link href="/contact" className="underline underline-offset-2">Say hello!!</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;







