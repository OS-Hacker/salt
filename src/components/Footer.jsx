import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full bg-white border-t border-gray-200'>
      <div className='primary-container py-12'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>

          {/* Brand */}
          <div className='md:col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              <img src='/assets/logo.png' alt='Salt Logo' className='h-12 w-auto' />
            </div>
            <p className='text-sm text-gray-500 leading-relaxed'>
              We take pride in providing you with top-notch, affordable furniture that turns your house into a home.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className='text-sm font-semibold text-gray-900 mb-4'>Products</h4>
            <ul className='space-y-2'>
              {['Desk', 'Chairs', 'Sofa and Couches', 'Storage', 'Tables', 'Office Tables', 'Lighting', 'Meeting Tables'].map((item) => (
                <li key={item}>
                  <a href='#' className='text-sm text-gray-500 hover:text-gray-900 transition'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className='text-sm font-semibold text-gray-900 mb-4'>Menu</h4>
            <ul className='space-y-2'>
              {['About Us', 'Blog', 'Contact Us', 'Resources'].map((item) => (
                <li key={item}>
                  <a href='#' className='text-sm text-gray-500 hover:text-gray-900 transition'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className='text-sm font-semibold text-gray-900 mb-4'>Contact Us</h4>
            <p className='text-sm text-gray-500 font-medium mb-1'>Registered Office Address</p>
            <p className='text-sm text-gray-500 leading-relaxed mb-4'>
              29, 1st Floor, Sonawala Building, Horniman Circle, G Vaidya Rd, Fort, Mumbai, Maharashtra 400023, India
            </p>
            <p className='text-sm text-gray-500 font-medium mb-1'>Mobile. No.</p>
            <p className='text-sm text-gray-500 mb-4'>415-555-0132</p>
            <p className='text-sm text-gray-500 font-medium mb-1'>Email Address</p>
            <p className='text-sm text-gray-500'>Salt@gmail.come</p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className='text-sm font-semibold text-gray-900 mb-4'>Follow Us</h4>
            <div className='flex items-center gap-4'>
              <a href='#' className='text-gray-600 hover:text-gray-900 transition'>
                <FaInstagram size={18} />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-900 transition'>
                <FaTwitter size={18} />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-900 transition'>
                <FaFacebookF size={18} />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-900 transition'>
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-200'>
        <div className='primary-container py-4 flex flex-col md:flex-row items-center justify-between gap-2'>
          <p className='text-sm text-gray-500'>Copyright ©CozyCorner. All Rights Reserved</p>
          <div className='flex items-center gap-6'>
            <a href='#' className='text-sm text-gray-500 hover:text-gray-900 transition'>Terms of Use</a>
            <a href='#' className='text-sm text-gray-500 hover:text-gray-900 transition'>Privacy Policy</a>
            <a href='#' className='text-sm text-gray-500 hover:text-gray-900 transition'>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer