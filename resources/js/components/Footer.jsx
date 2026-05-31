import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#f5f1ed] text-[#2f2418]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-[82px] sm:px-8 md:grid-cols-[1.5fr_0.65fr_0.75fr_1.25fr] lg:px-0">
        <div>
          <h2 className="font-serif text-[34px] font-normal leading-none tracking-[0px] text-[#76500d]">
            Thai Boran
          </h2>
          <p className="mt-[28px] max-w-[310px] text-[15px] leading-[1.75] text-[#4a4037]">
            Honoring the ancient traditions of Thai healing in a modern sanctuary designed for ultimate rejuvenation.
          </p>
        </div>

        <div>
          <h3 className="text-[15px] font-semibold leading-none text-[#6a4307]">Explore</h3>
          <ul className="mt-[24px] space-y-[15px] text-[15px] text-[#3f342c]">
            <li><Link className="transition-colors duration-300 hover:text-[#76500d]" to="/services">Services</Link></li>
            <li><Link className="transition-colors duration-300 hover:text-[#76500d]" to="/gallery">Gallery</Link></li>
            <li><Link className="transition-colors duration-300 hover:text-[#76500d]" to="/about">About</Link></li>
            <li><Link className="font-medium text-[#76500d] transition-colors duration-300 hover:text-[#0f5b61]" to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[15px] font-semibold leading-none text-[#6a4307]">Legal</h3>
          <ul className="mt-[24px] space-y-[17px] text-[15px] text-[#3f342c]">
            <li><a className="transition-colors duration-300 hover:text-[#76500d]" href="/privacy">Privacy Policy</a></li>
            <li><a className="transition-colors duration-300 hover:text-[#76500d]" href="/terms">Terms of Service</a></li>
            <li><a className="transition-colors duration-300 hover:text-[#76500d]" href="/location">Location</a></li>
          </ul>
        </div>

        <div className="text-[15px] leading-none text-[#3f342c] md:pt-[5px]">
          {'\u00a9'} 2024 Thai Boran Massage. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
