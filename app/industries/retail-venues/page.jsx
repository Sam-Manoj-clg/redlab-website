import Link from 'next/link';
import { HiArrowLongLeft } from 'react-icons/hi2';

export const metadata = {
  title: "Retail & Venues | RedLab Solutions",
  description: "Exterior and interior signage solutions for retail and event spaces.",
};

export default function RetailAndVenuesPage() {
  
  // Custom clip-path for the brutalist cut-corner card effect (bottom right corner cut)
  const cutCornerStyle = {
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)'
  };

  return (
    <main className="bg-[#111] min-h-screen font-montserrat selection:bg-red-600 selection:text-white pb-24">
      
      {/* 1. HERO SECTION (White Block mimicking the top of the reference image) */}
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
            <h1 className="font-black uppercase text-6xl sm:text-7xl md:text-[120px] leading-[0.85] tracking-tighter text-black">
              Retail <br />
              & Venues
            </h1>
            <p className="mt-6 max-w-xl text-black font-medium text-blleading-relaxed">
              Custom fabrication and installation of distinctive signage and branding elements that demand attention and drive customer engagement.
            </p>
          </div>

          {/* FLOATING "STICKER" PILLS (Replicating the angled boxes from the reference) */}
          <div className="hidden md:block absolute top-12 right-12 opacity-80">
             <div className="border-2 border-black px-6 py-2 rotate-[-5deg] bg-white font-bold tracking-widest uppercase text-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               Exterior Signage
             </div>
             <div className="border-2 border-black px-6 py-2 rotate-[3deg] bg-white font-bold tracking-widest uppercase text-black ml-12 mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               LED Boards
             </div>
             <div className="border-2 border-black px-6 py-2 rotate-[-2deg] bg-red-600 text-black font-bold tracking-widest uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
               Vinyl Graphics
             </div>
          </div>

        </div>
      </section>

      {/* 2. MIDDLE TRANSITION TEXT (The bold statement on black background) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          
          {/* Red Starburst Decoration */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-600" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'spin 20s linear infinite' }}></div>
          
          <h2 className="text-white font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight mt-12">
            GREAT BRANDS DON'T JUST BLEND IN. <span className="text-red-600">THEY DOMINATE</span> THEIR PHYSICAL SPACE WITH UNMISSABLE PRESENCE.
          </h2>
        </div>
      </section>

      {/* 3. THE CARDS GRID (Replicating the 01, 02, 03, 04 layout) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 01: Convenience Stores (Red Accent Card mimicking the lime green one) */}
          <div className="bg-red-600 text-white p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black opacity-30 mb-6 tracking-tighter">01</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Convenience<br/>Stores</h3>
            
            <div className="space-y-6 text-red-50 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Exterior business signs and indoor signage are important to the success of the business. A brightly lit pylon sign / Glow Sign Board / LED Board with your business brand makes customers aware of your location from long distances.
              </p>
              <p>
                Vinyl graphics on your convenience store's visible areas like doors and windows create awareness of products and services and announce special promotions. Inside your convenience store, neon or LED lighted signs call attention to major areas, such as beverages or hot foods, and colorful digitally printed custom vinyl banners promote special products or events.
              </p>
              <p>
                We at Redlab Solutions, Fabricate and install custom signs and branding elements to help your dealer locations catch the attention of your customers. If your Retail counter is part of a chain or franchise business, we will manufacture, install, and service your signs and match all company color and graphic elements distinctive to your business.
              </p>
            </div>
          </div>

          {/* CARD 02: Retail Counters */}
          <div className="bg-white text-black p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black text-gray-200 mb-6 tracking-tighter">02</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Retail<br/>Counters</h3>
            
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Retail Counters are an extension of the larger business organization and a customer experience center and therefore its very critical for the business houses to engage its customers at the Retail counters.
              </p>
              <p>
                Exterior signage is a must for retail counters, with lighted individual sign panels; your pylon sign is easily modified to include additional businesses. And your sign attracts even more attention with the addition of an LED electronic sign board with digital capability to draw customers to special events.
              </p>
              <p>
                A custom monument sign at entrances, large channel letter signs, custom LED neon signs to label buildings, way finding signs through parking lots, and a shopping center directory sign provides guidance for customers. Attract customers with custom exterior business signs featuring distinctive channel lettering with bright neon accents. Feature signature products with vinyl window graphics and custom banners.
              </p>
            </div>
          </div>

          {/* CARD 03: Sports & Other Event Venues */}
          <div className="bg-white text-black p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black text-gray-200 mb-6 tracking-tighter">03</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Sports & Event<br/>Venues</h3>
            
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Signs at sports stadiums, parks, theaters, and other entertainment venues are essential to branding, crowd control, way finding information, and event promotion. The uses and varieties of sign types are unlimited, and we are your resource for custom exterior and interior signs.
              </p>
              <p>
                Create a distinctive exterior for your facility with a monument sign that reflects the architecture of your building. Adding an electronic sign board allows you to announce upcoming events. Building exteriors featuring LED lighted channel letter signs, backlit signs, or neon lettering provide a high profile for your facility.
              </p>
              <p>
                Patrons entering depend on indoor signage for way finding. Theater and arena entrances and gates require directional signs, as do restroom and concession areas. Indoor lighted electronic sign boards provide updated information, and custom dimensional backlit signs enhance the décor and excitement of the venue. Custom vinyl banners are a cost-effective solution for raising awareness.
              </p>
            </div>
          </div>

          {/* CARD 04: Hospitality Sector */}
          <div className="bg-white text-black p-8 md:p-12 relative group" style={cutCornerStyle}>
            <div className="text-6xl md:text-8xl font-black text-gray-200 mb-6 tracking-tighter">04</div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Hospitality<br/>Sector</h3>
            
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Hotels, motels, restaurants and other hospitality facilities require a variety of outdoor business signs and indoor signage. Your signs brand your business and attract and inform customers.
              </p>
              <p>
                Brand your business entrance and assure that your customers will easily locate you with an attractive monument sign or pylon sign designed, manufactured, and installed by our sign professionals. Attractive and informative directional signs help customers navigate your property, and a custom awning provides branding, exterior lighting, and a welcoming entryway.
              </p>
              <p>
                As customers approach, welcome them with custom designed vinyl window graphics. Include bright indoor signage to direct them to their destination. We can be your single source for design, fabrication, and installation of high quality custom signs. If your business is a franchise dictated by corporate designs, you can depend on us for accurate production and efficient installation.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}