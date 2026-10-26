import Link from 'next/link';
import { 
  HiOutlineLightBulb, 
  HiOutlineBuildingStorefront, 
  HiOutlineCubeTransparent, 
  HiOutlineMegaphone, 
  HiOutlineCursorArrowRays, 
  HiOutlineGift 
} from 'react-icons/hi2';

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
          Our Services
        </h2>
       

        {/* FIXED: Removed 'auto-rows-[280px]' and added 'items-start' to allow cards 
          to grow naturally with their content without squishing or overflowing. 
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* LEFT COLUMN (Holds 2 Small Cards + 1 Wide Card) */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* BOX 1: Marketing Strategy */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow h-full">
              <div>
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HiOutlineLightBulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Marketing<br/>Strategy</h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  Be it promoting your product, finding new avenues or just to increase the reach.
                </p>
              </div>
            </div>

            {/* BOX 2: In-store Branding */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow h-full">
              <div>
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HiOutlineBuildingStorefront className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">In-store<br/>Branding</h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  We help brands create immersive and emotional connections within physical environments.
                </p>
              </div>
            </div>

            {/* BOX 4: Trade Shows (Wide) */}
            {/* Note: In this sub-grid, making this span 2 columns keeps it wide under the top 2 cards */}
            <div className="sm:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow h-full">
              <div className="flex items-start justify-between">
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-tighter leading-[1.1]">
                  Propel Brand Awareness <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                    Across All Channels
                  </span>
                </h3>
                <div className="hidden sm:flex shrink-0 ml-4 w-16 h-16 bg-red-50 text-red-600 rounded-full items-center justify-center group-hover:scale-110 transition-transform">
                   <HiOutlineMegaphone className="w-8 h-8 -rotate-12" />
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-gray-500 max-w-sm text-sm">
                  Trade Shows and Exhibitions: Delivering a seamless consumer experience is more important than ever.
                </p>
              <Link
               href="/contact"
              className="inline-flex px-6 py-3 shrink-0 rounded-full bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 transition-colors items-center gap-2 whitespace-nowrap text-sm font-medium"
              >
               Get in Touch
            <svg
               className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
             />
            </svg>
              </Link>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Holds 1 Tall Card) */}
          {/* BOX 3: Retail Orchestration (Tall) */}
          {/* Using h-full here forces it to match the exact height of the entire LEFT COLUMN next to it! */}
          <div className="col-span-1 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow relative overflow-hidden h-full min-h-[400px]">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-200 group-hover:-translate-y-1 transition-transform">
                <HiOutlineCubeTransparent className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
                Retail Orchestration Masters
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Brands engage us to provide expertise in everything from concept design and development, to production, deployment, installation and maintenance.
              </p>
            </div>
            
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50 group-hover:bg-red-100 transition-colors pointer-events-none"></div>
            
            <Link href="/industries/retail-venues" className="relative z-10 mt-8 inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 w-max">
              Explore Retail Branding
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          {/* BOTTOM ROW (Box 5 & 6) */}
          {/* BOX 5: Digital Marketing (Wide) */}
          <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-center group hover:shadow-md transition-shadow relative overflow-hidden h-full">
             <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="w-16 h-16 shrink-0 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                 <HiOutlineCursorArrowRays className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Digital Marketing</h3>
                <p className="text-gray-500 text-base max-w-xl leading-relaxed">
                  We use technology to create immersive experiences and add an interactive layer to your retail environments, bridging the gap between digital presence and physical reality.
                </p>
              </div>
            </div>
          </div>

          {/* BOX 6: Gifting & Promotions */}
          <div className="col-span-1 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow h-full">
            <div>
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <HiOutlineGift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Gifting &<br/>Promotions</h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                Finding new avenues or just increasing reach to assist you all the way through.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}