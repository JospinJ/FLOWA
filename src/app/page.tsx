'use client';

import Navbar from '@/components/flowa/Navbar';
import HeroSection from '@/components/flowa/HeroSection';
import ProblemSection from '@/components/flowa/ProblemSection';
import SolutionSection from '@/components/flowa/SolutionSection';
import Module1Vocal from '@/components/flowa/Module1Vocal';
import Module2Collector from '@/components/flowa/Module2Collector';
import Module3Radar from '@/components/flowa/Module3Radar';
import Module4Credit from '@/components/flowa/Module4Credit';
import ArchitectureSection from '@/components/flowa/ArchitectureSection';
import OrangeValueSection from '@/components/flowa/OrangeValueSection';
import DemoScenario from '@/components/flowa/DemoScenario';
import PitchSection from '@/components/flowa/PitchSection';
import Footer from '@/components/flowa/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <Module1Vocal />
        <Module2Collector />
        <Module3Radar />
        <Module4Credit />
        <ArchitectureSection />
        <OrangeValueSection />
        <DemoScenario />
        <PitchSection />
      </main>
      <Footer />
    </div>
  );
}
