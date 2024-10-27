import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className='footer-bg w-full py-10 mt-20 px-4'>
        <div className='w-full md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* About Section */}
          <div className='text-left'>
            <h1 className='font-semibold text-lg mb-4'>About</h1>
            <p className='text-sm leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <ul className='text-xs mt-4'>
              <li><h1><span className='font-semibold'>Email:</span> jojosingh568@gmail.com</h1></li>
              <li><h1><span className='font-semibold'>Phone:</span> 01580469631</h1></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className='font-semibold text-lg mb-4'>Quick Links</h1>
            <ul className='text-sm space-y-2'>
              <li><a href='#' className='hover:text-blue-600'>Home</a></li>
              <li><a href='#' className='hover:text-blue-600'>About</a></li>
              <li><a href='#' className='hover:text-blue-600'>Blog</a></li>
              <li><a href='#' className='hover:text-blue-600'>Achieved</a></li>
              <li><a href='#' className='hover:text-blue-600'>Author</a></li>
              <li><a href='#' className='hover:text-blue-600'>Contact</a></li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h1 className='font-semibold text-lg mb-4'>Category</h1>
            <ul className='text-sm space-y-2'>
              <li><a href='#' className='hover:text-blue-600'>Lifestyle</a></li>
              <li><a href='#' className='hover:text-blue-600'>Technology</a></li>
              <li><a href='#' className='hover:text-blue-600'>Travel</a></li>
              <li><a href='#' className='hover:text-blue-600'>Business</a></li>
              <li><a href='#' className='hover:text-blue-600'>Economy</a></li>
              <li><a href='#' className='hover:text-blue-600'>Sports</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='bg-white shadow-lg p-6 rounded-lg'>
            <h1 className='font-semibold text-lg mb-2'>Weekly Newsletter</h1>
            <p className='text-xs mb-4'>Get blog articles and offers via email</p>
            <input type="email" placeholder='Your email' className='border border-gray-400 w-full p-2 text-sm mb-4 rounded-md' />
            <button className='bg-blue-600 w-full text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors'>Subscribe</button>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
