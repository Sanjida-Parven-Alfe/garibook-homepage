import { useLanguage } from "../../context/LanguageContext";

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

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t.blog?.heading || "Blogs"}
            </h2>
            <p className="text-gray-500">{t.blog?.desc}</p>
          </div>

          <a
            href="/blogs"
            className="font-bold text-gray-900 inline-flex items-center gap-2 hover:text-blue-600 transition"
          >
            <span>{t.blog?.showAll || "Show All"}</span>
            <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <div key={i} className="cursor-pointer group">
              <div className="rounded-2xl overflow-hidden mb-3">
                <img
                  src={post.img}
                  alt={lang === "bn" ? post.titleBn : post.titleEn}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-xs text-gray-400">{post.date}</span>
              <h5 className="font-bold text-gray-900 mt-2 line-clamp-2 group-hover:text-blue-600 transition">
                {lang === "bn" ? post.titleBn : post.titleEn}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}