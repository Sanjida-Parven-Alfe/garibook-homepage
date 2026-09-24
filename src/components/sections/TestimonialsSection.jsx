import { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

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
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "next" ? 340 : -340,
        behavior: "smooth",
      });
    }
  };

  const openVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t.testimonials?.heading}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {t.testimonials?.desc}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("prev")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {passengers.map((p, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[300px] flex-shrink-0"
            >
              <div
                onClick={() => openVideo(p.videoId)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={`https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg`}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-blue-600 text-xl ml-1">▶</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-left">
                <h4 className="font-bold text-gray-900">{p.name}</h4>
                <p className="text-gray-500 text-sm font-semibold">
                  {t.testimonials?.[p.positionKey]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}