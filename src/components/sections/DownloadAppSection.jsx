import { useLanguage } from "../../context/LanguageContext";
import appScreenImg from "../../assets/images/app-with-logo.png";

export default function DownloadAppSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="bg-blue-600 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left text content */}
          <div className="p-10 md:p-16 text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {t.downloadApp?.heading}
            </h2>
            <p className="text-blue-100 mb-8">{t.downloadApp?.subtext}</p>

            <a
              href="https://onelink.to/gbweb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 font-bold text-gray-900 hover:bg-amber-500 transition cursor-pointer"
            >
              <span>{t.downloadApp?.cta || "Download App"}</span>
              <span>→</span>
            </a>
          </div>

          {/* Right phone image */}
          <div className="flex justify-center lg:justify-end items-end h-full">
            <img
              src={appScreenImg}
              alt="Garibook App"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}