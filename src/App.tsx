import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import PlatformFeatures from '@/components/PlatformFeatures';
import Academy from '@/components/Academy';
import GrowthTeam from '@/components/GrowthTeam';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <PlatformFeatures />
        <Academy />
        <GrowthTeam />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
