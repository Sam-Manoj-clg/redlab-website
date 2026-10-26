import Link from 'next/link';
import { HiArrowLongLeft } from 'react-icons/hi2';

export const metadata = {
  title: "More About Us | RedLab Solutions",
  description: "RedLab's Core Operations: Design and Engineering Partnership.",
};

export default function MoreAboutPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative w-full pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* BACK TO HOME BUTTON */}
          <Link 
            href="/" 
            className="relative z-50 pointer-events-auto inline-flex items-center gap-2 text-sm font-bold font-montserrat uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors mb-8 md:mb-12 group"
          >
            <HiArrowLongLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* EDITORIAL HEADER */}
          <div className="transform scale-y-[1.3] origin-left mb-8 md:mb-12">
            <h1 className="font-montserrat font-black uppercase text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter text-black">
              More<br />
              <span className="text-red-600">About Us</span>
            </h1>
          </div>
          
          <div className="max-w-3xl">
            {/* CLEAN, STANDARD SUBHEADLINE */}
            <p className="text-2xl md:text-3xl text-gray-800 font-montserrat font-bold tracking-tight uppercase">
              RedLab's Core Operations
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT (Design & Engineering Partnership) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Column: The Text */}
            <div className="lg:w-7/12">
              <div className="mb-10">
                <h2 className="font-montserrat text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                  Design and Engineering Partnership
                </h2>
                <div className="w-16 h-1.5 bg-red-600 mt-6"></div>
              </div>
              
              <div className="prose prose-lg prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are an established Outdoor Signage Manufacturer with an excellent track record offering best in class Services. When you work with us, you can be assured only the best materials are used and every step of the process is closely monitored. Our design and engineering services create the perfect label for your business.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The Signage industry has evolved from Hand painting to large outdoor signs with unending possibilities with advanced technologies. Today, Redlab Solutions, custom designs, manufactures, and installs any type or size of sign for customers nationwide. From design to installation and service, we are a true one-source organization, with the ability to provide every element of your signage needs. As a full-service sign company, Redlab Solutions guarantees your projects meet the highest quality standards and be delivered on-time and on budget.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Accent */}
            <div className="lg:w-5/12 w-full">
              <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                
                {/* Decorative glowing background effects */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/30 rounded-full blur-[80px] group-hover:bg-red-500/40 transition-colors duration-700"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>

                <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                  <div>
                    <h3 className="font-montserrat text-2xl font-bold text-white mb-4">
                      End-to-End Capabilities
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Custom Design
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Advanced Engineering
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Nationwide Installation
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Lifecycle Service
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                      A True One-Source Organization
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}