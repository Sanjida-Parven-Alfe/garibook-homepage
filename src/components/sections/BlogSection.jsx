import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import bgShape1 from "../../assets/images/bg-shape1.png";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    date: "September 15, 2026",
    titleEn: "How Ride Sharing is Transforming Bangladesh's Urban Transport",
    titleBn: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
    img: "https://garibookadmin.com/admin/assets/images/blogs/6aabc714e2a79.webp",
  },
  {
    date: "September 20, 2026",
    titleEn: "Sylhet Attractions, Food & Accommodation Guide",
    titleBn: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    img: "https://garibookadmin.com/admin/assets/images/blogs/260920175045_g3UDrxr4bz.webp",
  },
  {
    date: "September 20, 2026",
    titleEn: "Naogaon Attractions, Food & Accommodation Guide",
    titleBn: "নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    img: "https://garibookadmin.com/admin/assets/images/blogs/260920175752_kbpbDIIOGX.webp",
  },
];

export default function BlogSection() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Scroll Transition
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

      // 2. Cards Staggered Scroll Transition
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 90, scale: 0.92 },
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
      className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-gray-50/20"
      style={{ backgroundImage: `url(${bgShape1})` }}
    >
      {/* Container aligned with Navbar */}
      <div className="w-full px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight drop-shadow-sm">
              {t.blog?.heading || "Blogs"}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mt-2">
              {t.blog?.desc}
            </p>
          </div>

          <a
            href="/blogs"
            className="group font-extrabold text-slate-900 inline-flex items-center gap-2 hover:text-blue-600 transition-colors text-base md:text-lg"
          >
            <span>{t.blog?.showAll || "Show All Blogs"}</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="cursor-pointer group rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={post.img}
                    alt={lang === "bn" ? post.titleBn : post.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white shadow-md">
                    {post.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-extrabold text-slate-900 text-lg md:text-xl leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {lang === "bn" ? post.titleBn : post.titleEn}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}