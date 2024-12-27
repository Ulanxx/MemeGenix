import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Community } from '../components/Community';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <Footer />
    </>
  );
}