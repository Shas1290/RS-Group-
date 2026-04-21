
export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-stone-200 bg-gradient-to-b from-[#fffdf7] via-white to-[#f8f7f2]">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-stretch">
          <div className="rounded-[2rem] border border-stone-200 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#d4af37]/30 bg-[#fff6d8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9f7a18]">
                RS Group
              </div>

              <div className="mt-6 mb-8 flex items-center gap-6">
                <img src="/logo.webp" alt="RS Group" className="h-20 object-contain" />
              </div>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
              Riviera Greens brings to Gwalior an exclusive living experience with premium residential plots set in a secure, gated community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://www.facebook.com/share/1BLmE95VKK/" className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-gray-500 transition-all hover:border-[#d4af37] hover:bg-white hover:text-[#d4af37]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
            
             
              <a href="https://www.instagram.com/_riviera_greens._?utm_source=qr&igsh=anRleDg0MTF0NG1z" className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-gray-500 transition-all hover:border-[#d4af37] hover:bg-white hover:text-[#d4af37]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-[#fcfbf7] shadow-[0_20px_60px_rgba(15,23,42,0.06)] p-8 md:p-10 flex flex-col justify-center">
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#9f7a18]">Contact</p>
              <h3 className="text-3xl font-bold text-slate-800">Get In Touch</h3>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 md:text-base">
                    Nainagiri Main Road, New City Centre, Near NH-44, Gwalior - 474006
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">Phone</p>
                  <p className="mt-1 text-sm text-gray-600 md:text-base">+91 91113 85883</p>
                  <p className="mt-1 text-sm text-gray-600 md:text-base">+91 91113 85886</p>
                  <p className="mt-1 text-sm text-gray-600 md:text-base">+91 91113 85887</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">Email</p>
                  <a href="mailto:info@rsgroupgwalior.com" className="mt-1 inline-block text-sm text-gray-600 transition-colors hover:text-[#d4af37] md:text-base">
                    info@rsgroupgwalior.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-center  items-center gap-2 text-sm text-gray-300">
         <a href="https://sachiva.in/"> <p>© 2026 Sachiva Web &amp; Security. </p></a>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
