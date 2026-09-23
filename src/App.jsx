import "./styles/index.css";
import Navbar from "./components/layout/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import HeroSection from "./components/sections/Hero/HeroSection";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50/50">
        <Navbar />
        <main>
          <HeroSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
