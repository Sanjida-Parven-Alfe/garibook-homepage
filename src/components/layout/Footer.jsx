import { useLanguage } from "../../context/LanguageContext";
import DownloadAppBtn from "../common/DownloadAppBtn";

import nrbLogo from "../../assets/images/nrb_no_background.svg";
import link3Logo from "../../assets/images/link3-two.png";
import garibookLogo from "../../assets/images/Garibook_Logo.svg";
import sslLogo from "../../assets/images/ssl.png";
import ctaBgPattern from "../../assets/images/cta-2-bg.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer 
      className="relative bg-black text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ctaBgPattern})` }}
    >
      {/* Adjusted overlay opacity so the background pattern image is clearly visible */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16">
        {/* Top links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h6 className="font-bold mb-5 tracking-wide text-amber-400">garibook</h6>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="/about-us" className="hover:text-white transition">
                  {t.footer?.about}
                </a>
              </li>
              <li>
                <a href="/passenger-speak" className="hover:text-white transition">
                  {t.footer?.reviews}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  {t.footer?.career}
                </a>
              </li>
              <li>
                <a href="/newsrooms" className="hover:text-white transition">
                  {t.footer?.newsroom}
                </a>
              </li>
              <li>
                <a
                  href="https://map.garibook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  {t.footer?.map}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-5 tracking-wide text-amber-400">{t.footer?.servicesHeading}</h6>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  {t.footer?.intercity}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  {t.footer?.airport}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  {t.footer?.hourly}
                </a>
              </li>
              <li>
                <a href="/vehicle-management-system" className="hover:text-white transition">
                  {t.footer?.vms}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-5 tracking-wide text-amber-400">{t.footer?.partnerHeading}</h6>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="/earn-with-garibook" className="hover:text-white transition">
                  {t.footer?.smartDriver}
                </a>
              </li>
              <li>
                <a href="/club" className="hover:text-white transition">
                  {t.footer?.club}
                </a>
              </li>
              <li>
                <a href="/business" className="hover:text-white transition">
                  {t.footer?.business}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-5 tracking-wide text-amber-400">{t.footer?.contactsHeading}</h6>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="mailto:support@garibook.com" className="hover:text-white transition">
                  support@garibook.com
                </a>
              </li>
              <li>Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212</li>
              <li>
                <a href="tel:09678112233" className="hover:text-white transition">
                  +88 09 678 11 22 33
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle: download + partners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 pb-16 border-b border-gray-700/60">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight text-white">
              {t.footer?.downloadHeading}
            </h2>
            {/* Reusable Download App Button */}
            <div>
              <DownloadAppBtn text={t.footer?.downloadApp || "Download App"} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 justify-start lg:justify-around">
            <div>
              <h2 className="text-lg font-bold mb-3 text-white">A Product By</h2>
              <div className="flex items-center gap-3">
                <img src={nrbLogo} alt="NRB Solution Ltd." className="h-16 w-auto" />
                <div>
                  <h5 className="font-semibold text-sm text-gray-200">NRB Solution Ltd.</h5>
                  <a
                    href="https://nrb-solutions.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 text-sm font-bold hover:underline"
                  >
                    <span>{t.footer?.visitWebsite || "Visit Website"}</span>
                    <span> →</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-3 text-white">Powered By</h2>
              <div className="flex items-center gap-3">
                <img src={link3Logo} alt="Link 3 Technologies" className="h-16 w-auto" />
                <div>
                  <h5 className="font-semibold text-sm text-gray-200">Link 3 Technologies</h5>
                  <a
                    href="https://link3.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 text-sm font-bold hover:underline"
                  >
                    <span>{t.footer?.visitWebsite || "Visit Website"}</span>
                    <span> →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-5">
            <img src={garibookLogo} alt="Garibook" className="h-8 w-auto" />
            <a href="/terms-and-conditions" className="text-gray-300 text-sm hover:text-white transition">
              {t.footer?.terms}
            </a>
            <a href="/privacy-policy" className="text-gray-300 text-sm hover:text-white transition">
              {t.footer?.privacy}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-300 text-xs text-center sm:text-left">
            <span>Trade license number: <br className="hidden sm:block" /> TRAD/DNCC/013806/2024</span>
            <span>© 2026 Garibook.com</span>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10">
        <img src={sslLogo} alt="SSL Logo" className="w-full h-auto" />
      </div>
    </footer>
  );
}