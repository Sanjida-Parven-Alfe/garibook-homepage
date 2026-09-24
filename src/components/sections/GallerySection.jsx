import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

import airportImg from "../../assets/images/airport_rentals.jpeg";
import familyImg from "../../assets/images/family_trips.webp";
import groupImg from "../../assets/images/group_tour.webp";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { key: "airportRentals", img: airportImg },
  { key: "familyTrips", img: familyImg },
  { key: "longTours", img: groupImg },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const boxRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 max-w-xl">
          {t.gallery?.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.key}
              ref={(el) => (boxRef.current[i] = el)}
              className="relative rounded-2xl overflow-hidden h-72"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 p-5">
                <h4 className="text-white text-xl font-bold drop-shadow">
                  {t.gallery?.[item.key]}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}