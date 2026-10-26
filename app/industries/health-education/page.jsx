import Link from 'next/link';
import { HiArrowLongLeft } from 'react-icons/hi2';

export const metadata = {
  title: "Health & Education | RedLab Solutions",
  description: "Essential wayfinding and signage solutions for hospitals, schools, and university campuses.",
};

export default function HealthAndEducationPage() {
  
  // Custom clip-path for the brutalist cut-corner card effect (bottom right corner cut)
  const cutCornerStyle = {
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)'
  };

  return (
    <main className="bg-[#111] min-h-screen font-montserrat selection:bg-red-600 selection:text-white pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-white pt-20 md:pt-28 pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 rounded-b-[3rem] z-10">
        <div className="max-w-7xl mx-auto relative">
          
         {/* BACK TO HOME BUTTON */}
          <Link 
            href="/" 
            className="relative z-50 pointer-events-auto inline-flex items-center gap-2 text-sm font-bold font-montserrat uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors mb-8 md:mb-12 group"
          >
            <HiArrowLongLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* MASSIVE HEADER */}
          <div className="relative z-10">
            <h1 className="font-black uppercase text-6xl sm:text-7xl md:text-[110px] leading-[0.85] tracking-tighter text-black">
              Health <br />
              <span className="text-red-600">& Education</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-gray-600 leading-relaxed">
              Clear, accessible, and highly visible signage systems designed for critical campuses where navigation and clarity matter most.
            </p>
          </div>

          {/* FLOATING "STICKER" PILLS */}
          <div className="hidden md:block absolute top-12 right-12 opacity-80">
             <div className="border-2 border-black px-6 py-2 rotate-[-4deg] bg-white font-bold tracking-widest uppercase text-sm mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               Wayfinding Systems
             </div>
             <div className="border-2 border-black px-6 py-2 rotate-[2deg] bg-white font-bold tracking-widest uppercase text-sm ml-12 mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               Campus Directories
             </div>
             <div className="border-2 border-black px-6 py-2 rotate-[-3deg] bg-red-600 text-white font-bold tracking-widest uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               Electronic Boards
             </div>
          </div>

        </div>
      </section>

      {/* 2. MIDDLE TRANSITION TEXT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          
          {/* Red Starburst Decoration */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-600" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'spin 20s linear infinite' }}></div>
          
          <h2 className="text-white font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight mt-12">
            GUIDE WITH CLARITY. <span className="text-red-600">EMPOWER WITH INFORMATION.</span> SEAMLESS NAVIGATION FOR CRITICAL ENVIRONMENTS.
          </h2>
        </div>
      </section>

      {/* 3. THE CARDS GRID (01 - 02 Layout) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 01: Healthcare Sector (Red Anchor Card) */}
          <div className="bg-red-600 text-white p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black opacity-30 mb-6 tracking-tighter">01</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Healthcare<br/>Sector</h3>
            
            <div className="space-y-6 text-red-50 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Outdoor signs and indoor signage are essential elements to the image and utility of all kinds of healthcare facilities. Whether a multispecialty hospital and hospital campus or a single medical office building, quality signage is an absolute necessity, and RedLab is your one-source provider for the design, manufacture, and installation of all your visual assets.
              </p>
              <p>
                Pylon signs provide high-profile branding for a healthcare campus and help patients locate your facility with zero friction. Including directory information within these signs provides crucial help for people looking for a specific department, provider, or entrance. Entry doors and windows become more welcoming with the application of custom vinyl signage and graphics.
              </p>
              <p>
                Indoor directory signs and wayfinding signage assure patients easily reach their destinations during highly stressful times, and permanent indoor signs clearly label departments, offices, and rooms. Whatever facility signage you require, we can work with you to provide a uniform signage package for a single campus or across your entire group of institutions.
              </p>
            </div>
          </div>

          {/* CARD 02: Educational Sector */}
          <div className="bg-white text-black p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black text-gray-200 mb-6 tracking-tighter">02</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Educational<br/>Sector</h3>
            
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Public and private school buildings, campuses, colleges, and universities all require robust, highly durable outdoor and indoor signage. The entrances to an educational campus require custom-designed monument signs or pylon signs, often featuring dynamic electronic message centers or back-lit panels to broadcast important updates.
              </p>
              <p>
                Education buildings themselves may feature exterior signs with back-lit dimensional letters or other architectural elements. Parking lots require strict organization, including directional signs and custom labels for staff and student parking areas. 
              </p>
              <p>
                Interior halls need flawless directional signage, labeling for classrooms, faculty office areas, and student common spaces. Gyms and sports arenas require specialized room labels, lighted electronic message centers, and high-visibility scoreboards. Whether your responsibility is for a single building, a sprawling university campus, or all the buildings across a school district, we are your definitive source for manufacturing signs that meet all your needs.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}