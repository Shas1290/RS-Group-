import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const PHONE_NUMBER = "+91 91113 85883";
const PHONE_LINK = "tel:+919111385883";




const EMAIL_ADDRESS = "info@rsgroupgwalior.com";

const contactCards = [
  {
    title: "Visit The Office",
    text: "Nainagiri Main Road, New City Centre, Near NH-44, Gwalior - 474006",
    href: "https://maps.google.com/?q=Nainagiri+Main+Road,+New+City+Centre,+Near+NH-44,+Gwalior,+Madhya+Pradesh+474006",
    cta: "Open in Maps",
    icon: PinIcon,
  },
  {
    title: "Call The Team",
    text: "+91 91113 85883\n+91 91113 85886\n+91 91113 85887",
    href: PHONE_LINK,
    cta: "Call now",
    icon: PhoneIcon,
  },
  {
    title: "Email Us",
    text: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
    cta: "Send email",
    icon: MailIcon,
  },
];

const quickStats = [
  { value: "24/7", label: "Inquiry access online" },
  { value: "1:1", label: "Guided consultation support" },
  { value: "Fast", label: "Callback coordination" },
];

const visitReasons = [
  "Schedule a project walkthrough",
  "Ask about residential and commercial options",
  "Request brochures, pricing, and documentation",
  "Speak directly with the sales team",
];

