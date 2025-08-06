import React from 'react'
import Navbar from './Navbar';
    import Footer from './Footer';
    import img12 from '/src/assets/img12.jpg';
    import LabelSidebar from './assets/LabelSidebar';
    
 const Heattransfer = () => {
  return (
    
    
        <>
          <Navbar />
          <main className="w-full">
            {/* Page title & breadcrumb */}
            <div className="w-full bg-[#7506B1] py-7">
              <h1 className="text-white font-inter font-semibold leading-none text-4xl text-center mb-2">
                 Heat Transfer Stickers
              </h1>
              <p className="text-white text-center">Home / Heat Transfer Stickers</p>
            </div>
    
            {/* Grid layout with padding */}
            <div className="grid md:grid-cols-4 gap-6 px-4 md:px-6 py-8">
              {/* Left Sidebar */}
             <LabelSidebar/>
              {/* Main Content */}
            
<section className="md:col-span-3 space-y-6 pr-4 md:pr-10">
  <h2 className="text-3xl font-inter font-semibold">Heat Transfer Stickers</h2>

  {/* Image */}
  <img
    src={img12}
    alt="Printed Labels"
    className="w-full h-auto rounded-[24px]"
  />

  {/* Paragraph */}
  <p className="font-inter font-normal text-[20px]">
     Heat transfer stickers are a modern solution in the textile industry, providing a clean,
    professional look on garments without the bulk of traditional embroidery or woven labels.
    These stickers use heat and pressure to bond to fabric surfaces, allowing for high-resolution
    graphics, detailed logos, and custom designs. They're especially popular for fashion, sportswear,
    and promotional apparel due to their durability and vibrant finish. Their ease of application
    and versatility make them a preferred choice for both mass production and custom projects.
  </p>

  {/* Blockquote */}
  <blockquote className="border-r-4 border-b-4 border-[#7506B1] font-inter font-normal italic text-[20px] bg-purple-50 p-4 rounded">
    Heat transfer stickers deliver high-resolution, durable designs perfect for fashion and promotional wear.
  </blockquote>
</section>



            </div>
          </main>
    
          <Footer />
        </>
      
    
  )
}
export default Heattransfer
