import { Link } from 'react-router-dom';

export default function HomeAboutSection() {
  const features = [
    "Multi-Family Units",
    "100% Satisfaction Guarantee",
    "Prime Locations in Gwalior",
    "Commitment to Quality & Transparency",
    "Sustainable and Modern Developments"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: Image Collage --- */}
          <div className="relative w-full h-[500px] sm:h-[600px]">
            
            {/* Main Center Image */}
            <div className="absolute top-10 bottom-10 left-10 right-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="/Upperviews.png" // Replace with your modern curved house image
                alt="Modern Real Estate" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-48 h-56 md:w-64 md:h-72 border-[8px] border-white rounded-[2.5rem] rounded-bl-none overflow-hidden shadow-lg z-10 bg-gray-200">
              <img 
                src="/commercial.webp" // Replace with your tall building image
                alt="Commercial Building" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 border-[8px] border-white rounded-[2.5rem] rounded-tr-none overflow-hidden shadow-lg z-10 bg-gray-200">
              <img 
                src="/skatingring.png" // Replace with your minimalist white building
                alt="Residential Unit" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* --- RIGHT SIDE: Text Content --- */}
          <div className="flex flex-col pt-8 lg:pt-0">
            
            {/* Small Heading */}
            <div className="mb-4">
              <div className="w-12 h-[2px] bg-gray-900 mb-2"></div>
              <h4 className="text-gray-600 uppercase tracking-widest text-sm font-semibold">About Us</h4>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6 leading-tight">
              Welcome to Riviera Greens
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Your trusted real estate partner in Gwalior, bringing excellence in property development and customer satisfaction. With years of experience, Riviera Greens is dedicated to crafting world-class residential and commercial spaces that redefine urban living.
            </p>

            {/* Bullet List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <div>
              <Link 
                to="/about-us" 
                className="inline-flex items-center gap-2 bg-[#fde047] hover:bg-[#facc15] text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                More About Riviera Greens
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
