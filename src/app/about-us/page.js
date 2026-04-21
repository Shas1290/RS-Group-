"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "20+", label: "Years of market presence" },
  { value: "50L+", label: "Sq. ft. delivered across projects" },
  { value: "1000+", label: "Families and investors served" },
  { value: "360°", label: "Support from inquiry to possession" },
];

const pillars = [
  {
    title: "Transparent Dealing",
    description:
      "Every conversation is shaped by clarity, fair commitments, and documentation-first communication.",
  },
  {
    title: "Premium Planning",
    description:
      "We build spaces that balance architecture, open areas, accessibility, and long-term livability.",
  },
  {
    title: "Quality Execution",
    description:
      "From material choices to finishing detail, our process is designed to inspire lasting confidence.",
  },
  {
    title: "Client Care",
    description:
      "Our team stays available across site visits, approvals, updates, and after-sales guidance.",
  },
];

const highlights = [
  "Residential and commercial development expertise",
  "Customer-centric planning with modern amenities",
  "Brand built on trust, legacy, and consistent delivery",
  "Sustainable mindset for future-ready communities",
];

const journey = [
  {
    year: "Foundation",
    title: "A vision rooted in trust",
    description:
      "RS Group began with a simple purpose: create better spaces and elevate the experience of modern living.",
  },
  {
    year: "Growth",
    title: "Stronger portfolio, wider impact",
    description:
      "Over the years, our work expanded into thoughtfully planned developments serving both homeowners and investors.",
  },
  {
    year: "Today",
    title: "A brand clients return to",
    description:
      "We continue to build with confidence, combining premium design, documentation clarity, and dependable service.",
  },
];

