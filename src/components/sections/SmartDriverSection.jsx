import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

import appScreenImg from "../../assets/images/no_commission_app_screen.png";
import ctaBgPattern from "../../assets/images/cta-2-bg.png";
import bgShape2 from "../../assets/images/bg-shape2.png";

gsap.registerPlugin(ScrollTrigger);

export default function SmartDriverSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

     
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8, y: 80 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-visible w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgShape2})` }}
    >

      <div className="w-full px-4 sm:px-6 md:px-12">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight drop-shadow-sm">
          {t.smartDriver?.heading || "Be a Smart Driver"}
        </h2>

        <div 
          ref={cardRef}
          className="relative bg-amber-400 rounded-3xl grid grid-cols-1 md:grid-cols-12 items-center overflow-visible shadow-2xl bg-cover bg-center bg-no-repeat border border-amber-300/50"
          style={{ backgroundImage: `url(${ctaBgPattern})` }}
        >
         
          <div className="p-8 sm:p-12 md:p-16 md:col-span-7 z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-8 leading-[1.12] tracking-tight drop-shadow-sm">
              {t.smartDriver?.subheading || "0% Commission 100% Freedom"}
            </h3>

            <a
              href="https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 font-extrabold text-white hover:bg-blue-600 transition-all duration-300 shadow-xl cursor-pointer transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base tracking-wide"
            >
              <span>{t.smartDriver?.cta || "Download Smart Driver App"}</span>
              <span className="text-lg">→</span>
            </a>
          </div>

     
          <div 
            ref={imgRef} 
            className="md:col-span-5 relative flex justify-center md:justify-end z-20 self-end -mt-20 md:-mt-32 lg:-mt-40 mb-0 pr-0 md:pr-6 pointer-events-none"
          >
            <img
              src={appScreenImg}
              alt="Garibook Smart Driver App"
              className="h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}