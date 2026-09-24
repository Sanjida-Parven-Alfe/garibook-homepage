import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Play } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import bgShape2 from "../../assets/images/bg-shape2.png";

gsap.registerPlugin(ScrollTrigger);

const passengers = [
  {
    videoId: "JsBwaJ_VIcA",
    name: "Atif Haider",
    positionKey: "banker",
  },
  {
    videoId: "CsxeEof1T3M",
    name: "Mohammad Habibur Rahman",
    positionKey: "banker",
  },
  {
    videoId: "8ma9XEGhi5s",
    name: "Sadia Afrin",
    positionKey: "serviceHolder",
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // GSAP Scroll Up/Down Transitions
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Fade & Slide Transition
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
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

      // 2. Video Cards Staggered Transition
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 90, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-gray-50/30"
      style={{ backgroundImage: `url(${bgShape2})` }}
    >
      <div className="w-full px-4 sm:px-6 md:px-12">
        {/* Heading Section */}
        <div ref={headingRef} className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm">
            {t.testimonials?.heading || "Our Passengers Speak For Us"}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            {t.testimonials?.desc ||
              "Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip."}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {passengers.map((p, i) => (
            <div key={i} className="w-full group">
              {/* Video Thumbnail Box */}
              <div
                onClick={() => setSelectedVideo(p.videoId)}
                className="relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-slate-900 h-60 sm:h-64"
              >
                <img
                  src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  {/* Red Play Button */}
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Passenger Details */}
              <div className="mt-4 px-1">
                <h4 className="text-xl font-extrabold text-slate-900">
                  {p.name}
                </h4>
                <p className="text-slate-500 text-sm font-semibold mt-0.5">
                  {t.testimonials?.[p.positionKey] || p.positionKey}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Center Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Iframe */}
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Garibook Passenger Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedVideo(null)}
          />
        </div>
      )}
    </section>
  );
}