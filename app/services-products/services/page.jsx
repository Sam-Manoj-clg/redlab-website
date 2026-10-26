import Link from 'next/link';
import { 
  HiArrowLongLeft,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineCamera,
  HiOutlinePencilSquare,
  HiOutlineChartBar,
  HiOutlineCog8Tooth,
  HiOutlineRocketLaunch,
  HiOutlineWrenchScrewdriver
} from 'react-icons/hi2';

export const metadata = {
  title: "Our Services | RedLab Solutions",
  description: "End-to-end signage, branding, and execution services across India.",
};

export default function ServicesPage() {
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
              End-to-End <br />
              <span className="text-red-600">Execution</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium text-gray-400 leading-relaxed">
              From initial site surveys to nationwide deployment and ongoing maintenance, we engineer flawless physical branding solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* CSS Grid for the Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* CARD 1: Nationwide Capabilities (Wide, Red Accent) */}
          <div className="md:col-span-2 lg:col-span-2 bg-red-600 text-white p-8 md:p-10 rounded-[2rem] flex flex-col justify-between group hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-black uppercase tracking-tight max-w-[200px] leading-none">Nationwide Capabilities</h2>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <HiOutlineGlobeAsiaAustralia className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-red-50 font-medium leading-relaxed">
              We have a pan India capability with multiple execution teams hitting the field from North to South and West to East with our logistic teams or the logistic team of the client's choice. We have created Process & systems to see the real-time progress of the work and give a detailed report as per the requirement of the clients.
            </p>
          </div>

          {/* CARD 2: Site Surveys (Square, Glassy Dark) */}
          <div className="md:col-span-1 lg:col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 rounded-[2rem] flex flex-col group hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
              <HiOutlineCamera className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Site Surveys & Recce</h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              We carefully measure & survey every surface to ensure the new signage will adequately fit. We take multiple photos at different angles showing architecture features and obstructions. Our designers use them to mockup proofs for the final look.
            </p>
          </div>

          {/* CARD 3: Customized Designs (Square, Solid White) */}
          <div className="md:col-span-1 lg:col-span-1 bg-white text-black p-8 rounded-[2rem] flex flex-col group hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
              <HiOutlinePencilSquare className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Customized Designs</h2>
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              Our skilled design team creates the perfect solution for your business—whether a colorful lighted awning, channel letters, or a distinctive monument sign using appropriate, long-lasting materials.
            </p>
          </div>

          {/* CARD 4: Project Management (Tall, Dark Gray) */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-[#1a1a1a] text-white p-8 rounded-[2rem] flex flex-col group relative overflow-hidden">
            
            {/* Background decorative icon - BULLETPROOF INLINE STYLE FIX */}
            <div 
              className="absolute -bottom-10 -right-10 w-64 h-64 pointer-events-none transition-opacity duration-300 group-hover:opacity-10" 
              style={{ opacity: 0.03, zIndex: 0 }}
            >
              <HiOutlineChartBar className="w-full h-full text-white" />
            </div>
            
            {/* All content wrapped in a guaranteed front-layer container */}
            <div className="relative flex flex-col h-full" style={{ zIndex: 10 }}>
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <HiOutlineChartBar className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Project Management</h2>
              <div className="w-10 h-1 bg-gray-700 mb-6"></div>
              <p className="text-gray-400 font-medium leading-relaxed">
                From start to finish, our team guides your project to achieve highest quality design, fabrication, and installation on time and within the budget. We have a robust management reporting system, so that the client is always updated on the project with various MIS & Reports.
              </p>
            </div>
            
          </div>
          {/* CARD 5: Fabrication and Manufacturing (Large Square, Solid White) */}
          <div className="md:col-span-2 lg:col-span-2 bg-white text-black p-8 md:p-10 rounded-[2rem] flex flex-col justify-between group hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none max-w-[300px]">Fabrication & Manufacturing</h2>
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-90 transition-transform duration-700">
                <HiOutlineCog8Tooth className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed text-lg max-w-xl">
              Our highly skilled workers fabricate and assemble the signs and materials required, ensuring adherence to the drawings and specifications provided by the client. Quality control is strictly built into every single step in the fabrication and assembly processes for your project.
            </p>
          </div>

          {/* CARD 6: Project Execution (Square, Glassy Dark) */}
          <div className="md:col-span-1 lg:col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 rounded-[2rem] flex flex-col group hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
              <HiOutlineRocketLaunch className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Project Execution</h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Our Execution and Logistic Teams use required equipment to ensure installations withstand any weather conditions. We also handle prefabricated elements delivered directly to the execution site.
            </p>
          </div>

          {/* CARD 7: Maintenance (Wide, Dark Outlined) */}
          <div className="md:col-span-3 lg:col-span-4 bg-transparent border-2 border-[#333] hover:border-red-600/50 text-white p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center gap-8 group transition-colors">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center shrink-0 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <HiOutlineWrenchScrewdriver className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">Maintenance & Ongoing Services</h2>
              <p className="text-gray-400 font-medium leading-relaxed max-w-4xl">
                Maintenance and repair is an important aspect of RedLab Solutions. If you experience any problems with signage, our skilled technicians correct it for long-lasting durability. Our services are also available for routine care, and we can repair or maintain existing signage done by another company.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}