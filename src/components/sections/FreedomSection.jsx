import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

import bannerImg from "../../assets/images/garibook_freedom.webp";
import carIcon from "../../assets/icons/car.svg";
import driveIcon from "../../assets/icons/drive.svg";
import priceIcon from "../../assets/icons/price.svg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { key: "chooseCar", icon: carIcon, number: "01" },
  { key: "chooseDriver", icon: driveIcon, number: "02" },
  { key: "chooseFare", icon: priceIcon, number: "03" },
];

export default function FreedomSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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

      
      itemsRef.current.forEach((itemEl, index) => {
        if (!itemEl) return;

        gsap.fromTo(
          itemEl,
          { opacity: 0, y: 70, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
   
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-wide leading-tight">
            Freedom in <span className="text-amber-400">Every Journey</span>
          </h2>
        </div>

       
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center items-start">
        
          <div className="hidden md:block absolute top-[105px] left-[15%] right-[15%] z-0 pointer-events-none">
            <svg
              className="w-full h-24"
              viewBox="0 0 800 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100,50 Q250,5 400,50 T700,50"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                fill="none"
              />
            </svg>
          </div>

          {items.map((item, i) => (
            <div
              key={item.key}
              ref={(el) => (itemsRef.current[i] = el)}
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Step Number */}
              <span className="text-4xl md:text-5xl font-black text-white/30 mb-3 tracking-widest transition-colors duration-300 group-hover:text-amber-400/80">
                {item.number}
              </span>

             
              <div className="relative mb-5 transition-transform duration-300 group-hover:scale-110">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 border border-white/20 p-2 flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text Information */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                {t.freedom?.[item.key]}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm max-w-xs leading-relaxed">
                {t.freedom?.[`${item.key}Desc`]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}