import { useLanguage } from "../../context/LanguageContext";

import exploreImg from "../../assets/images/explore.jpeg";
import freedomImg from "../../assets/images/freedom.jpg";
import safeTravelImg from "../../assets/images/safe_travel.svg";
import preferredCarImg from "../../assets/images/prefarred_car.jpg";
import smoothImg from "../../assets/images/smooth.jpg";

export default function BookingArrivalSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            {t.bookingArrival?.heading}
          </h2>

          <a
            href="https://onelink.to/gbweb"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition w-fit"
          >
            {t.bookingArrival?.downloadApp || "Download App"} →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <img src={exploreImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={freedomImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={safeTravelImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={preferredCarImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={smoothImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}