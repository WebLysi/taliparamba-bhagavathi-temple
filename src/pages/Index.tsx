import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Management from "@/components/Management";
import PoojaTimings from "@/components/PoojaTimings";
import Vazhipaad from "@/components/Vazhipaad";
import Calendar from "@/components/Calendar";
import Architecture from "@/components/Architecture";
import Gallery from "@/components/Gallery";
import Committee from "@/components/Committee";
import Footer from "@/components/Footer";
import { usePreloader } from "@/hooks/usePreloader";

const Index = () => {
  // Track all images in the DOM and wait for them to load
  usePreloader();

  return (
    <div className="min-h-screen pt-20 sm:pt-16">
      <Navbar />
      <Hero />
      <History />
      <Management />
      <PoojaTimings />
      <Calendar />
      <Vazhipaad />
      <Architecture />
      <Gallery />
      <Committee />
      <Footer />
    </div>
  );
};

export default Index;
