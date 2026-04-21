import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import HomeAboutSection from '@/components/HomeAboutSection';
import RiveraSlideshow from '@/components/RiveraSlideshow';
import Footer from '@/components/Footer'

const homeHighlights = [
  { title: 'Welcome', src: '/Riviera-Greens-Brochure-02.png', alt: 'Welcome to RS Group' },
  { title: 'About RS', src: '/Riviera-Greens-Brochure-05.png', alt: 'About RS Group' },
  { title: 'Amenities', src: '/Riviera-Greens-Brochure-06.png', alt: 'Amenities at the property' },
  { title: 'Infrastructure', src: '/Riviera-Greens-Brochure-08.png', alt: 'Infrastructure overview' },
  { title: 'Location', src: '/Riviera-Greens-Brochure-09.png', alt: 'Project location highlights' },
  { title: 'Sustainability', src: '/Riviera-Greens-Brochure-11.png', alt: 'Sustainability initiatives' },
  { title: 'Plot', src: '/Riviera-Greens-Brochure-12.png', alt: 'Plot options and layouts' },
  { title: 'Investment', src: '/Riviera-Greens-Brochure-13.png', alt: 'Investment opportunity overview' },
];

export default function Home() {                
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const handlePlayVideo1 = () => {
    if (video2Ref.current) {
      video2Ref.current.pause();
    }
  };

  const handlePlayVideo2 = () => {
    if (video1Ref.current) {
      video1Ref.current.pause();
    }
  };

  useEffect(() => {
    if (!selectedHighlight) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedHighlight(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedHighlight]);

  return (
    <>
    <main className="relative w-full min-h-screen bg-gray-50">
      
      {/* 2. Place the Navbar at the top with a high z-index (z-50) */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
<div className="relative w-full h-screen">
 <div className="absolute inset-0 z-0">
        <HeroSlider /> 
      </div>

</div>
      {/* Background Image Slider (z-0) */}
      {/* Main Content (z-10) */}
    <HomeAboutSection />


    <section className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* Header Area (Split Title & Button) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          
          {/* Left Side: Title & Description */}
          <div className="max-w-2xl">
            {/* Kicker with Top Line */}
            <div className="flex flex-col mb-4">
              <div className="w-12 h-[2px] bg-gray-400 mb-2"></div>
              <span className="text-gray-600 text-sm tracking-wider uppercase">Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Why Choose RS Group?
            </h2>
            <p className="text-gray-600 text-lg">
              We ensure hassle-free property investments with premium quality developments and transparent dealings.
            </p>
          </div>

          {/* Right Side: Button */}
          <button className="bg-[#b8861b] hover:bg-[#c99626] text-white font-medium px-8 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl flex-shrink-0 shiny-button">
            Browse All Services
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Safe & Trustworthy */}
          <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center mb-6 text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {/* Text */}
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Safe & Trustworthy</h3>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              Legal clarity, strong construction, and high-value properties for long-term growth.
            </p>
            {/* Bottom Image Placeholder (Visible in your screenshot) */}
            <div className="image-shine-wrapper w-full h-40 rounded-2xl overflow-hidden mt-auto bg-gray-100">
               {/* Replace src with your actual image path */}
               <img src="/family.png" alt="Trustworthy" className="w-full h-full object-cover  transition-all duration-500" />
            </div>
          </div>

          {/* Card 2: Zero Hidden Charges */}
          <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center mb-6 text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {/* Text */}
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Zero Hidden Charges</h3>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              No unexpected costs—what you see is what you get.
            </p>
            {/* Bottom Image Placeholder */}
            <div className="image-shine-wrapper w-full h-40 rounded-2xl overflow-hidden mt-auto bg-gray-100">
               <img src="/people.png" alt="Transparent" className="w-full h-full object-cover transition-all duration-500" />
            </div>
          </div>

          {/* Card 3: Dedicated Support */}
          <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center mb-6 text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            {/* Text */}
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Dedicated Support</h3>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              All-inclusive real estate services to facilitate the easy management of your properties.
            </p>
            {/* Bottom Image Placeholder */}
            <div className="image-shine-wrapper w-full h-40 rounded-2xl overflow-hidden mt-auto bg-gray-100">
               <img src="/peep.png" alt="Support" className="w-full h-full object-cover  transition-all duration-500" />
            </div>
          </div>

        </div>
      </section>

      {/* --- NEW: APARTMENT FACILITY SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Image */}
          {/* Using a relative wrapper with a fixed height on desktop for a clean look */}
          <div className="relative w-full h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-xl group">
            <img 
              src="/Garden.webp" // Replace with your actual image path (e.g., /court.jpg)
              alt="Riviera Greens Facility" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Optional subtle overlay to make it look premium */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="flex flex-col justify-center">
            
            {/* Kicker with Top Line */}
            <div className="mb-6">
              <div className="w-12 h-[2px] bg-gray-400 mb-2"></div>
              <span className="text-gray-500 text-sm tracking-widest uppercase font-medium">Apartment Facility</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-slate-800 mb-6 leading-[1.1]">
              Riviera Greens – Your Gateway to Luxury
            </h2>

            {/* Subtitle / Description */}
            <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-lg">
              Experience a lifestyle of elegance, comfort, and modernity at Riviera Greens Township.
            </p>

            {/* Numbered Features Grid */}
            
                  {/* Numbered Features Grid */}
            {/* Removed the bottom border from the main grid, added larger gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              
              {/* Feature 01 */}
              <div className="flex gap-6">
                {/* Left: Number & Vertical Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-gray-600 font-bold text-sm">01</span>
                  </div>
                  {/* The stretching vertical line */}
                  <div className="w-[1px] bg-gray-200 flex-grow mt-2"></div>
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 pb-10">
                  <h4 className="text-xl font-bold text-[#1e293b] pb-4 border-b border-gray-200">
                    Certified Planning
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">
                    Designed for optimal space utilization and comfort.
                  </p>
                </div>
              </div>

              {/* Feature 02 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-gray-600 font-bold text-sm">02</span>
                  </div>
                  <div className="w-[1px] bg-gray-200 flex-grow mt-2"></div>
                </div>
                <div className="flex-1 pb-10">
                  <h4 className="text-xl font-bold text-[#1e293b] pb-4 border-b border-gray-200">
                    Masterfully Planned Community
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">
                    Thoughtfully designed for comfort, convenience, and elegance.
                  </p>
                </div>
              </div>

              {/* Feature 03 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-gray-600 font-bold text-sm">03</span>
                  </div>
                  <div className="w-[1px] bg-gray-200 flex-grow mt-2"></div>
                </div>
                <div className="flex-1 pb-10">
                  <h4 className="text-xl font-bold text-[#1e293b] pb-4 border-b border-gray-200">
                    High-Quality Construction
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">
                    Built with precision, durability, and style in mind.
                  </p>
                </div>
              </div>

              {/* Feature 04 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-gray-600 font-bold text-sm">04</span>
                  </div>
                  <div className="w-[1px] bg-gray-200 flex-grow mt-2"></div>
                </div>
                <div className="flex-1 pb-10">
                  <h4 className="text-xl font-bold text-[#1e293b] pb-4 border-b border-gray-200">
                    Sustainable Living
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">
                    Eco-friendly spaces designed to support a healthier lifestyle.
                  </p>
                </div>
              </div>

            </div>
</div>
</div>





              
      
       </section>

       {/* --- NEW: RIVIERA GREENS SLIDESHOW SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Explore Riviera Greens
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a closer look at the premium amenities and stunning architecture that make our community unique.
          </p>
        </div>
        
        {/* Here is where the new component goes! */}
        <RiveraSlideshow />
        
      </section>

      {/* --- NEW: VIDEO WALKTHROUGHS SECTION --- */}
      <section className="w-full bg-slate-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center mb-4">
                <div className="w-12 h-[2px] bg-[#b8861b] mb-2"></div>
                <span className="text-gray-500 text-sm tracking-widest uppercase font-medium">Virtual Tours</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Video Walkthroughs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience our properties through immersive video tours. Take a closer look at the design, layout, and amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="w-full aspect-video bg-gray-900 relative">
                <video 
                  ref={video1Ref}
                  onPlay={handlePlayVideo1}
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                >
                  <source src="https://36brokinghub.com/builderprojects/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3  transition-colors duration-300">Riviera Greens Walkthrough</h3>
                <p className="text-gray-600 leading-relaxed">
                  Take a detailed virtual tour of Riviera Greens. Experience the elegant design, premium lifestyle, and lush surroundings from the comfort of your home.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="w-full aspect-video bg-gray-900 relative">
                <video 
                  ref={video2Ref}
                  onPlay={handlePlayVideo2}
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                >
                  <source src="https://36brokinghub.com/builderprojects/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3  transition-colors duration-300">Project Walkthrough</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore the complete project layout, thoughtful amenities, and masterfully planned community infrastructure in this comprehensive walkthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Discover More With RS Group
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Browse the key highlights that define our vision, planning, and long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {homeHighlights.map((item) => (
            <button
              type="button"
              key={item.title}
              onClick={() => setSelectedHighlight(item)}
              className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="relative h-64 w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-6 py-5">
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedHighlight && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/85 px-4 py-6 sm:py-8"
          onClick={() => setSelectedHighlight(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedHighlight(null)}
            className="fixed right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white shadow-lg transition-colors hover:bg-black sm:right-6 sm:top-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mx-auto flex min-h-full w-full max-w-6xl items-center justify-center">
            <div
              className="relative flex h-[calc(100vh-4.5rem)] w-full flex-col rounded-[2rem] bg-white p-3 shadow-2xl sm:h-[calc(100vh-6rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-[1.5rem] bg-stone-100">
                <img
                  src={selectedHighlight.src}
                  alt={selectedHighlight.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="px-4 pb-2 pt-5 sm:px-6">
                <h3 className="text-2xl font-bold text-slate-800">{selectedHighlight.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

    </main>
    </>
    
  );
  }
