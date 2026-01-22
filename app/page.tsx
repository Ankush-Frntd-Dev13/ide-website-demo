import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StickyScrollSection from '@/components/StickyScrollSection';
import InnovationCarousel from '@/components/InnovationCarousel';
import LeadershipSection from '@/components/LeadershipSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StickyScrollSection />
      <InnovationCarousel />
      <LeadershipSection />
      <TestimonialsSlider />
      <CTABanner />
      <Footer />
    </main>
  );
}
