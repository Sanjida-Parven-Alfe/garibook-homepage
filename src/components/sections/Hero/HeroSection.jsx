import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HeroBookingForm from "./HeroBookingForm";
import DownloadAppBtn from "../../common/DownloadAppBtn";
import bgShape from "../../../assets/images/bg-shape1.png";

const HeroSection = () => {
  const { t, lang } = useLanguage();
  const titles = t.hero.titles || [];

  const [currentText, setCurrentText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!titles.length) return;

    const fullText = titles[titleIndex % titles.length];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === fullText.length) {
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles]);

  useEffect(() => {
    setCurrentText("");
    setCharIndex(0);
    setTitleIndex(0);
    setIsDeleting(false);
  }, [lang]);

  return (
    <section className="relative overflow-hidden bg-transparent -mt-20 pt-28 pb-0 lg:pt-36 lg:pb-0">
      {/* Background Shape Image extending under Navbar */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bgShape})` }}
      />

      {/* Container Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12">
        <div className="mb-6 grid grid-cols-1 items-start gap-4 lg:grid-cols-12">
          <div className="flex min-h-[70px] items-center sm:min-h-[160px] lg:col-span-6">
            <h1 className="text-2xl leading-[1.15] font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {currentText}
              <span className="ml-3 inline-block h-[0.9em] w-[5px] translate-y-[2px] animate-pulse bg-blue-600 align-baseline" />
            </h1>
          </div>

          <div className="space-y-6 lg:col-span-6 lg:pl-6">
            <p className="text-base leading-relaxed font-normal text-gray-500 sm:text-lg lg:text-xl">
              {t.hero.description}
            </p>

            <div>
              {/* Reusable DownloadAppBtn Component */}
              <DownloadAppBtn text={t.hero.downloadBtn} />
            </div>
          </div>
        </div>

        <div className="relative pt-4">
          {/* Curved Wave Shape Background */}
          <div className="pointer-events-none absolute -top-2 left-1/2 z-0 h-[calc(100%+20px)] w-[120vw] -translate-x-1/2 overflow-hidden">
            <svg
              className="h-full w-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#0a50e5"
                d="M0,60 C300,140 520,240 720,220 C960,195 1150,110 1300,140 C1380,155 1420,165 1440,180 L1440,320 L0,320 Z"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <HeroBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;