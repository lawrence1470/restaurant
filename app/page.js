'use client';

import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import CateringSection from "./components/CateringSection";
import BetterChoiceSection from "./components/BetterChoiceSection";
import WelcomeSection from "./components/WelcomeSection";
import MenuPhilosophySection from "./components/MenuPhilosophySection";
import ScrollRevealText from "./components/ScrollRevealText";
import TraditionSection from "./components/TraditionSection";
import HistorySection from "./components/HistorySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Content wrapper - ensures solid backgrounds over hero */}
      <div style={{ position: 'relative', zIndex: 20, backgroundColor: '#F5F0E8' }}>
        {/* Catering Section */}
        <CateringSection />

        {/* Better Choice Section */}
        <BetterChoiceSection />

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Menu Philosophy Section */}
        <MenuPhilosophySection />

        {/* Scroll Reveal Text */}
        <ScrollRevealText />

        {/* Tradition Section */}
        <TraditionSection />

        {/* History Section */}
        <HistorySection />

        {/* Footer */}
        <Footer />
      </div>
      {/* End content wrapper */}
    </>
  );
}
