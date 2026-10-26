import Link from 'next/link';
import { 
  HiArrowLongLeft,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineMapPin,
  HiOutlineTruck,
  HiOutlineArrowsPointingOut,
  HiOutlinePhoto
} from 'react-icons/hi2';

export const metadata = {
  title: "Physical Products | RedLab Solutions",
  description: "Explore our comprehensive suite of engineered branding solutions.",
};

export default function ProductsPage() {
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
              Physical <br />
              <span className="text-red-600">Products</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium text-gray-400 leading-relaxed">
              From towering monument signs to precision 3D lettering, explore our comprehensive suite of engineered branding solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CLASSIC BENTO GRID WITH GAPS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* CSS Grid with restored gaps and separate rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* CARD 1: Illuminated Signs */}
          <div className="md:col-span-2 lg:col-span-2 bg-red-600 text-white p-8 md:p-10 rounded-[2rem] flex flex-col justify-between group hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2">LED, Crystal, Edge Light, GSB</p>
                <h2 className="text-3xl font-black uppercase tracking-tight max-w-[300px] leading-none">Illuminated & Glow Signs</h2>
              </div>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <HiOutlineSparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-red-50 font-medium leading-relaxed max-w-xl">
              Make your business stand out 24/7. We combine premium LED, edge-lit tech, and GSB materials to create distinctive illuminated branding that maximizes visibility and grabs immediate attention.
            </p>
          </div>

          {/* CARD 2: 3D & Channel Letters */}
          <div className="md:col-span-1 lg:col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 rounded-[2rem] flex flex-col group hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
              <HiOutlineCube className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">3D & Channel Letters</h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mt-auto">
              Durable, all-weather signage manufactured with premium acrylic and internal LED lighting. Perfectly engineered to reflect your signature style and shape.
            </p>
          </div>

          {/* CARD 3: Pylon & Monument */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 bg-[#1a1a1a] text-white p-8 rounded-[2rem] flex flex-col group relative overflow-hidden hover:bg-[#222] transition-colors">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 pointer-events-none transition-opacity duration-300 group-hover:opacity-10" style={{ opacity: 0.03, zIndex: 0 }}>
              <HiOutlineMapPin className="w-full h-full text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <HiOutlineMapPin className="w-6 h-6" />
              </div>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">Pylon, Pole, Monuments</p>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Structural Beacons</h2>
              <div className="w-10 h-1 bg-gray-700 mb-6"></div>
              <p className="text-gray-400 font-medium leading-relaxed">
                High-impact structural beacons for central entry points. These eye-catching monoliths attract motorists, allow for multi-business directory listing, and elevate your physical authority from a distance.
              </p>
            </div>
          </div>

          {/* CARD 4: Vehicle Graphics (FIXED: Now spans 2 cols on medium screens!) */}
          <div className="md:col-span-2 lg:col-span-1 bg-white text-black p-8 rounded-[2rem] flex flex-col group hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
              <HiOutlineTruck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Vehicle & Vinyl Graphics</h2>
            <p className="text-gray-600 text-sm font-medium leading-relaxed mt-auto">
              Turn your fleet into a mobile billboard. Our high-profile, all-weather vinyl wraps increase brand awareness wherever your vehicles travel.
            </p>
          </div>

          {/* CARD 5: Wayfinding (FIXED: Now spans 3 cols on medium screens to fill row) */}
          <div className="md:col-span-3 lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 md:p-10 rounded-[2rem] flex flex-col justify-between group hover:bg-white/10 transition-colors">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">Directional, Specialty, ACP Cladding</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none max-w-[300px]">Wayfinding & Directional</h2>
              </div>
              <div className="w-16 h-16 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <HiOutlineArrowsPointingOut className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed text-lg max-w-xl mt-auto">
              Essential navigation systems for campuses, hospitals, and corporate hubs. We seamlessly guide visitors using durable ACP cladding and specialty graphics while maintaining premium architectural aesthetic standards.
            </p>
          </div>

          {/* CARD 6: Print & Frames */}
          <div className="md:col-span-3 lg:col-span-4 bg-transparent border-2 border-[#333] hover:border-red-600/50 text-white p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center gap-8 group transition-colors">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center shrink-0 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <HiOutlinePhoto className="w-8 h-8" />
            </div>
            <div>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">Digital Print, Clip-On, Photo Frames</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">Print & Display Frames</h2>
              <p className="text-gray-400 font-medium leading-relaxed max-w-4xl">
                Stellar large-format digital printing paired with ultra-slim LED clip-on frames. Our custom photo frames and backlit displays are incredibly cost-effective, allowing you to easily swap promotional prints while maintaining a highly elegant retail presentation.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}