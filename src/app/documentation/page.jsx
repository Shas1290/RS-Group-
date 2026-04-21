import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const showcaseSlides = [
  {
    id: 1,
    image: "/garden_image.webp",
    title: "Project Documentation, Presented With Confidence",
    description:
      "From brochures and approvals to plans and investor resources, everything is organized to feel transparent and premium.",
  },
  {
    id: 2,
    image: "/Entrance.webp",
    title: "Visual storytelling for serious buyers",
    description:
      "Use bold project imagery and motion-led sections to make legal and planning content feel easier to explore.",
  },
  {
    id: 3,
    image: "/word.webp",
    title: "A richer resource library experience",
    description:
      "Highlight key materials, guide users into downloads, and reinforce trust with polished presentation.",
  },
  {
    id: 4,
    image: "/upper.webp",
    title: "Slideshows, previews, and faster discovery",
    description:
      "Clients can scan visual cues quickly before opening the right brochure, plan, or supporting file.",
  },
];

const featuredResources = [
  {
    title: "Riviera Greens Brochure",
    meta: "Master brochure for clients and investors",
    href: "/Riviera-Greens-Brochure.pdf",
    image: "/commercial.webp",

    size: "17.2 MB",

  },
  {
    title: "Company Presentation",
    meta: "Brand and capability overview",
    href: "/RS_Group_Brochure.pdf",
    image: "/garden_image.webp",



  },
  {
    title: "Project Gallery Preview",
    meta: "See the development before downloading docs",
    href: "/gallery",
    image: "/Garden.webp",
    size: "Live view",
  },
];

const documentCategories = [
  {
    categoryName: "Legal & Approvals",
    image: "/commercial.webp",
    intro:
      "Clear legal visibility helps buyers and investors move ahead with more confidence.",
    documents: [

      { id: 1, title: "RIVERA GREENS Registration Certificate", date: "Oct 2023", file: "/Revera_Green.pdf" },
      { id: 2, title: "Town Planning Approval", date: "Sep 2023", file: "/master.pdf" },
      { id: 3, title: "Land Title Report", date: "Aug 2023", file: "/NAINAGARH.pdf" },

     
    ],
  },
  {
    categoryName: "Project Plans",
    image: "/Residential.webp",
    intro:
      "Essential layouts and planning documents collected in one refined viewing experience.",
    documents: [

      { id: 4, title: "Master Layout Plan", date: "Nov 2023", file: "/master.pdf" },
      { id: 5, title: "Plot layout Plans", date: "Nov 2023", file: "/NAINAGARH.pdf" },

      

    ],
  },
  {
    categoryName: "Forms & Brochures",
    image: "/Open.webp",
    intro:
      "Sales collateral, brochures, and forms ready for quick access and client sharing.",
    documents: [

      { id: 6, title: "Official E-Brochure", date: "Apr 2026", file: "/Riviera-Greens-Brochure.pdf" },
      { id: 7, title: "RS Group Profile", date: "Apr 2026", file: "/profile.png" },

      

    ],
  },
];

