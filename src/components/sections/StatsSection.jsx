import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";
import citySkyline from "../../assets/images/city-skyline.png";
import carImg from "../../assets/images/car.gif";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { key: "tripRequests", value: 300000, suffix: "+" },
  { key: "totalCustomers", value: 850000, suffix: "+" },
  { key: "activeDrivers", value: 35000, suffix: "+" },
  { key: "districtCovered", value: 64, suffix: "" },
];

export default function StatsSection() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skylineRef = useRef(null);
  const cardRefs = useRef([]);
  const numberRefs = useRef([]);

  useEffect(() => {
    // 1. Infinite Skyline Loop
    const skylineTimeline = gsap.timeline({ repeat: -1 });
    skylineTimeline.fromTo(
      skylineRef.current,
      { xPercent: 0 },
      { xPercent: -50, duration: 25, ease: "none" }
    );

    const ctx = gsap.context(() => {
      // 2. Title Animation
      gsap.fromTo(
        titleRef.current,
        { y: 70, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "restart reverse restart reverse",
          },
        }
      );

      // 3. Staggered Cards Animation
      const validCards = cardRefs.current.filter(Boolean);

      gsap.fromTo(
        validCards,
        { y: 80, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 15%",
            toggleActions: "restart reverse restart reverse",
          },
        }
      );

      // 4. Number Counter with Language Awareness (Bangla / English)
      validCards.forEach((_, i) => {
        const target = statsData[i].value;
        const counter = { val: 0 };
        const el = numberRefs.current[i];

        gsap.to(counter, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 15%",
            toggleActions: "restart reverse restart reverse",
          },
          onUpdate: () => {
            if (el) {
              const currentNum = Math.floor(counter.val);
              // Automatic Locale Formatting based on Language
              el.textContent = currentNum.toLocaleString(
                lang === "bn" ? "bn-BD" : "en-US"
              );
            }
          },
        });
      });
    }, sectionRef);

    return () => {
      skylineTimeline.kill();
      ctx.revert();
    };
  }, [lang]); // Re-trigger effect on language change

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a50e5] pt-14 pb-32 md:pt-20 md:pb-44"
    >
      {/* Container Content */}
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
          
          {/* Left Side: Section Title (Correct Key Matching) */}
          <div className="lg:col-span-5" ref={titleRef}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {t.stats?.title || "From Everyday Rides to Meaningful Journeys"}
            </h2>
          </div>

          {/* Right Side: 2x2 Grid Layout for Stats */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-12">
              {statsData.map((stat, i) => (
                <div
                  key={stat.key}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="flex flex-col justify-center"
                >
                  {/* Modern UI Drop Shadow for Numbers */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400 tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    <span ref={(el) => (numberRefs.current[i] = el)}>0</span>
                    {stat.suffix}
                  </h3>
                  {/* Text Label Matched from TRANSLATIONS items array */}
                  <p className="text-white mt-1 text-base sm:text-lg font-bold tracking-wide">
                    {t.stats?.items?.[i]?.label || stat.key}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* City Skyline Background */}
      <div
        ref={skylineRef}
        className="absolute bottom-0 left-0 flex w-[200%] h-28 md:h-36 lg:h-44 z-0 pointer-events-none opacity-90"
      >
        <img src={citySkyline} alt="" className="w-1/2 h-full object-cover" />
        <img src={citySkyline} alt="" className="w-1/2 h-full object-cover" />
      </div>

      {/* Prominent Larger Car */}
      <div className="absolute bottom-1 left-4 sm:left-8 lg:left-12 w-48 sm:w-60 md:w-72 lg:w-80 z-10 pointer-events-none drop-shadow-2xl">
        <img
          src={carImg}
          alt="Garibook Animated Car"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}