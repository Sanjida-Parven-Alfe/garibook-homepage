import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import intercityIcon from "../../assets/images/intercity_car_rental.svg";
import rideshareIcon from "../../assets/images/rideshare.svg";
import airportIcon from "../../assets/images/airport_rental.svg";
import hourlyIcon from "../../assets/images/hourly_rental.svg";
import businessImg from "../../assets/images/busines.jpeg";
import clubImg from "../../assets/images/garibook_club.jpg";
import vmsImg from "../../assets/images/vms.png";
import bgShape2 from "../../assets/images/bg-shape2.png";
import carsBg from "../../assets/images/cars-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const tabs = ["rides", "business", "club", "vms"];

const rideCards = [
  { key: "intercity", icon: intercityIcon },
  { key: "rideshare", icon: rideshareIcon },
  { key: "airport", icon: airportIcon },
  { key: "hourly", icon: hourlyIcon },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("rides");
  
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const cardContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        [badgeRef.current, titleRef.current, tabsRef.current],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Card Container Scroll Animation
      cardsRef.current.forEach((cardEl, index) => {
        if (!cardEl) return;
        const isOuterCard = index === 0 || index === 3;
        const baseOffsetY = window.innerWidth >= 1024 ? (isOuterCard ? -24 : 32) : 0;

        gsap.fromTo(
          cardEl,
          { opacity: 0, y: baseOffsetY + 80 },
          {
            opacity: 1,
            y: baseOffsetY,
            duration: 1,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (cardContainerRef.current) {
      gsap.fromTo(
        cardContainerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden pt-6 pb-16 md:pb-24 bg-gray-50/50"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-40"
        style={{ backgroundImage: `url(${bgShape2})` }}
      />

      {/* 1. Arc Header */}
      <div 
        className="relative z-10 w-full overflow-hidden pt-16 pb-40 md:pb-48 text-center text-white shadow-2xl"
        style={{
          clipPath: "ellipse(100% 85% at 50% 15%)",
        }}
      >
        {/* Cars Background Image (Static) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${carsBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          {/* OUR SERVICES Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-6 bg-amber-400 -skew-x-[20deg] rounded-sm" />
              <span className="w-2 h-6 bg-amber-400 -skew-x-[20deg] rounded-sm" />
              <span className="w-2 h-6 bg-white -skew-x-[20deg] rounded-sm" />
            </div>

            <span className="text-lg md:text-xl font-black tracking-widest text-white uppercase px-2">
              {t.services?.heading || "OUR SERVICES"}
            </span>

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-6 bg-white skew-x-[20deg] rounded-sm" />
              <span className="w-2 h-6 bg-amber-400 skew-x-[20deg] rounded-sm" />
              <span className="w-3 h-6 bg-amber-400 skew-x-[20deg] rounded-sm" />
            </div>
          </div>

          {/* Subheading */}
          <h2 ref={titleRef} className="text-3xl md:text-5xl font-semibold text-white mb-2 leading-tight tracking-wide">
            {t.services?.everyRideHeading || "Every Ride One Platform"}
          </h2>

          {/* Navigation Buttons */}
          <div ref={tabsRef} className="mt-8 flex flex-wrap justify-center gap-2 bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-amber-400 text-gray-950 shadow-md"
                    : "text-white hover:bg-white/15"
                }`}
              >
                {t.services?.[tab] || tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Cards Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 md:px-12 -mt-28 md:-mt-36">
        <div ref={cardContainerRef}>
          {activeTab === "rides" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {rideCards.map((card, index) => {
                const isOuterCard = index === 0 || index === 3;

                return (
                  <div
                    key={card.key}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className={`group bg-white rounded-t-[120px] rounded-b-3xl overflow-hidden border border-gray-100 shadow-xl flex flex-col items-center text-center p-6 h-full min-h-[400px] ${
                      isOuterCard ? "lg:-translate-y-6" : "lg:translate-y-8"
                    }`}
                  >
                    {/* Arch Image Box with Hover Transition */}
                    <div className="w-full h-44 shrink-0 rounded-t-[100px] rounded-b-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 p-5 flex items-center justify-center overflow-hidden mb-6 transition-colors duration-500 group-hover:bg-blue-600">
                      <img
                        src={card.icon}
                        alt={t.services?.[card.key]}
                        className="h-20 w-auto object-contain transition-all duration-500 group-hover:translate-x-3 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="flex-1 flex flex-col justify-start items-center w-full">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {t.services?.[card.key]}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed px-1">
                        {t.services?.[`${card.key}Desc`]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "business" && (
            <TabPanel
              title={t.business?.heading}
              desc={t.business?.desc}
              btnLabel={t.business?.learnMore}
              image={businessImg}
            />
          )}

          {activeTab === "club" && (
            <TabPanel
              title={t.club?.heading}
              desc={t.club?.desc}
              btnLabel={t.business?.learnMore}
              image={clubImg}
            />
          )}

          {activeTab === "vms" && (
            <TabPanel
              title={t.vms?.heading}
              desc={t.vms?.desc}
              btnLabel={t.business?.learnMore}
              image={vmsImg}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function TabPanel({ title, desc, btnLabel, image }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-xl mt-12 min-h-[380px] md:min-h-[420px] flex items-center">
      {/* Right Side Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-0 overflow-hidden">
        <img 
          src={image} 
          alt="" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/20" />
      </div>

      {/* Left Side Content */}
      <div className="relative z-10 w-full md:w-3/5 p-8 md:p-12 lg:p-16">
        <div className="max-w-md">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
            {desc}
          </p>
          
          <button
            type="button"
            className="group relative flex cursor-pointer items-center justify-center space-x-3 overflow-hidden rounded-xl border-2 border-white bg-blue-600 px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_2px_0_2px_#1d4ed8] transition-all duration-300 before:absolute before:top-1/2 before:h-[120%] before:w-[100px] before:-translate-x-[180%] before:-translate-y-1/2 before:skew-x-[30deg] before:bg-white/40 before:transition-all before:duration-500 before:content-[''] group-hover:before:translate-x-[220%] group-hover:before:delay-100 hover:bg-amber-400 hover:text-gray-950 hover:shadow-[0_2px_0_2px_#d97706] active:scale-90 sm:text-base"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>{btnLabel || "Learn More"}</span>
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}