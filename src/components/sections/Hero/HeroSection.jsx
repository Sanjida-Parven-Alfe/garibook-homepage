import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import HeroBookingForm from "./HeroBookingForm";

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
    <section className="relative overflow-hidden bg-white pt-4 pb-0 lg:pt-20 lg:pb-0">
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
              <a
                href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
                target="_blank"
                rel="noreferrer"
                className="group relative mb-2 inline-block cursor-pointer border-none bg-transparent p-1.5 text-sm font-bold tracking-wider uppercase transition-all duration-150 ease-linear outline-none before:absolute before:top-0 before:right-0 before:left-0 before:block before:h-[calc(50%-5px)] before:border before:border-b-0 before:border-amber-300 before:transition-all before:duration-150 before:content-[''] after:absolute after:right-0 after:bottom-0 after:left-0 after:block after:h-[calc(50%-5px)] after:border after:border-t-0 after:border-amber-300 after:transition-all after:duration-150 after:content-[''] active:scale-95"
              >
                <span className="relative block overflow-hidden bg-amber-400 px-7 py-3.5 text-gray-950 shadow-[inset_0px_0px_0px_1px_transparent] before:absolute before:top-0 before:left-0 before:block before:h-0.5 before:w-0.5 before:bg-amber-400 before:content-[''] after:absolute after:right-0 after:bottom-0 after:block after:h-1 after:w-1 after:bg-amber-400 after:transition-all after:duration-200 after:content-[''] group-hover:after:bg-white">
                  <span className="absolute top-0 -bottom-[1px] -left-2 block w-0 -skew-x-[15deg] bg-blue-600 transition-all duration-300 ease-linear group-hover:w-[calc(100%+15px)]" />

                  <span className="relative z-10 flex items-center space-x-3 font-bold tracking-wider text-gray-950 transition-colors duration-200 group-hover:text-white">
                    <span>{t.hero.downloadBtn}</span>
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative pt-4">
          {/* Original Curved Wave Shape Background */}
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