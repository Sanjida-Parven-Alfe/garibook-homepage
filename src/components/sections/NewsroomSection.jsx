import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import bgShape1 from "../../assets/images/bg-shape1.png";

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    date: "December 05, 2024",
    titleEn: "Garibook: A New Path to Freedom in Bangladesh's Intercity Travel",
    titleBn: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
    img: "https://garibookadmin.com/admin/assets/images/newsrooms/241205180904_liOX1GKSQy.webp",
    link: "https://www.prothomalo.com/bangladesh/9657q54847",
  },
  {
    date: "December 04, 2024",
    titleEn: 'Digital App to offer "Chander Gari"',
    titleBn: "ডিজিটাল অ্যাপে মিলবে 'চান্দের গাড়ি'",
    img: "https://garibookadmin.com/admin/assets/images/newsrooms/67516d3a81863.jpeg",
    link: "https://epaper.dhakatribune.com/epaper/details/115797",
  },
  {
    date: "January 29, 2025",
    titleEn: "Garibook and Shukhi partner for driver healthcare",
    titleBn: "গাড়িবুক ও সুখীর চুক্তি – স্মার্ট চালক ও পরিবারের জন্য উন্নত স্বাস্থ্যসেবা",
    img: "https://garibookadmin.com/admin/assets/images/newsrooms/250129124335_Df1YeHs6Nk.png",
    link: "https://www.kalerkantho.com/online/corporatecorner/2025/01/28/1473908",
  },
  {
    date: "July 16, 2026",
    titleEn: "Replacing ride-hailing commissions with fixed subscriptions",
    titleBn: "রাইড-হেইলিং কমিশনের বদলে নির্দিষ্ট সাবস্ক্রিপশন চালু",
    img: "https://garibookadmin.com/admin/assets/images/newsrooms/6a5884de4faa5.gif",
    link: "https://www.techinasia.com/replacing-ridehailing-commissions-fixed-subscriptions",
  },
];

export default function NewsroomSection() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Clear Heading Scroll In/Out Animation
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

      // 2. Clear Slider Content Scroll In/Out Animation
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 90, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // 3. Infinite Seamless Auto Slider
      const track = trackRef.current;
      if (track) {
        const tween = gsap.to(track, {
          xPercent: -50,
          ease: "none",
          duration: 25,
          repeat: -1,
        });

        const container = sliderRef.current;
        if (container) {
          container.addEventListener("mouseenter", () => tween.pause());
          container.addEventListener("mouseleave", () => tween.play());
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const duplicatedItems = [...newsItems, ...newsItems];

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-gray-50/20"
      style={{ backgroundImage: `url(${bgShape1})` }}
    >
      <div className="w-full px-4 sm:px-6 md:px-12">
        <div ref={headingRef} className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight drop-shadow-sm max-w-2xl">
            {t.newsroom?.heading || "We Featured by Top News Platforms"}
          </h2>
        </div>

        <div ref={sliderRef} className="w-full overflow-hidden py-2">
          <div
            ref={trackRef}
            className="flex gap-6 w-max"
            style={{ willChange: "transform" }}
          >
            {duplicatedItems.map((item, i) => (
              <div
                key={i}
                className="w-[300px] sm:w-[350px] md:w-[380px] flex-shrink-0 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image & Date Badge */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white shadow-md">
                    {item.date}
                  </div>
                </div>

                {/* Content & Link */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <h3 className="font-extrabold text-slate-900 text-lg md:text-xl leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {lang === "bn" ? item.titleBn : item.titleEn}
                  </h3>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 group-hover:text-amber-500 transition-colors pt-2 border-t border-gray-100/80"
                  >
                    <span>{t.newsroom?.readArticle || "Read Article"}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}