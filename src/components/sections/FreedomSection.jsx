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
  { key: "chooseCar", icon: carIcon },
  { key: "chooseDriver", icon: driveIcon },
  { key: "chooseFare", icon: priceIcon },
];

export default function FreedomSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
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
    <section ref={sectionRef} className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          {t.freedom?.heading}
        </h2>

        <div className="rounded-3xl overflow-hidden mb-12">
          <img src={bannerImg} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-start md:justify-items-end">
          {items.map((item, i) => (
            <div
              key={item.key}
              ref={(el) => (cardsRef.current[i] = el)}
              className="text-left"
            >
              <img src={item.icon} alt="" className="h-14 w-auto mb-4" />
              <h5 className="text-lg font-bold text-white mb-1">
                {t.freedom?.[item.key]}
              </h5>
              <p className="text-gray-400 text-sm">
                {t.freedom?.[`${item.key}Desc`]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}