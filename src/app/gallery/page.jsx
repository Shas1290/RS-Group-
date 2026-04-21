import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    id: 1,
    src: "/Entrance.webp",
    alt: "Riviera Greens entrance gate",
    title: "Grand Entrance",
    category: "Arrival Experience",
    span: "lg:col-span-2",
    height: "h-[360px] md:h-[420px]",
  },
  {
    id: 2,
    src: "/Garden.webp",
    alt: "Landscape garden view",
    title: "Curated Green Spaces",
    category: "Landscape",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 3,
    src: "/Lux.jpeg",
    alt: "Luxury villa perspective",
    title: "Luxury Living",
    category: "Residences",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 4,
    src: "/Basket.webp",
    alt: "Recreational community zone",
    title: "Activity Corners",
    category: "Amenities",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 10,
    src: "/Residential.webp",
    alt: "Residential streetscape inside the project",
    title: "Signature Residences",
    category: "Residences",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 11,
    src: "/Amenities.png",
    alt: "Premium amenities and shared spaces",
    title: "Amenity Experience",
    category: "Amenities",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 5,
    src: "/Open.webp",
    alt: "Open gym and fitness area",
    title: "Open-Air Fitness",
    category: "Wellness",
    span: "lg:col-span-2",
    height: "h-[360px] md:h-[430px]",
  },
  {
    id: 6,
    src: "/Swings.webp",
    alt: "Children play area with swings",
    title: "Family-Friendly Spaces",
    category: "Lifestyle",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 7,
    src: "/Park.webp",
    alt: "Park zone within the project",
    title: "Parkside Calm",
    category: "Open Spaces",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 8,
    src: "/Hospital.webp",
    alt: "Nearby healthcare access",
    title: "Connected Convenience",
    category: "Location Value",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 12,
    src: "/garden1.png",
    alt: "Green open spaces within the community",
    title: "Breathing Green Edges",
    category: "Open Spaces",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 13,
    src: "/location.png",
    alt: "Essential destinations near the project",
    title: "Local Value Around You",
    category: "Location Value",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 14,
    src: "/upper.webp",
    alt: "Wider roadway and approach connectivity",
    title: "Fast Urban Access",
    category: "Infrastructure",
    height: "h-[320px] md:h-[360px]",
  },
  {
    id: 9,
    src: "/Linkin.webp",
    alt: "Connected road and urban access",
    title: "City Connectivity",
    category: "Infrastructure",
    span: "lg:col-span-2",
    height: "h-[360px] md:h-[430px]",
  },
];

const stats = [
  { value: "14", label: "Featured visual moments" },
  { value: "50L+", label: "Sq. ft. legacy referenced across the brand" },
  { value: "Premium", label: "Presentation style for serious buyers" },
];

const highlights = [
  "Landscape-led planning that feels open and aspirational",
  "Amenities designed for comfort, family life, and recreation",
  "Architecture and arrival sequences that strengthen first impressions",
  "Visual cues that help investors understand project character quickly",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Property.jpg"
            alt="RS Group gallery hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,11,21,0.88),rgba(8,25,43,0.72),rgba(4,11,21,0.94))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,170,73,0.28),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-8 lg:pt-40"
        >
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f0cd75] backdrop-blur">
                Visual Gallery
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                A more cinematic window into Riviera Greens and the RS Group experience.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                Explore signature moments across entry experience, open spaces, amenities, and the
                lifestyle atmosphere that defines the project. This page is built to feel premium,
                immersive, and easy to browse.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="rounded-full bg-[#d8aa49] px-7 py-3 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
                >
                  Book A Visit
                </Link>
                <Link
                  to="/documentation"
                  className="rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/15"
                >
                  View Documentation
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.75 }}
              className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1830]/80 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-[#f0cd75]">Gallery Perspective</p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                  A visual story shaped around trust, aspiration, and the feel of the destination.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-3xl font-semibold text-[#f0cd75]">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#09172b]/88 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">What These Visuals Show</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Design cues, landscape atmosphere, and the character of the project.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#d8aa49]/12 text-[#f0cd75]">
                  <SparkIcon />
                </span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">Curated Frames</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Browse the project through larger, more immersive compositions.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Tap any image to open it in a larger preview. The layout alternates scale and rhythm so
            the page feels more like a visual showcase than a simple gallery grid.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.button
              type="button"
              key={image.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1930] text-left shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 ${image.span ?? ""}`}
            >
              <div className={`relative ${image.height}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,22,0.02),rgba(6,12,22,0.82))]" />
                <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur">
                    {image.category}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">{image.title}</h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="bg-[#f5efe2] py-24 text-[#0d1a2d]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="grid gap-10 lg:grid-cols-[1fr_0.92fr]"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[#dccba3] bg-white shadow-[0_18px_60px_rgba(13,26,45,0.08)]">
              <div className="relative h-[420px]">
                <img
                  src="/Garden.webp"
                  alt="Riviera Greens lifestyle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.1),rgba(7,17,31,0.76))]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#f0cd75]">Project Atmosphere</p>
                  <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
                    Visual storytelling that helps visitors feel the destination before they arrive.
                  </h2>
                </div>
              </div>

              <div className="border-t border-[#e6d8b6] bg-[#fbf7ee] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a87d24]">
                  What This Atmosphere Reflects
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Riviera Greens is imagined as more than a plotted development. The visual language
                  of the project highlights calm open areas, lifestyle-led planning, and the sense of
                  arrival that today&apos;s families and investors expect from a premium destination.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-[#dccba3] bg-white p-4">
                    <p className="text-base font-semibold text-[#0d1a2d]">Open and breathable</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Green edges, wider views, and balanced planning create a lighter everyday feel.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-[#dccba3] bg-white p-4">
                    <p className="text-base font-semibold text-[#0d1a2d]">Premium and welcoming</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Every frame is meant to communicate trust, comfort, and long-term lifestyle value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#a87d24]">Explore Further</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                See the visuals, then move into the next conversation with confidence.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                After browsing the gallery, clients can move directly into documentation, planning, or
                a guided site visit without friction.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.5rem] border border-[#dccba3] bg-white p-5 shadow-[0_14px_40px_rgba(13,26,45,0.06)]">
                  <p className="text-lg font-semibold">Documentation access</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Review brochures, approvals, and project materials in one polished destination.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#dccba3] bg-white p-5 shadow-[0_14px_40px_rgba(13,26,45,0.06)]">
                  <p className="text-lg font-semibold">Direct contact</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Turn gallery interest into a site visit, callback, or conversation with the team.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="rounded-full bg-[#0d1a2d] px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/documentation"
                  className="rounded-full border border-[#c8b68d] px-7 py-3 text-sm font-semibold text-[#0d1a2d] transition-colors duration-300 hover:bg-white"
                >
                  Open Documentation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/88 px-4 py-6 sm:py-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
            className="fixed right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white shadow-lg transition-colors hover:bg-black sm:right-6 sm:top-6"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mx-auto flex min-h-full w-full max-w-6xl items-center justify-center">
            <div
              className="relative flex h-[calc(100vh-4.5rem)] w-full flex-col rounded-[2rem] border border-white/10 bg-[#09172b] p-3 shadow-2xl sm:h-[calc(100vh-6rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-[1.5rem] bg-[#0b1930]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="px-4 pb-2 pt-5 sm:px-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f0cd75]">{selectedImage.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
    </svg>
  );
}
