import React from 'react'
import dock from '../assets/images/Dock.webp'
import redchillies from '../assets/images/redChillies.jpg'
import skf from '../assets/images/skf.webp'
import dharma from '../assets/images/dharma.png'
import actor from '../assets/images/actor.png'
import excel from '../assets/images/excel.png'


const logos = [
  { src: dock, alt: 'Dock' },
  { src: redchillies, alt: 'Red Chillies' },
  { src: skf, alt: 'SKF' },
  { src: dharma, alt: 'Dharma Productions' },
  { src: actor, alt: 'Actor Prepares' },
  { src: excel, alt: 'Excel' },
]

const LogoMarquee = () => {
  return (
    <section className='w-full py-20 overflow-hidden'>
      <div className='flex animate-marquee whitespace-nowrap'>
        {/* Render twice for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className='flex items-center justify-center mx-10 shrink-0'>
            <img
              src={logo.src}
              alt={logo.alt}
              className='w-[156px] h-[82px] w-auto object-contain hover:grayscale-0 transition duration-300'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default LogoMarquee