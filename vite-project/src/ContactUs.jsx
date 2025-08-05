import React, { useState } from "react";
import axios from "axios";
import Footer from './Footer';
import Navbar from './Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Phone, Mail, MapPin } from "lucide-react";
import img26 from '/src/assets/img26.jpg';
import img27 from '/src/assets/img27.jpg';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Top title section */}
      <div className="bg-[#7506B1] text-center py-10">
        <h2 className="text-white text-2xl md:text-3xl font-inter font-semibold text-4xl lg:text-5xl leading-none">Contact us</h2>
        <p className="text-white mt-2">Home / Contact Us</p>
      </div>

      {/* Map and form */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* Map */}
        <div>
         <img src={img26} alt="Illustration" className="w-90 h-full md:w-full" />
        </div>

        {/* Contact form */}
       <div className="px-4 py-8 max-w-4xl mx-auto">
  <h3 className="font-semibold font-inter text-3xl leading-none mb-4">
    Contact Information
  </h3>
  <p className="mb-6 text-gray-600 font-inter font-normal text-xl">
    Say something to start a live chat!
  </p>

  <form className="space-y-4" onSubmit={handleSubmit}>
    {/* Name & Email */}
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full md:w-1/2 border rounded px-3 py-2"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full md:w-1/2 border rounded px-3 py-2"
        required
      />
    </div>

    {/* Phone */}
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Phone Number"
      className="w-full border rounded px-3 py-2"
      required
    />

    {/* Message */}
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Additional Message"
      className="w-full border rounded px-3 py-2 h-28 resize-none"
      required
    ></textarea>

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        className="bg-[#7506B1] text-white px-6 py-2 rounded hover:bg-purple-800 transition"
      >
        Send Now
      </button>
    </div>
  </form>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center bg-[#FBF4FF] rounded-md">
  <div className="flex flex-col items-start space-y-4">
    <div className="flex items-center gap-3">
      <Phone size={24} color="#7506B1" />
      <span className="text-[#7506B1] font-inter font-normal text-[20px]">97913 67638</span>
    </div>
    <div className="flex items-center gap-3">
      <Mail size={24} color="#7506B1" />
      <span className="text-[#7506B1] font-inter font-normal text-[20px]">sale@iprofenautomation.com</span>
    </div>
    <div className="flex items-center gap-3">
      <MapPin size={24} color="#7506B1" />
      <span className="text-[#7506B1] font-inter font-normal text-[20px]">Your location text here</span>
    </div>

    <div className="flex gap-4 mt-4">
      <a href="#"><FaFacebookF className="text-[#7506B1] text-xl" /></a>
      <a href="#"><FaTwitter className="text-[#7506B1] text-xl" /></a>
      <a href="#"><FaLinkedinIn className="text-[#7506B1] text-xl" /></a>
      <a href="#"><FaInstagram className="text-[#7506B1] text-xl" /></a>
    </div>
  </div>

  <div className="flex justify-center">
    <img src={img27} alt="Illustration" className="w-72 md:w-80" />
  </div>
</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
