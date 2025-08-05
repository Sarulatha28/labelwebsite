import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img4 from './assets/img4.jpg'
import img5 from '/src/assets/img5.jpg';
import img6 from '/src/assets/img6.jpg';
import img7 from '/src/assets/img7.jpg';
import img8 from '/src/assets/img8.jpg';
import img13 from '/src/assets/img13.jpg';
import img14 from '/src/assets/img14.jpg';
import img15 from '/src/assets/img15.jpg';
import img16 from '/src/assets/img16.jpg';

const testimonials = [
  {
    name: "Kristin Watson",
    role: "Marketing Coordinator",
    img: img13,
    text: "I have been using Adidas shoes for over a year and love it. Can't imagine life without it. It’s so easy to use, and customer service is great."
  },
  {
    name: "Devon Lane",
    role: "UI/UX Designer",
    img: img14,
    text: "Their services are top-notch. I’m really impressed with the quality and dedication of the team."
  },
  {
    name: "Cody Fisher",
    role: "Product Manager",
    img: img15,
    text: "The user experience has improved dramatically since we switched to this product. Highly recommended!"
  },
  {
    name: "Jane Cooper",
    role: "CEO, Brandify",
    img: img16,
    text: "Exceptional support and quality! Will definitely continue to use their service in future projects."
  },
];


const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
     


      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}
     <section id="home" className="bg-white py-10 md:py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left Text Section */}
    <div  className="self-start md:mt-20">
      <h1 className="text-sm font-inter font-normal uppercase mb-1 ">Welcome to</h1>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold leading-tight mb-4">
        <span className="text-[#7506B1]">Best Business</span> of the <br /> Garment Arena
      </h2>
      <p className="text-gray-600 mb-6">
        Design Your Style: Unleash Your Creativity on <br/>Our Premium Apparel.
      </p>
      <button className="bg-purple-600 text-white px-5 py-3 rounded hover:bg-purple-700 transition">
        Get Free Consultation
      </button>
    </div>

    {/* Right Image Section with Margin on Right */}
    <div className="flex justify-center mr-13 md:justify-end">
      <img 
        src={img1} 
        alt="Machine" 
        className="rounded-xl shadow-xl w-full max-w-[90%] md:max-w-[600px] h-[200px] sm:h-[300px] md:h-[545px] object-cover md:mr-6"
      />
    </div>

  </div>
</section>

      {/* About Section */}
      <section id="about" className="bg-[#F1E6F7] py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src={img4} alt="About" className=" shadow-lg w-3/4 h-50md:w-full mx-auto md:mx-0" />
          <div>
            <Link to="/about">
  <h3 className="text-xl font-semibold mb-4 text-white h-8 w-30 text-center rounded-[10px] bg-purple-600 cursor-pointer">
    About Us
  </h3>
</Link>

            <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-4">Let's Build Something Creative Together</h2>
            <p className="mb-4">KGA specializes in Printed labels, Woven Labels, Barcode Stickers & Heat Transfer Stickers.</p>
            <ul className="space-y-2 text-sm md:text-base">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
  {[
    "Exploring the role of labels in garments",
    "Built-in the business",
    "Sustainable production",
    "Economic & environment friendly"
  ].map((text, idx) => (
    <div 
      key={idx}
      className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex items-start"
    >
      {/* Left emoji */}
      <div className="text-2xl md:text-3xl mr-3">✅</div>
      {/* Right text, starts lower */}
      <p className="text-sm md:text-base mt-1">{text}</p>
    </div>
  ))}
</div>

            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}


<section className="py-12 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h3 className="bg-purple-600 w-[120px] h-8 rounded-[10px] font-inter font-normal text-[14px] leading-[30px] tracking-[0%] uppercase text-white font-semibold mb-2 mx-auto text-center">
      Our Services
    </h3>

    <h2 className="text-2xl md:text-3xl font-bold font-inter text-center mb-8">
      Exploring the Role of <br />
      <span className="font-inter font-semibold text-[40px] text-[#C08CDB] leading-[100%] tracking-[0%] text-center">
        Labels & Stickers
      </span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
      {[
        { title: "Printed Labels", img: img5, route: "/printed" },
        { title: "Barcode Stickers", img: img6, route: "/barcode" },
        { title: "Heat Transfer Stickers", img: img7, route: "/heattransfer" },
        { title: "Woven Labels", img: img8, route: "/woven" },
      ].map((item, idx) => (
        <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition w-full">
          <img src={item.img} alt={item.title} className="rounded-t w-full h-36 object-cover" />
          <div className="p-4">
            <div className="mb-2">
              <span className="inline-block mt-2 bg-[#F1E6F7] text-purple-600 text-xs font-medium px-3 py-2 rounded-full">
                Garments
              </span>
            </div>
            <h4 className="font-bold mb-2 text-2xl">{item.title}</h4>
            <div className="text-center mt-4">
              <Link to={item.route}>
                <button className="text-purple-600 border-2 border-purple-600 bg-white hover:underline px-18 py-2 rounded">
                  Learn Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


            

      {/* Call to Action */}
      <section className="bg-[#7506B1] text-white rounded-[10px] text-center py-12 ml-20 mr-20 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Provide the highest quality work that<br/> meets your expectation</h2>
        <button className="bg-white text-black  px-6 py-3 rounded font-semibold hover:bg-gray-100">
          Get Free Consultation
        </button>
      </section>

     {/* Testimonials */}
<section className="py-12 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center">Testimonials</h2>
    <h3 className="text-sm md:text-lg text-center mb-8">What Our Customers Are Saying</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {testimonials.map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg transition h-full flex flex-col justify-between">
          {/* Stars and badge */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex space-x-0.5 text-yellow-400 text-base">
              {[...Array(5)].map((_, starIdx) => (
                <span key={starIdx}>★</span>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 border-l border-gray-300"></div>
              <div className="flex items-center space-x-1">
                <div className="bg-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  👍
                </div>
                <span className="text-xs font-semibold text-gray-700">Testimonial</span>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <p className="text-base leading-relaxed mb-4 text-gray-700">{item.text}</p>

          {/* User info */}
          <div className="flex items-center bg-[#F3E8EE] p-2 rounded">
            <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
            <div>
              <span className="block font-semibold text-sm">{item.name}</span>
              <span className="block text-xs text-gray-500">{item.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
    
<Footer/>


    </div>
  );
};

export default HomePage;
