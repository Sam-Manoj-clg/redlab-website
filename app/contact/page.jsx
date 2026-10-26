import Link from 'next/link';
import { 
  HiArrowLongLeft, 
  HiOutlineMapPin, 
  HiOutlinePhone, 
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt
} from 'react-icons/hi2';

export const metadata = {
  title: "Contact Us | RedLab Solutions",
  description: "Get in touch with RedLab Solutions for your signage and branding needs.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen font-montserrat selection:bg-red-600 selection:text-white pb-24">
      
      {/* 1. HEADER SECTION */}
      <section className="relative w-full pt-20 md:pt-28 pb-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* BACK TO HOME BUTTON */}
          <Link 
            href="/" 
            className="relative z-50 pointer-events-auto inline-flex items-center gap-2 text-sm font-bold font-montserrat uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors mb-8 md:mb-12 group"
          >
            <HiArrowLongLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="font-black uppercase text-5xl sm:text-6xl md:text-8xl leading-[0.85] tracking-tighter text-white">
              Let's <br />
              <span className="text-red-600">Connect</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium text-gray-400 leading-relaxed">
              Ready to elevate your physical branding? Reach out to our execution specialists and let's bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT GRID SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* LEFT COLUMN: Contact Details (Takes up 5 columns on large screens) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-[2rem] group hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <HiOutlineMapPin className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-3">Headquarters</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                Shop No-17, Indira Market,<br />
                Jai Ambe Nagar, Bhayandar West,<br />
                Mumbai, Mira Bhayandar,<br />
                Maharashtra 401101
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-[2rem] group hover:border-white/30 transition-colors">
              <div className="space-y-6">
                
                {/* Phones */}
                <div className="flex items-start gap-4">
                  <HiOutlinePhone className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-xs mb-1">Phone / Mobile</p>
                    <p className="text-gray-400 font-medium">+91 9619569474</p>
                    <p className="text-gray-400 font-medium">+91 9223229474</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <HiOutlineEnvelope className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-xs mb-1">Email</p>
                    <p className="text-gray-400 font-medium break-all">redlabsolutions@gmail.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <HiOutlineClock className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-xs mb-1">Office Hours</p>
                    <p className="text-gray-400 font-medium">Mon - Sat: 9:30 AM - 6:30 PM</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Platform Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn Button */}
              <a 
                href="#https://in.linkedin.com/company/redlab-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0077b5] hover:bg-[#005e93] text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg"
              >
                <HiOutlineBriefcase className="w-7 h-7" />
                <span className="font-bold uppercase tracking-widest text-xs">LinkedIn</span>
              </a>

              {/* JustDial Button */}
              <a 
                href="#https://jsdl.in/DT-43UMIQM6YAE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ff6600] hover:bg-[#cc5200] text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg"
              >
                <HiOutlineGlobeAlt className="w-7 h-7" />
                <span className="font-bold uppercase tracking-widest text-xs">JustDial</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Map (Takes up 7 columns on large screens) */}
          <div className="lg:col-span-7 h-[500px] lg:h-auto min-h-[500px] rounded-[2rem] overflow-hidden relative border border-white/10 group shadow-2xl">
            
            {/* 
              CSS Filter trick: Using grayscale and invert to make the 
              standard Google Map look dark and blend with your UI 
            */}
            <iframe 
              src="https://maps.google.com/maps?q=Indira%20Market,%20Jai%20Ambe%20Nagar,%20Bhayandar%20West,%20Mumbai,%20Maharashtra%20401101&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full grayscale-[90%] contrast-[1.2] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Overlay instruction (fades out on hover) */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <p className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <HiOutlineMapPin className="w-4 h-4 text-red-500" />
                Interactive Map
              </p>
            </div>
            
          </div>

        </div>
      </section>

    </main>
  );
}
