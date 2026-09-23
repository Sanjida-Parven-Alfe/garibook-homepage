import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "../../context/LanguageContext";

import intercityIcon from "../../assets/images/intercity_car_rental.svg";
import rideshareIcon from "../../assets/images/rideshare.svg";
import airportIcon from "../../assets/images/airport_rental.svg";
import hourlyIcon from "../../assets/images/hourly_rental.svg";
import businessImg from "../../assets/images/busines.jpeg";
import clubImg from "../../assets/images/garibook_club.jpg";
import vmsImg from "../../assets/images/vms.png";

const tabs = ["rides", "business", "club", "vms"];

const rideCards = [
  { key: "intercity", icon: intercityIcon },
  { key: "rideshare", icon: rideshareIcon },
  { key: "airport", icon: airportIcon },
  { key: "hourlyRental", icon: hourlyIcon },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("rides");
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t.services?.heading}
        </h2>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.services?.[tab]}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div ref={contentRef}>
          {activeTab === "rides" && (
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {t.services?.everyRideHeading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rideCards.map((card, i) => (
                  <div
                    key={card.key}
                    className={`rounded-2xl p-6 transition-all ${
                      i === 0
                        ? "bg-blue-600 text-white"
                        : "bg-gray-50 text-gray-900"
                    }`}
                  >
                    <img src={card.icon} alt="" className="h-16 w-auto mb-4" />
                    <h5 className="text-lg font-bold mb-2">
                      {t.services?.[card.key]}
                    </h5>
                    <p
                      className={`text-sm ${
                        i === 0 ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {t.services?.[`${card.key}Desc`]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "business" && (
            <TabPanel
              title={t.business?.heading}
              desc={t.business?.desc}
              btnLabel={t.business?.learnMore}
              image={businessImg}
            />
          )}

          {activeTab === "club" && (
            <TabPanel
              title={t.club?.heading}
              desc={t.club?.desc}
              btnLabel={t.business?.learnMore}
              image={clubImg}
            />
          )}

          {activeTab === "vms" && (
            <TabPanel
              title={t.vms?.heading}
              desc={t.vms?.desc}
              btnLabel={t.business?.learnMore}
              image={vmsImg}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function TabPanel({ title, desc, btnLabel, image }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-500 mb-6 leading-relaxed">{desc}</p>
        <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
          {btnLabel} <span>→</span>
        </button>
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}