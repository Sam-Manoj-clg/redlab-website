export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-2xl font-bold text-white mb-6">RedLab Solutions</h4>
          <p className="text-gray-400">Your Outsourcing and Execution Specialists.</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Reach Us</h4>
          <address className="not-italic text-gray-400 space-y-2">
            <p>76, Station Road, Indira Market,</p>
            <p>Jai Ambe Nagar, Bhayandar West,</p>
            <p>Maharashtra 401101</p>
          </address>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
          <div className="space-y-2 text-gray-400">
            <p>Office Hours: Mon-Sat, 9.30 AM - 6.30 PM</p>
            <p>Phone: +91 9619569474</p>
            <p>Mobile: +91 9223229474</p>
            <p>Email: redlabsolutions@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} RedLab Solutions Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}