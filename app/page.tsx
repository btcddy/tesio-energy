import Navbar from '@/components/Navbar';
import ScrollAnimator from '@/components/ScrollAnimator';
import Hero from '@/components/Hero';
import CircuitStrip from '@/components/CircuitStrip';
import FragmentedSolutions from '@/components/FragmentedSolutions';
import Services from '@/components/Services';
import CaseStudy from '@/components/CaseStudy';
import Solution from '@/components/Solution';
import Financials from '@/components/Financials';
import Transform from '@/components/Transform';
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
      <FragmentedSolutions />
      <Services />
      <CaseStudy />
      {/* <Solution /> */}
      <Financials />
      <Transform />
      {/* <Partners /> */}
      <Team />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}