const documents = [
  {
    title: "Company Profile",
    meta: "Overview, mission, and development capabilities",
    href: "/documentation",
  },
  {
    title: "Project Documentation",
    meta: "Approvals, plans, and legal resource library",
    href: "/documentation",
  },
  {
    title: "Download Brochure",
    meta: "Official brochure for clients and investors",
    href: "/Riviera-Greens-Brochure.pdf",
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/1BLmE95VKK/", icon: FacebookIcon },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_riviera_greens._?utm_source=qr&igsh=anRleDg0MTF0NG1z",
    icon: InstagramIcon,
  },
  { name: "YouTube", href: "#", icon: YouTubeIcon },
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutUs() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>

      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/garden_image.webp"
            alt="RS Group development"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,167,74,0.22),transparent_32%),linear-gradient(135deg,rgba(4,10,20,0.86),rgba(6,20,35,0.72),rgba(5,11,21,0.92))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-32 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-40"
        >
          <div className="max-w-3xl">
            <motion.p
              variants={item}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f0cd75] backdrop-blur"
            >
              About RS Group
            </motion.p>

            <motion.h1
              variants={item}
              className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
            >
              Building trust-driven spaces with elegance, clarity, and modern living at the center.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg"
            >
              RS Group creates premium residential and commercial destinations shaped by thoughtful
              planning, reliable execution, and relationships that continue long after possession.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#d8aa49] px-7 py-3 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
              >
                Book A Consultation
              </Link>
              <Link
                href="/documentation"
                className="rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/15"
              >
                View Documentation
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1a2f]/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f0cd75]">Why clients choose us</p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                A legacy-led brand with modern presentation, strong documentation, and client-first delivery.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4 text-sm leading-6 text-slate-200"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#d8aa49]/15 text-[#f0cd75]">
                    <SparkIcon />
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#09172b]/85 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6"
            >
              <p className="text-4xl font-semibold text-[#f0cd75]">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-14 lg:grid-cols-[1fr_1.1fr]"
        >
          <motion.div variants={item}>
            <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">Our Story</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              The name of trust, legacy, and excellence.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              RS Group started its journey with the aim of creating meaningful spaces and redefining
              how people experience living, investment, and community. Our developments are designed
              to feel aspirational, practical, and dependable at the same time.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Across the last two decades, we have continued to grow by combining world-class
              infrastructure, modern amenities, transparent communication, and a strong commitment to
              customer confidence.
            </p>
          </motion.div>

          <motion.div variants={item} className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d8aa49]/15 text-[#f0cd75]">
                  <ShieldIcon />
                </div>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#f5efe2] py-24 text-[#0d1a2d]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 md:px-8"
        >
          <motion.div variants={item} className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#a87d24]">How We Work</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              A documented and client-friendly development journey.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {journey.map((phase) => (
              <motion.div
                key={phase.title}
                variants={item}
                className="rounded-[2rem] border border-[#d8c49b] bg-white p-8 shadow-[0_18px_60px_rgba(13,26,45,0.08)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[#a87d24]">{phase.year}</p>
                <h3 className="mt-4 text-2xl font-semibold">{phase.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[1fr_0.9fr]"
        >
          <motion.div
            variants={item}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1c31]"
          >
            <div className="relative h-full min-h-[360px]">
              <Image
                src="/Garden.webp"
                alt="RS Group lifestyle experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,22,0.08),rgba(6,12,22,0.82))]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#f0cd75]">Client Experience</p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Designed to reassure buyers, impress visitors, and convert interest into trust.
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">Documentation</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Everything serious buyers look for</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Present approvals, brochures, and supporting project information in one place so clients
                feel informed and secure before making decisions.
              </p>
            </div>

            <div className="space-y-4">
              {documents.map((doc) => {
                const isPdf = doc.href.endsWith(".pdf");
                const cardClassName =
                  "group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-[#0a1830] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8aa49]/40";

                const content = (
                  <>
                    <div>
                      <p className="text-lg font-semibold text-white">{doc.title}</p>
                      <p className="mt-1 text-sm text-slate-300">{doc.meta}</p>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d8aa49]/15 text-[#f0cd75] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </>
                );

                return isPdf ? (
                  <a
                    key={doc.title}
                    href={doc.href}
                    download
                    className={cardClassName}
                  >
                    {content}
                  </a>
                ) : (
                  <Link key={doc.title} href={doc.href} className={cardClassName}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#0a1830,#112845)] p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={item}>
            <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">Connect With Us</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
              Stay connected across social channels, site visits, and project updates.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Whether your client wants quick updates, brochures, or a guided conversation, this section
              gives them more ways to engage confidently with the brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d8aa49] hover:text-[#f0cd75]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7"
          >
            <h3 className="text-2xl font-semibold text-white">Quick Contact</h3>
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <p className="flex items-start gap-3 leading-7">
                <span className="mt-1 text-[#f0cd75]">
                  <PinIcon />
                </span>
                Nainagiri Main Road, New City Centre, Near NH-44, Gwalior - 474006
              </p>
              <a
                href="tel:+919111360000"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="text-[#f0cd75]">
                  <PhoneIcon />
                </span>
                +91 91113 60000
              </a>
              <a
                href="mailto:info@rsgroupgwalior.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="text-[#f0cd75]">
                  <MailIcon />
                </span>
                info@rsgroupgwalior.com
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Gallery
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full bg-[#d8aa49] px-6 py-3 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
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

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3 5 6v5c0 5.2 3.4 8.8 7 10 3.6-1.2 7-4.8 7-10V6l-7-3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.7 1.7 3.3-3.7" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M13.5 21v-7h2.4l.4-2.9h-2.8V9.3c0-.8.2-1.4 1.4-1.4H16V5.3c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.8H9v2.9h2.3v7h2.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm8.9 1.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9A3.1 3.1 0 1 0 12 15a3.1 3.1 0 0 0 0-6.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30.7 30.7 0 0 0 2 12a30.7 30.7 0 0 0 .4 4.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30.7 30.7 0 0 0 22 12a30.7 30.7 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M6.9 8.5H4V20h2.9V8.5ZM5.4 3A1.7 1.7 0 1 0 5.4 6.5 1.7 1.7 0 0 0 5.4 3Zm5.1 5.5H7.7V20h2.8v-5.7c0-1.5.3-3 2.2-3 1.8 0 1.9 1.7 1.9 3.1V20h2.8v-6.2c0-3-1.6-4.4-3.8-4.4-1.8 0-2.5 1-3 1.7h-.1V8.5Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6-4.7 6-10a6 6 0 1 0-12 0c0 5.3 6 10 6 10Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5A2.5 2.5 0 1 0 12 8.5a2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.8 3.5h3.1l1.6 4.1-1.9 1.7a15.7 15.7 0 0 0 7.1 7.1l1.7-1.9 4.1 1.6v3.1A1.8 1.8 0 0 1 18.7 21C10 20.5 3.5 14 3 5.3A1.8 1.8 0 0 1 4.8 3.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 8 9 6 9-6" />
    </svg>
  );
}
