import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

import appScreenImg from "../../assets/images/no_commission_app_screen.png";

gsap.registerPlugin(ScrollTrigger);

export default function SmartDriverSection() {
  const { t } = useLanguage();
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
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
    <section ref={sectionRef} className="py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t.smartDriver?.heading}
        </h2>

        <div className="bg-amber-400 rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
          <div className="p-10 md:p-14">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {t.smartDriver?.subheading}
            </h3>

            <a
              href="https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800 transition cursor-pointer"
            >
              <span>{t.smartDriver?.cta || "Download Driver App"}</span>
              <span>→</span>
            </a>
          </div>

          <div ref={imgRef} className="flex justify-center p-6">
            <img
              src={appScreenImg}
              alt="Garibook Smart Driver App"
              className="max-h-96 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}