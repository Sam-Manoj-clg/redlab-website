import Link from 'next/link';
import { HiOutlineCheckCircle, HiArrowLongLeft } from 'react-icons/hi2'; // Added HiArrowLongLeft
export const metadata = {
  title: "About Us | RedLab Solutions",
  description: "Innovation with Purpose. Unlock the value of marketing execution.",
};

export default function AboutPage() {
  const visionPoints = [
    "Love our clients",
    "Pursue excellence relentlessly",
    "Innovate and take the lead",
    "Feel empowered and be accountable",
    "Act with integrity and trust",
    "Have passion and pride"
  ];

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

          {/* Exact Hero Text from Screenshot */}
          <div className="transform scale-y-[1.3] origin-left mb-8 md:mb-12">
            <h1 className="font-montserrat font-black uppercase text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter text-black">
              Innovation<br />
              <span className="text-red-600">With Purpose</span>
            </h1>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl text-gray-800 font-montserrat font-bold tracking-tight">
              Unlock the Value of Marketing Execution
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT (Split Layout matching the WP column style) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Column: "We are" */}
            <div className="lg:w-7/12">
              <div className="mb-8">
                <h2 className="font-montserrat text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">We are</h2>
                <div className="w-12 h-1 bg-red-600 mb-6"></div>
                <h3 className="text-xl md:text-2xl font-montserrat font-bold text-red-600 leading-snug">
                  Strategic partnerships. Real marketing efficiencies.
                </h3>
              </div>
              
              <div className="prose prose-lg prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are industry leaders in the procurement, consultation and management of end-to-end marketing solutions across India. Our strategic partnerships and extensive regional expertise enable us to deliver best-in-class innovation, savings and process efficiencies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  RedLab has been a trusted procurement partner in the outsourcing industry. Our philosophy is innovation focused and client driven. This defines the way RedLab operates and the steps we take to achieve our goals.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The key differentiator in our incredible success? The ability to adapt and respond to opportunities, wherever we see them. We've grown and evolved dramatically over the years, serving pan India clients, expanding consistently, and strengthening our service offerings.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Our people, track record for innovation, commitment to sustainability, and the passion we have for our work have made us the first choice partner for the brands we work with.
                </p>
              </div>
            </div>

            {/* Right Column: "What Drives Us" & "Our Vision" */}
            <div className="lg:w-5/12 space-y-16">
              
              {/* What Drives Us */}
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h2 className="font-montserrat text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">What Drives Us</h2>
                <div className="w-12 h-1 bg-red-600 mb-6"></div>
                <p className="text-gray-600 leading-relaxed">
                  At RedLab, living out our values provides structure to our daily interactions with our clients, our suppliers, and each other.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h2 className="font-montserrat text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Our Vision</h2>
                <div className="w-12 h-1 bg-red-600 mb-8"></div>
                
                <ul className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-4 group">
                      <div className="shrink-0 text-red-600 group-hover:scale-110 transition-transform">
                        <HiOutlineCheckCircle className="w-6 h-6" />
                      </div>
                      <span className="text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}