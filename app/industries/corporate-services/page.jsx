import Link from 'next/link';
import { HiArrowLongLeft } from 'react-icons/hi2';

export const metadata = {
  title: "Corporate & Services | RedLab Solutions",
  description: "High-quality corporate signage, office branding, and architectural signage solutions.",
};

export default function CorporateAndServicesPage() {
  
  // Custom clip-path for the brutalist cut-corner card effect (bottom right corner cut)
  const cutCornerStyle = {
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)'
  };

  return (
    <main className="bg-[#111] min-h-screen font-montserrat selection:bg-red-600 selection:text-white pb-24">
      
      {/* 1. HERO SECTION (White Block matching the Retail & Venues design) */}
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
              Corporate <br />
              <span className="text-red-600">& Services</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-gray-600 leading-relaxed">
              Premium corporate identity packages, architectural accents, and functional wayfinding systems designed to scale your professional presence.
            </p>
          </div>

          {/* FLOATING "STICKER" PILLS */}
          <div className="hidden md:block absolute top-12 right-12 opacity-80">
             <div className="border-2 border-black px-6 py-2 rotate-[-4deg] bg-white font-bold tracking-widest uppercase text-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               3D LED Lettering
             </div>
             <div className="border-2 border-black px-6 py-2 rotate-[2deg] bg-white font-bold tracking-widest uppercase text-black ml-12 mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               Directory Systems
             </div>
             <div className="border-2 border-black px-6 py-2 rotate-[-3deg] bg-red-600 text-white font-bold tracking-widest uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               Corporate Identity
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
            ESTABLISH AUTHORITY. <span className="text-red-600">COMMAND TRUST.</span> TRANSFORM YOUR HEADQUARTERS INTO A POWERFUL BRAND LANDMARK.
          </h2>
        </div>
      </section>

      {/* 3. THE CARDS GRID (01 - 04 Layout) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 01: Financial Sectors (Red Anchor Card) */}
          <div className="bg-red-600 text-white p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black opacity-30 mb-6 tracking-tighter">01</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Financial<br/>Sectors</h3>
            
            <div className="space-y-6 text-red-50 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Banks, NBFCs, Mutual Fund houses, Insurance Companies, Stock brokers, and other financial institutions require premium outdoor and indoor signs. High-quality custom corporate signage and outdoor business signs promote your institutional footprint and project an image of absolute security and prestige.
              </p>
              <p>
                Exterior assets like dimensional letters or lighted channel letter signs brand the building exterior cleanly. Custom LED or neon installations provide crystal-clear guidance to customers navigating your drive-through services, while strategic directional signs optimize parking architecture. High-performance vinyl graphics on entry areas seamlessly exhibit your logo, corporate colors, and hours of operation.
              </p>
              <p>
                As clients step inside, intuitive directional directories lead them confidently to their destinations. From utilitarian office labeling to high-impact custom vinyl banner arrays showcasing promotional initiatives, RedLab Solutions manages the end-to-end design, manufacturing, and technical implementation across your entire branch network or central headquarters.
              </p>
            </div>
          </div>

          {/* CARD 02: Corporate Offices */}
          <div className="bg-white text-black p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black text-gray-200 mb-6 tracking-tighter">02</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Corporate<br/>Offices</h3>
            
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Your exterior business signage and indoor environmental design are the literal backbone of your corporate identity. Premium architectural elements enhance corporate headquarters, unify internal company culture, and boost client trust instantly upon arrival.
              </p>
              <p>
                When engineering exterior assets, we specialize in high-efficiency, intensely illuminated LED channel letters crafted to precisely match your signature brand typography, precise color values, and complex logo iconography. We also engineer custom backlit signs, geometric awnings for architectural entry protection, and striking monument pillars.
              </p>
              <p>
                Internally, branding continues with statement corporate logs rendered in polished metals or custom acrylics in reception zones. We balance promotional features like large lightboxes showcasing product innovations with strict utilitarian sign networks—including modular building directories, tactile room identifiers, and conference room indicators.
              </p>
            </div>
          </div>

          {/* CARD 03: Real Estate Sector */}
          <div className="bg-white text-black p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black text-gray-200 mb-6 tracking-tighter">03</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Real Estate<br/>Sector</h3>
            
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Custom-designed environmental graphics set a premium, high-value tone across major commercial or residential real estate development projects. 
              </p>
              <p>
                Illuminated post-and-panel sign systems display architectural data clearly, capturing the eyes of potential buyers, investors, and high-value lessees passing by. Rigid construction boundaries, flags, and heavy-duty hoarding designs reinforce property value long before completion.
              </p>
              <p>
                Furthermore, dynamic wayfinding paths ensure contractors, inspectors, and potential buyers travel the development safely. From complete interior environmental transformations of on-site sales offices to exterior landmark signs, RedLab functions as your full-scope partner, freeing your team to focus strictly on asset management, acquisition, and construction timelines.
              </p>
            </div>
          </div>

          {/* CARD 04: Service Sector */}
          <div className="bg-white text-black p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black text-gray-200 mb-6 tracking-tighter">04</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Service<br/>Sector</h3>
            
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Your brand name and logo design are your ultimate identifiers in a hyper-competitive landscape. Custom architectural and interior graphics establish an unmissable standard of service quality from the very first impression.
              </p>
              <p>
                Exterior installations identify physical locations clearly while driving organic, top-of-mind consumer awareness. Research proves that physical signage is directly tied to new consumer acquisition and conversion rates. We fabricate highly polished options including dimensional 3D LED signage, routed structural panels, and modern neon accents.
              </p>
              <p>
                Inside, we carry that same visual precision through into your client journey. From clean corporate logo feature walls to bright menu-boards or structural lightboxes, your physical space will actively convert passing interest into long-term customer relationships.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}