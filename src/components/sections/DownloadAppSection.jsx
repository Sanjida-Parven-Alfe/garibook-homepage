import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";
import DownloadAppBtn from "../common/DownloadAppBtn";

import appScreenImg from "../../assets/images/app-with-logo.png";
import bgShape2 from "../../assets/images/bg-shape2.png";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadAppSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Card Scroll Transition
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 70, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // 2. Mobile App Image Bottom Alignment Animation
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, y: 90, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-visible bg-cover bg-center bg-no-repeat bg-gray-50/30"
      style={{ backgroundImage: `url(${bgShape2})` }}
    >
      {/* Container aligned with Navbar */}
      <div className="w-full px-4 sm:px-6 md:px-12">
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 rounded-3xl overflow-visible grid grid-cols-1 lg:grid-cols-12 items-end shadow-2xl border border-sky-200/80"
        >
          {/* Left Text Content */}
          <div className="p-8 sm:p-12 md:p-16 lg:col-span-7 text-left z-10 self-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 leading-[1.15] tracking-tight drop-shadow-sm">
              {t.downloadApp?.heading || "Download Garibook Mobile App"}
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 font-medium leading-relaxed">
              {t.downloadApp?.subtext ||
                "Download our Customer, Smart Driver and Enterprise App"}
            </p>

            {/* Reusable Download App Button */}
            <div>
              <DownloadAppBtn text={t.downloadApp?.cta || "Download App"} />
            </div>
          </div>

          {/* Right Mobile Phone App Screen Image (Aligned exactly with bottom) */}
          <div
            ref={imgRef}
            className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full px-4 lg:px-0 z-20 -mt-16 sm:-mt-20 lg:-mt-28 mb-0 pr-0 lg:pr-8 pointer-events-none"
          >
            <img
              src={appScreenImg}
              alt="Garibook App"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] translate-y-[1px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}