const formIntroPoints = [
  "Preferred callback for site visit planning",
  "Documentation and brochure support",
  "Project recommendations based on your requirement",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "real-estate",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });

  useEffect(() => {
    if (!status.text) return undefined;

    const timeout = setTimeout(() => {
      setStatus({ type: "", text: "" });
    }, 5000);

    return () => clearTimeout(timeout);
  }, [status]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (status.type === "error") {
      setStatus({ type: "", text: "" });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", text: "Please fill in your name, email, and message." });
      return;
    }

    const subjectLabels = {
      "real-estate": "Real Estate Inquiry",
      commercial: "Commercial Property Inquiry",
      residential: "Residential Villa Inquiry",
      general: "General Inquiry",
    };

    const emailSubject = subjectLabels[formData.subject] ?? "RS Group Inquiry";
    const emailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${emailSubject}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setStatus({ type: "success", text: "Your email draft is ready to send." });
    setFormData({
      name: "",
      email: "",
      subject: "real-estate",
      message: "",
    });
  }

  async function handleCallNow() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PHONE_NUMBER);
      }
    } catch {
      // Ignore clipboard errors and still open the dialer.
    }

    window.location.href = PHONE_LINK;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/garden_image.webp"
            alt="RS Group contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,11,21,0.9),rgba(6,22,38,0.72),rgba(4,11,21,0.94))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,170,73,0.34),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-32 md:px-8 lg:pt-40"
        >
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f0cd75] backdrop-blur">
                Contact RS Group
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                A warmer, more premium place to start the conversation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                Reach out for site visits, project details, brochure support, or a direct conversation
                with the team. This page is designed to feel clear, elevated, and easy to act on.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={handleCallNow}
                  className="rounded-full bg-[#d8aa49] px-7 py-3 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
                >
                  Call Now
                </button>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/15"
                >
                  Email Our Team
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.75 }}
              className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1830]/80 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-[#f0cd75]">Why contact us here</p>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-white md:text-3xl">
                  A focused inquiry experience built around trust, speed, and clarity.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {quickStats.map((stat) => (
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

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid gap-5 lg:grid-cols-3"
        >
          {contactCards.map(({ title, text, href, cta, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-[2rem] border border-white/10 bg-[#09172b]/92 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d8aa49]/50"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d8aa49]/12 text-[#f0cd75]">
                <Icon />
              </span>
              <h2 className="mt-6 text-2xl font-semibold text-white">{title}</h2>

              {title === "Call The Team" ? (
                <div className="mt-3 space-y-2">
                  {text.split("\n").map((phone, idx) => (
                    <p key={idx} className="text-sm leading-7 text-slate-300">
                      {phone}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              )}
              
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f0cd75]">
                {cta}
                <ArrowIcon />
              </span>
            </a>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#f5efe2] py-24 text-[#0d1a2d]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#a87d24]">Plan Your Visit</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Everything a serious buyer or investor may want before the first meeting.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Whether you need project context, a guided walkthrough, or direct help understanding
                the next step, this section keeps the contact journey polished and practical.
              </p>

              <div className="mt-8 grid gap-4">
                {visitReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-[#dbcba7] bg-white p-5 shadow-[0_14px_40px_rgba(13,26,45,0.06)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6ead0] text-[#a87d24]">
                      <CheckIcon />
                    </span>
                    <p className="text-sm leading-7 text-slate-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-[#dbcba7] bg-white shadow-[0_18px_60px_rgba(13,26,45,0.08)] sm:col-span-2">
                <div className="relative h-72">
                  <img
                    src="/commercial.webp"
                    alt="RS Group consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.08),rgba(7,17,31,0.78))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#f0cd75]">Personal Consultation</p>
                    <p className="mt-3 max-w-lg text-2xl font-semibold leading-snug">
                      Share what you are exploring and let the team guide the conversation with more clarity.
                    </p>
                  </div>
                </div>
              </div>

              {formIntroPoints.map((point) => (
                <div
                  key={point}
                  className="flex flex-col items-center justify-center rounded-[1.75rem] border border-[#dbcba7] bg-white p-6 text-center shadow-[0_18px_50px_rgba(13,26,45,0.06)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7ead0] text-[#a87d24]">
                    <SparkIcon />
                  </span>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="grid overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,#081325,#0d213b)] shadow-[0_28px_90px_rgba(0,0,0,0.28)] lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="p-8 md:p-10 lg:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">Send An Inquiry</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Let us know what you need and we will help you move forward.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Use the form for a callback, project question, brochure request, or site visit planning.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <FieldShell icon={<UserIcon />}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name*"
                    className="w-full bg-transparent text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </FieldShell>

                <FieldShell icon={<MailIcon />}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email*"
                    className="w-full bg-transparent text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </FieldShell>
              </div>

              <FieldShell icon={<TopicIcon />}>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full appearance-none bg-transparent text-white focus:outline-none"
                >
                  <option value="real-estate" className="text-slate-900">
                    Real Estate
                  </option>
                  <option value="commercial" className="text-slate-900">
                    Commercial Property
                  </option>
                  <option value="residential" className="text-slate-900">
                    Residential Villa
                  </option>
                  <option value="general" className="text-slate-900">
                    General Inquiry
                  </option>
                </select>
              </FieldShell>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] px-5 py-4">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-slate-400">
                    <MessageIcon />
                  </span>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest, site visit plan, or project requirement*"
                    className="w-full resize-none bg-transparent text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="rounded-full bg-[#d8aa49] px-8 py-4 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
                >
                  Send Request
                </button>
                <p className="text-sm text-slate-400">
                  Prefer a direct route? Call or email us anytime.
                </p>
              </div>

              {status.text && (
                <div
                  className={`rounded-[1.25rem] border px-5 py-4 text-sm font-medium ${
                    status.type === "error"
                      ? "border-red-400/30 bg-red-500/10 text-red-200"
                      : "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                  }`}
                >
                  {status.text}
                </div>
              )}
            </form>
          </div>

          <div className="relative min-h-[520px] border-t border-white/10 lg:border-l lg:border-t-0">
            <iframe
              src="https://maps.google.com/maps?q=Nainagiri+Main+Road,+New+City+Centre,+Near+NH-44,+Gwalior,+Madhya+Pradesh+474006&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.12]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(7,17,31,0.94))] p-6 md:p-8">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-[#f0cd75]">Office Location</p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Nainagiri Main Road, New City Centre, Near NH-44, Gwalior - 474006
                </p>
                <a
                  href="https://maps.google.com/?q=Nainagiri+Main+Road,+New+City+Centre,+Near+NH-44,+Gwalior,+Madhya+Pradesh+474006"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f0cd75]"
                >
                  Get directions
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#f0cd75]">Next Steps</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
              Continue exploring before you reach out.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              If you want a clearer picture first, you can review documentation or browse project
              visuals before booking a conversation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <Link
              to="/documentation"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Documentation
            </Link>
            <Link
              to="/gallery"
              className="rounded-full bg-[#d8aa49] px-6 py-3 text-sm font-semibold text-[#07111f] transition-transform duration-300 hover:-translate-y-1"
            >
              Explore Gallery
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

function FieldShell({ children, icon }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-4">
      <div className="flex items-center gap-4">
        <span className="text-slate-400">{icon}</span>
        {children}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4.5 4.5L19 7" />
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

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
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
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
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

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.1a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

function TopicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 6.5h10M7 12h10M7 17.5h6" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4Z"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18.5 3.5 20V6.5A1.5 1.5 0 0 1 5 5h14A1.5 1.5 0 0 1 20.5 6.5v9A1.5 1.5 0 0 1 19 17H7Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 13h5" />
    </svg>
  );
}
