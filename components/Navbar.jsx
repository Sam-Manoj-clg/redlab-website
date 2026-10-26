import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Updated Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image 
                src="/Logo.png" 
                alt="RedLab Solutions" 
                width={180} 
                height={60} 
                className="object-contain"
                priority 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-red-600 font-medium transition-colors">
              Home
            </Link>
            
            {/* ABOUT DROPDOWN */}
            <div className="group relative">
              <button className="text-gray-800 hover:text-red-600 font-medium transition-colors py-6">
                About RedLab ▾
              </button>
              
              <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                <div className="w-48 bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-md overflow-hidden">
                  <Link href="/about" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">About Us</Link>
                  <Link href="/about/more" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">More About Us</Link>
                  </div>
              </div>
            </div>

            <Link href="/services-products/services" className="text-gray-800 hover:text-red-600 font-medium transition-colors">
              Services
            </Link>
            
            {/* INDUSTRIES DROPDOWN */}
            <div className="group relative">
              <button className="text-gray-800 hover:text-red-600 font-medium transition-colors py-6">
                Industries ▾
              </button>
              
              <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                <div className="w-56 bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-md overflow-hidden">
                  <Link href="/industries/retail-venues" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">Retail & Venues</Link>
                  <Link href="/industries/corporate-services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">Corporate & Services</Link>
                  <Link href="/industries/health-education" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">Health & Education</Link>
                </div>
              </div>
            </div>

            <Link href="/products" className="text-gray-800 hover:text-red-600 font-medium transition-colors">
              Products
            </Link>
          </div>
          
        {/* These were the missing closing tags! */}
        </div>
      </div>
    </nav>
  );
}
