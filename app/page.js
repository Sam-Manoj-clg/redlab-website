import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-red-200 selection:text-red-900">
      <Hero />
      <Intro />
      <Services />
      <Footer />
    </main>
  );
}