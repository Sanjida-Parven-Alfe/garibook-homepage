import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";
import DownloadAppBtn from "../common/DownloadAppBtn";

import exploreImg from "../../assets/images/explore.jpeg";
import freedomImg from "../../assets/images/freedom.jpg";
import safeTravelImg from "../../assets/images/safe_travel.svg";
import preferredCarImg from "../../assets/images/prefarred_car.jpg";
import smoothImg from "../../assets/images/smooth.jpg";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { id: 1, img: exploreImg },
  { id: 2, img: freedomImg },
  { id: 3, img: safeTravelImg },
  { id: 4, img: preferredCarImg },
  { id: 5, img: smoothImg },
];

export default function BookingArrivalSection() {
  const { t } = useLanguage();
  const triggerRef = useRef(null);
  const imagesRef = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSlides = slides.length;

      // Set initial states
      imagesRef.current.forEach((imgEl, index) => {
        if (!imgEl) return;
        gsap.set(imgEl, { opacity: index === 0 ? 1 : 0, zIndex: index + 10 });
      });

      // Pinning Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalSlides * 100}%`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * totalSlides),
              totalSlides - 1
            );
            setActiveSlide(index);
          },
        },
      });

      // Smooth Transitions
      imagesRef.current.forEach((imgEl, index) => {
        if (index > 0) {
          tl.to(imgEl, {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
          });
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center py-10"
    >
      <div className="w-full px-4 sm:px-6 md:px-12 mx-auto max-w-7xl h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Hero-style Download App Button */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pr-0 lg:pr-4">
            <div>
              <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-amber-400 uppercase mb-3">
                GARIBOOK EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {t.bookingArrival?.heading ||
                  "From Booking to Arrival It's All in Your Hands"}
              </h2>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Experience absolute freedom, zero hidden costs, and real-time mobility with Garibook's smart app ecosystem.
            </p>

            {/* Reusable Download App Button */}
            <div>
              <DownloadAppBtn text={t.bookingArrival?.downloadApp || "Download App"} />
            </div>
          </div>

          {/* Right Column: Image Stack & Progress Indicator */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  ref={(el) => (imagesRef.current[index] = el)}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <img
                    src={slide.img}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>

            {/* Progress Dots and Counter */}
            <div className="flex items-center justify-between px-2 pt-2">
              <div className="flex items-center space-x-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === i
                        ? "w-8 bg-amber-400"
                        : "w-2.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs md:text-sm font-extrabold tracking-widest text-gray-400">
                0{activeSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}