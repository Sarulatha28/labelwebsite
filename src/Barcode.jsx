import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import img11 from '/src/assets/img11.jpg';
import LabelSidebar from './assets/LabelSidebar';

const Barcode = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Page title & breadcrumb */}
        <div className="w-full bg-[#7506B1] py-7">
          <h1 className="text-white font-inter font-semibold leading-none text-4xl text-center mb-2">
            Barcode Labels
          </h1>
          <p className="text-white text-center">Home / Barcode Labels</p>
        </div>

        {/* Grid layout with padding */}
        <div className="grid md:grid-cols-4 gap-6 px-4 md:px-6 py-8">
          {/* Left Sidebar */}
          <LabelSidebar/>

          {/* Main Content */}


<section className="md:col-span-3 space-y-6 pr-4 md:pr-10">
  <h2 className="text-3xl font-inter font-semibold">Barcode Labels</h2>

  {/* Image */}
  <img
    src={img11}
    alt="Printed Labels"
    className="w-full h-auto rounded-[24px]"
  />

  {/* Paragraph */}
  <p className="font-inter font-normal text-[20px]">
     Barcode stickers play a pivotal role in the textile and garment 
             industry by enabling efficient inventory management, tracking,
              and identification of products throughout their lifecycle. 
              These stickers, typically affixed to clothing tags or packaging, 
              encode essential information such as product details, pricing, and logistics data in a scannable format. This technology not only enhances operational efficiency by facilitating rapid stocktaking and replenishment but also ensures accurate order fulfillment and seamless supply chain management. As a result, barcode stickers are indispensable tools that streamline processes and 
             contribute to the overall productivity and competitiveness of textile 
             and garment businesses.
  </p>

  {/* Blockquote */}
  <blockquote className="border-r-4 border-b-4 border-[#7506B1] font-inter font-normal italic text-[20px] bg-purple-50 p-4 rounded">
    Printed labels in textiles provide essential information about garment care,
    composition, and branding, ensuring consumer satisfaction and regulatory compliance.
    Advances in printing technology and sustainable materials enhance label durability and
    align with eco-friendly practices.
  </blockquote>
</section>
            
        </div>
      </main>

      <Footer />
    </>
    
  )
}
export default Barcode
