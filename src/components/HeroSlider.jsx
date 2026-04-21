import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000, // Time between slides in milliseconds
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img src="/Entrance.webp" alt="Luxury entrance view" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/garden_image.webp" alt="Landscape garden view" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Residential.webp" alt="Residential project view" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(4,11,21,0.78),rgba(4,11,21,0.36),rgba(4,11,21,0.82))]" />

      <div className="absolute inset-x-0 bottom-20 z-20 mx-auto w-full max-w-7xl px-4 md:bottom-24 md:px-8 lg:bottom-28">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f0cd75] backdrop-blur">
            RS Group
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
            We Craft Future Dream Homes.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Discover a more refined way to live with premium spaces, thoughtful planning, and a project experience built around trust.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d8aa49] px-7 py-3 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
          >
            Request a visit
            
          </Link>
        </div>
      </div>
    </div>
  );
}
