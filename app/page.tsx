import Navbar from '@/components/Navbar';
import ScrollAnimator from '@/components/ScrollAnimator';
import Hero from '@/components/Hero';
import CircuitStrip from '@/components/CircuitStrip';
import Services from '@/components/Services';
import FragmentedSolutions from '@/components/FragmentedSolutions';
import Solution from '@/components/Solution';
import Financials from '@/components/Financials';
import Transform from '@/components/Transform';
import CaseStudy from '@/components/CaseStudy';
import Partners from '@/components/Partners';
import Team from '@/components/Team';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div id="top" />
      <ScrollAnimator />
      <Navbar />
      <Hero />
      <CircuitStrip />
      <Services />
      <FragmentedSolutions />
      <Solution />
      <Financials />
      <Transform />
      <CaseStudy />
      <Partners />
      <Team />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}