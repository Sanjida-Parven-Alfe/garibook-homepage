import "./styles/index.css";
import Navbar from "./components/layout/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import HeroSection from "./components/sections/Hero/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import ServicesSection from "./components/sections/ServicesSection";
import FreedomSection from "./components/sections/FreedomSection";
import GallerySection from "./components/sections/GallerySection";
import BookingArrivalSection from "./components/sections/BookingArrivalSection";
import SmartDriverSection from "./components/sections/SmartDriverSection";
import NewsroomSection from "./components/sections/NewsroomSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import BlogSection from "./components/sections/BlogSection";
import DownloadAppSection from "./components/sections/DownloadAppSection";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50/50">
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection /> 
          <ServicesSection />
          <FreedomSection />
          <GallerySection/>
          <BookingArrivalSection/>
          <SmartDriverSection/>
          <NewsroomSection/>
          <TestimonialsSection/>
          <BlogSection/>
          <DownloadAppSection/>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
