import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import airportImg from "../../assets/images/airport_rentals.jpeg";
import familyImg from "../../assets/images/family_trips.webp";
import groupImg from "../../assets/images/group_tour.webp";
import bgShape1 from "../../assets/images/bg-shape1.png";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const midColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [leftColRef.current, midColRef.current, rightColRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
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
      className="relative w-full overflow-hidden py-16 md:py-24 bg-cover bg-center bg-no-repeat bg-gray-50/30"
      style={{ backgroundImage: `url(${bgShape1})` }}
    >
      <div className="w-full px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
          <div ref={leftColRef} className="lg:col-span-4 flex flex-col gap-6 h-[460px] lg:h-[500px] justify-between">
          
            <div className="relative rounded-3xl overflow-hidden h-1/2 shadow-md group border border-gray-100/80 bg-white">
              <img
                src={airportImg}
                alt={t.gallery?.airportRentals || "Airport Rentals"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 p-5 bg-gradient-to-b from-black/60 to-transparent w-full">
                <h4 className="text-white text-lg font-bold drop-shadow">
                  {t.gallery?.airportRentals || "Airport Rentals"}
                </h4>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-1/2 shadow-md group border border-gray-100/80 bg-white">
              <img
                src={groupImg}
                alt={t.gallery?.longTours || "Long Tours"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 p-5 bg-gradient-to-b from-black/60 to-transparent w-full">
                <h4 className="text-white text-lg font-bold drop-shadow">
                  {t.gallery?.longTours || "Long Tours"}
                </h4>
              </div>
            </div>
          </div>

          <div ref={midColRef} className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden h-[460px] lg:h-[500px] shadow-xl group border border-gray-100/80 bg-white">
              <img
                src={familyImg}
                alt={t.gallery?.familyTrips || "Family Trips"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 p-6 bg-gradient-to-b from-black/60 to-transparent w-full">
                <h4 className="text-white text-xl font-bold drop-shadow">
                  {t.gallery?.familyTrips || "Family Trips"}
                </h4>
              </div>
            </div>
          </div>

          <div ref={rightColRef} className="lg:col-span-4 flex flex-col justify-center space-y-4 pl-0 lg:pl-2">

            <h3 className="text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 leading-[1.18] tracking-tight drop-shadow-sm">
              {t.gallery?.heading || "More Than Miles — We Bring People Together"}
            </h3>

            <div className="pt-1">
              <Quote className="w-12 h-12 text-slate-300 stroke-[1.5] scale-x-[-1]" />
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              {t.gallery?.quoteDesc ||
                '"Quick and easy booking! I needed a ride to the airport at 5 AM, and the driver arrived on time. The car was clean, and the ride was smooth. Definitely my go-to taxi service from now on!"'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}