const stats = [
  { value: "3", label: "Document categories" },
  { value: "7+", label: "Key downloadable resources" },
  { value: "24/7", label: "Always-available client access" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Documentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#0e1a2f]">
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/garden_image.webp"
            alt="Documentation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,11,21,0.84),rgba(10,29,54,0.7),rgba(4,11,21,0.92))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,170,73,0.35),transparent_28%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-8 md:pb-28 lg:pt-40"
        >
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f0cd75] backdrop-blur">
              Documentation
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              A more visual document hub for clients, investors, and project partners.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              This page now blends downloads with motion, preview imagery, and slideshow storytelling so
              documentation feels premium instead of plain.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Riviera-Greens-Brochure.pdf"
                download
                className="rounded-full bg-[#d8aa49] px-7 py-3 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
              >
                Download Brochure
              </a>
              <Link
                to="/gallery"
                className="rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/15"
              >
                View Project Gallery
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="mt-16 grid gap-4 rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl md:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-[#0a1830]/75 p-6">
                <p className="text-4xl font-semibold text-[#f0cd75]">{stat.value}</p>
                <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#b1831d]">Slideshow</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Sliding visuals that make the documentation section feel alive.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.2rem] bg-[#081325] shadow-[0_30px_90px_rgba(14,26,47,0.18)]"
          >
            <div className="relative h-[460px] md:h-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={showcaseSlides[currentSlide].id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={showcaseSlides[currentSlide].image}
                    alt={showcaseSlides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,37,0.12),rgba(8,19,37,0.82))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                      {showcaseSlides[currentSlide].title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                      {showcaseSlides[currentSlide].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev === 0 ? showcaseSlides.length - 1 : prev - 1))
                }
                className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-[#081325]"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length)}
                className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-[#081325]"
                aria-label="Next slide"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {showcaseSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`flex items-center gap-4 rounded-[1.5rem] border p-4 text-left transition-all duration-300 ${
                  currentSlide === index
                    ? "border-[#d8aa49] bg-white shadow-[0_20px_60px_rgba(14,26,47,0.1)]"
                    : "border-[#e7dcc3] bg-[#fbf8f1] hover:border-[#cfb06e]"
                }`}
              >
                <div className="relative h-20 w-24 overflow-hidden rounded-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {showcaseSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-10 bg-[#d8aa49]" : "w-3 bg-[#cbbda0]"
              }`}
            />
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#b1831d]">Walkthrough</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Explore our Project.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          <WalkthroughSlider />
        </div>
      </section>



      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#b1831d]">Featured Downloads</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Key resources with image-led previews.
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredResources.map((resource, index) => {
              const isPdf = resource.href.endsWith(".pdf");
              const cardClassName =
                "group overflow-hidden rounded-[2rem] border border-[#eadfca] bg-[#f9f4ea] shadow-[0_18px_60px_rgba(14,26,47,0.08)]";

              const content = (
                <>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(14,26,47,0.3))]" />
                  </div>
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#b1831d]">{resource.size}</p>
                    <h3 className="mt-3 text-2xl font-semibold">{resource.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{resource.meta}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0e1a2f]">
                      Open Resource
                      <ArrowIcon />
                    </span>
                  </div>
                </>
              );

              return isPdf ? (
                <motion.a
                  key={resource.title}
                  href={resource.href}
                  download
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className={cardClassName}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                >
                  <Link to={resource.href} className={cardClassName}>
                    {content}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#b1831d]">Resource Library</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            A cleaner layout for approvals, plans, forms, and brochures.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {documentCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.categoryName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.06 }}
              className="overflow-hidden rounded-[2rem] border border-[#e6dbc6] bg-white shadow-[0_18px_60px_rgba(14,26,47,0.06)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[260px]">
                  <img
                    src={category.image}
                    alt={category.categoryName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,26,47,0.15),rgba(14,26,47,0.7))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">{category.categoryName}</p>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-100">{category.intro}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid gap-4">
                    {category.documents.map((doc) => (
                      <a
                        key={doc.id}
                        href={doc.file}
                        download
                        className="group flex flex-col gap-5 rounded-[1.5rem] border border-[#eee3ce] bg-[#fcfaf5] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8aa49] md:flex-row md:items-center md:justify-between"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7ead0] text-[#b1831d]">
                            <DocIcon />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-[#0e1a2f]">{doc.title}</h3>
                            <p className="mt-1 text-sm text-slate-500">
                              Updated: {doc.date} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e1a2f]">
                          Download
                          <ArrowIcon />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

const walkThroughSteps = [
  {
    id: 1,
    image: "/registrations.png",
    title: " Registration",
    description: "Get registered and verified with our secure registration system for complete access to all project resources.",
  },
  {
    id: 2,
    image: "/map.png",
    title: " Explore Location",
    description: "View our detailed location maps and explore the project area with interactive mapping tools.",
  },
  {
    id: 3,
    image: "/newmap.png",
    title: " Project Overview",
    description: "Discover comprehensive project overviews with updated maps and detailed development information.",
  },
];

function WalkthroughSlider() {
  const [currentStep, setCurrentStep] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.2rem] bg-[#081325] shadow-[0_30px_90px_rgba(14,26,47,0.18)]"
        >
          <div className="relative min-h-[500px] md:min-h-[650px] flex items-center justify-center bg-[#0a1830] p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={walkThroughSteps[currentStep].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <button
                  onClick={() => setPreviewOpen(true)}
                  className="relative w-full h-[400px] md:h-[500px] group cursor-pointer"
                >
                  <img
                    src={walkThroughSteps[currentStep].image}
                    alt={walkThroughSteps[currentStep].title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,37,0.1),rgba(8,19,37,0.4))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur border border-white/30">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-[#081325] to-transparent">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d8aa49] text-2xl font-bold text-[#0e1a2f] flex-shrink-0">
                  {currentStep + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-3xl font-semibold text-white md:text-4xl">
                    {walkThroughSteps[currentStep].title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                    {walkThroughSteps[currentStep].description}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentStep((prev) => (prev === 0 ? walkThroughSteps.length - 1 : prev - 1))
              }
              className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-[#081325]"
              aria-label="Previous step"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => setCurrentStep((prev) => (prev + 1) % walkThroughSteps.length)}
              className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-[#081325]"
              aria-label="Next step"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {walkThroughSteps.map((step, index) => (
            <motion.button
              key={step.id}
              onClick={() => setCurrentStep(index)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                currentStep === index
                  ? "border-[#d8aa49] shadow-[0_15px_50px_rgba(216,170,73,0.2)]"
                  : "border-[#e7dcc3] hover:border-[#cfb06e]"
              }`}
            >
              <div className="relative h-40 md:h-48 bg-[#f0ebe0] flex items-center justify-center overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    currentStep === index
                      ? "bg-[linear-gradient(135deg,rgba(216,170,73,0.25),rgba(216,170,73,0.1))]"
                      : "bg-[linear-gradient(135deg,rgba(14,26,47,0.15),rgba(14,26,47,0.05))]"
                  }`}
                />
              </div>
              <div
                className={`p-4 text-left transition-colors duration-300 ${
                  currentStep === index ? "bg-[#f9f4ea]" : "bg-white"
                }`}
              >
                <h3
                  className={`font-semibold transition-colors duration-300 ${
                    currentStep === index ? "text-[#0e1a2f]" : "text-slate-700"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center gap-2"
        >
          {walkThroughSteps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentStep === index ? "w-8 bg-[#d8aa49]" : "w-2.5 bg-[#cbbda0] hover:bg-[#b1831d]"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setPreviewOpen(false)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-black md:-top-16"
                aria-label="Close preview"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative w-full h-[70vh] rounded-[1.5rem] overflow-hidden bg-black shadow-2xl">
                <img
                  src={walkThroughSteps[currentStep].image}
                  alt={walkThroughSteps[currentStep].title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  {walkThroughSteps[currentStep].title}
                </h3>
                <p className="mt-2 text-slate-300">
                  {walkThroughSteps[currentStep].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  );
}
