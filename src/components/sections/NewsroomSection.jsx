import { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

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
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "next" ? 340 : -340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
            {t.newsroom?.heading}
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("prev")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all"
            >
              ←
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={item.img} alt="" className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs text-gray-400">{item.date}</span>
                <h3 className="font-bold text-gray-900 mt-2 mb-3 line-clamp-2">
                  {lang === "bn" ? item.titleBn : item.titleEn}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  {t.newsroom?.readArticle || "Read Article"} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}