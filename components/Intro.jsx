import CardSwap, { Card } from './CardSwap';
import { HiOutlineRocketLaunch, HiOutlineLightBulb, HiOutlineChartBar } from 'react-icons/hi2';
import Link from "next/link";
export default function Intro() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Introduction Text */}
          <div className="lg:w-1/2">
            <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Why Choose <span className="text-red-600">RedLab?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We don't just execute campaigns; we architect brand experiences. Our approach combines deep market insights with aggressive, data-driven execution to ensure your brand doesn't just participate in the market—it dominates.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From high-impact retail orchestration to hyper-targeted digital marketing, we are your growth catalysts.
            </p>
<Link
  href="/about"
  className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-wide text-sm"
>
  Discover Our Process
</Link>
          </div>

          {/* Right Side: Animated CardSwap */}
          <div className="lg:w-1/2 relative h-[500px] w-full flex justify-center lg:justify-end items-center">
            
            {/* We use a wrapper with fixed height to contain the absolute positioned CardSwap.
              Adjust width/height props below to fit your specific needs.
            */}
            <div className="relative w-full max-w-[400px] h-[500px]">
              <CardSwap
                width={350}
                height={420}
                cardDistance={40}       // Tightened the X spacing slightly
                verticalDistance={45}   // Tightened the Y spacing slightly
                delay={4000}            // Swaps every 4 seconds
                pauseOnHover={true}     // Stops animation if user is reading
                skewAmount={4}          // Slightly gentler skew
                easing="power1.inOut"   // Smooth transition
              >
                
                {/* CARD 1 */}
                <Card className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <HiOutlineRocketLaunch className="w-7 h-7" />
                    </div>
                    <h3 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">Rapid Execution</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Time to market is critical. We deploy high-quality retail and digital assets at breakneck speeds, ensuring you beat competitors to the punch.
                    </p>
                  </div>
                  <div className="text-sm font-bold text-red-600 uppercase tracking-widest mt-6">01</div>
                </Card>

                {/* CARD 2 */}
                <Card className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800 flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="w-14 h-14 bg-gray-800 text-white rounded-2xl flex items-center justify-center mb-6">
                      <HiOutlineLightBulb className="w-7 h-7" />
                    </div>
                    <h3 className="font-montserrat text-2xl font-bold text-white mb-4">Strategic Vision</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Execution without strategy is just noise. Every campaign we build is rooted in deep consumer psychology and market analytics.
                    </p>
                  </div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-6">02</div>
                </Card>

                {/* CARD 3 */}
                <Card className="bg-red-600 p-8 rounded-3xl shadow-2xl border border-red-500 flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="w-14 h-14 bg-red-700 text-white rounded-2xl flex items-center justify-center mb-6">
                      <HiOutlineChartBar className="w-7 h-7" />
                    </div>
                    <h3 className="font-montserrat text-2xl font-bold text-white mb-4">Measurable ROI</h3>
                    <p className="text-red-100 text-sm leading-relaxed">
                      We focus on metrics that matter. Our integrated solutions are designed to track performance, optimize engagement, and drive real revenue.
                    </p>
                  </div>
                  <div className="text-sm font-bold text-white/50 uppercase tracking-widest mt-6">03</div>
                </Card>

              </CardSwap>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}