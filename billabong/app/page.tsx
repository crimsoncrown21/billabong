import Navbar from "./components/Navbar";
import SidebarCTA from "./components/SidebarCTA";
import HeroSlider from "./components/HeroSlider";
import IntroSection from "./components/IntroSection";
import SchoolsSection from "./components/SchoolsSection";
import StatsSection from "./components/StatsSection";
import FeesSection from "./components/FeesSection";
import NewsSection from "./components/NewsSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";

export default function HomePage() {
  return (
    <LenisProvider>
      <Navbar />
      <SidebarCTA />
      <main>
        <HeroSlider />
        <IntroSection />
        <SchoolsSection />
        <StatsSection />
        <FeesSection />
        <NewsSection />
        <CommunitySection />
      </main>
      <Footer />
    </LenisProvider>
  );
}
