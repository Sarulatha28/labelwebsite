import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from "react-router-dom";
import img17 from './assets/img17.jpg'
 const Footer = () => {
  return (
    <div>
        <footer className="bg-[#31034A] font-roboto text-gray-200 px-4 py-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8">

    {/* Left: Tech World - occupies 50% */}
    <div className="mb-8 md:mb-0">
  <div className="flex items-center gap-4">
    <img src={img17} alt="img" className="w-12 h-12 object-cover" />
    <h4 className="font-roboto font-bold text-[24px] leading-[100%] tracking-[0%]">
      Tech World
    </h4>
  </div>


      <p className=" font-jakarta font-normal mt-6 text-[14px] leading-[24px] tracking-[0%] mb-4"> A team of experienced designers and developers dedicated to creating exceptional websites.Providing custom web solution and Digital Marketing tailored to your specific business goals.</p>
      

      {/* Social Icons */}
      <div className="flex space-x-4 mb-4">
        <a href="#" className="hover:text-white text-xl"><FaFacebookF /></a>
        <a href="#" className="hover:text-white text-xl"><FaTwitter /></a>
        <a href="#" className="hover:text-white text-xl"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-white text-xl"><FaInstagram /></a>
      </div>

      {/* Vertical Divider only for layout clarity on small screens */}
    </div>

    {/* Right: Services, Pages, Contact - equally distributed */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h4 className="font-bold font-roboto text-[18px] mb-2">Service</h4>
       <ul className="space-y-1 font-roboto font-normal text-[14px]">
  <li><Link to="/printed" className="hover:text-[#7506B1]">Printed Labels</Link></li>
  <li><Link to="/woven" className="hover:text-[#7506B1]">Woven label</Link></li>
  <li><Link to="/barcode" className="hover:text-[#7506B1]">Barcode Stickers</Link></li>
  <li><Link to="/heattransfer" className="hover:text-[#7506B1]">Heat Transfer Stickers</Link></li>
</ul>
      </div>
      <div>
        <h4 className="font-bold font-roboto text-[18px] mb-2">Pages</h4>
        <ul className="space-y-1  font-roboto font-normal text-[14px]">
          <li>Home it work</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
     <div className="space-y-2">
  <h4 className="font-bold font-roboto text-[18px] mb-2">Contact</h4>

  <div className="flex items-center  font-roboto font-normal space-x-2">
    <MdEmail className="text-white w-6 h-6" />
    <p className="text-[14px]">info@example.com</p>
  </div>

  <div className="flex items-center space-x-2">
    <MdPhone className="text-white w-6 h-6" />
    <p className="text-[14px]">+123 456 7890</p>
  </div>

  <div className="flex items-center space-x-2">
    <MdLocationOn className="text-white w-6 h-6" />
    <p className="text-[14px]">123 Street, City, Country</p>
  </div>
</div>

    </div>
  </div>

  {/* Horizontal line across whole footer */}
  <hr className="border-white  my-4 max-w-7xl mx-auto" />

  {/* Privacy & Terms aligned right below horizontal line */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs text-white">
    <div className="mb-2 font-normal text-[14px] font-Plus Jakarta Sans md:mb-0">&copy; Copyrights 2023Techmax All rights reserved.</div>
    <div className="flex font-normal text-[14px] font-Plus Jakarta Sans space-x-4">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Terms & Conditions</a>
    </div>
  </div>
</footer>
    </div>
  )
}
export default Footer
