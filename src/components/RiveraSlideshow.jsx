
import { useState, useEffect } from 'react';

export default function RivieraSlideshow() {
  // --- SLIDESHOW DATA ---
  // Reusing existing image descriptions and standard images
  const slides = [
    {
      id: 1,
      image: "/word.webp", // Replace with your actual building image path
      title: "Modern Living Spaces",
      description: "Modern residential apartments with prominent glass balconies, designed for optimal natural light and ventilation."
    },
    {
      id: 2,
      image: "/Entrance.webp", // Replace with your actual entrance image path
      title: "Grand Entrance",
      description: "A contemporary gated entrance to the development featuring the 'Riviera Greens' sign and extensive landscaping."
    },
    {
      id: 3,
      image: "/gardenweb.webp", // Replace with your actual entrance image path
      title: "Garden view",
      description: "Garden spaces for individuals."
    },
    {
      id: 4,
      image: "/Swingsare.webp", // Replace with your actual entrance image path
      title: "The Serenity Gardens & Wellness Plaza",
      description: "Experience a harmonious blend of nature and luxury in our thoughtfully designed outdoor spaces"
    },
    {
      id: 5,
      image: "/opengym.webp", // Replace with your actual entrance image path
      title: "Active Lifestyle Hub",
      description: "A vibrant space designed for energy and engagement."
    },
    {
      id: 6,
      image: "/upper.webp", // Replace with your actual entrance image path
      title: "The Recreation Aerial View",
      description: "A stunning overhead perspective of our master-planned recreational wing. "
    },
    {
      id: 7,
      image: "/skate.webp", // Replace with your actual entrance image path
      title: "The Open-Air Fitness Zone",
      description: "Redefine your workout routine in our premium Outdoor Gymnasium. "
    }

  ];

  // --- STATE MANAGEMENT ---
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- AUTO-PLAY LOGIC WITH FIXED SPEED & MANUAL RESET ---
  // Loops automatically at a fixed 5-second interval.
  // Resets the timer whenever manual navigation happens.
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Fixed 5-second interval

    // Cleanup the timer when the component unmounts or state changes
    return () => clearInterval(timer);
  }, [currentIndex]); // The dependency on currentIndex handles manual resets

  // --- MANUAL NAVIGATION ---
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      
      {/* 1. Image Display Area (with integrated navigation) */}
      {/* h-[500px] md:h-[600px] sets a standard height, z-0 for relative positioning */}
      <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 group z-0">
        
        {/* --- ADDED NAV BUTTONS INSIDE THE IMAGE AREA --- */}
        {/* Left: Previous Button (integrated with image, high z-index, hover effects) */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Right: Next Button (integrated with image, high z-index, hover effects) */}
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* --- RETAINED IMAGE AND TEXT CONTENT --- */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-10 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">{slide.title}</h3>
              <p className="text-gray-200 text-lg max-w-2xl leading-relaxed">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Simplified Control Panel (just dot indicators) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm flex items-center justify-center">
        {/* Simplified and Centered Dot Indicators */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#d4af37] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}