import React, { useState, useRef, useEffect } from "react";
import {
  Car,
  MapPin,
  Calendar,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Clock,
  Plus,
  Minus,
} from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

const CAR_OPTIONS = [
  {
    id: "sedan-premium",
    name: "Sedan Premium",
    seats: "4 Seats",
    img: "https://cdn-icons-png.flaticon.com/512/3202/3202003.png",
  },
  {
    id: "sedan",
    name: "Sedan Standard",
    seats: "4 Seats",
    img: "https://cdn-icons-png.flaticon.com/512/55/55283.png",
  },
  {
    id: "noah",
    name: "Noah Microbus",
    seats: "7 Seats",
    img: "https://cdn-icons-png.flaticon.com/512/2962/2962312.png",
  },
  {
    id: "hiace",
    name: "HiAce Van",
    seats: "11 Seats",
    img: "https://cdn-icons-png.flaticon.com/512/3774/3774278.png",
  },
];

const HeroBookingForm = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("carRental");
  const [tripType, setTripType] = useState("oneWay");
  const [selectedCar, setSelectedCar] = useState(null);
  const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);
  const [hours, setHours] = useState(2);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-20 mt-6 rounded-3xl border border-gray-100/80 bg-white p-5 shadow-[0_0_50px_rgba(0,0,0,0.12)] sm:p-7 lg:p-8">
      {/* Category Tabs */}
      <div className="mb-6 flex items-center space-x-3 border-b border-gray-100 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("carRental")}
          className={`cursor-pointer rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
            activeTab === "carRental"
              ? "bg-gray-950 text-white shadow-md"
              : "bg-transparent text-gray-600 hover:bg-gray-100/60 hover:text-gray-950"
          }`}
        >
          {t.hero.tabs.carRental}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("airportRental")}
          className={`cursor-pointer rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
            activeTab === "airportRental"
              ? "bg-gray-950 text-white shadow-md"
              : "bg-transparent text-gray-600 hover:bg-gray-100/60 hover:text-gray-950"
          }`}
        >
          {t.hero.tabs.airportRental}
        </button>
      </div>

      {/* Main Grid Section */}
      <div className="space-y-6 border-b border-gray-100 pb-6">
        {/* Row 1: Primary Input Fields */}
        <div className="grid grid-cols-1 gap-6 divide-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x">
          {/* Field 1: Choose Car Custom Dropdown */}
          <div className="relative lg:pr-4" ref={dropdownRef}>
            <label className="mb-1.5 flex items-center space-x-2 text-xs font-bold tracking-wide text-gray-800 uppercase">
              <Car className="h-4 w-4 text-gray-700" />
              <span>
                {t.hero.form.chooseCar} <span className="text-red-500">*</span>
              </span>
            </label>

            <button
              type="button"
              onClick={() => setIsCarDropdownOpen(!isCarDropdownOpen)}
              className="flex w-full cursor-pointer items-center justify-between py-2 text-left text-sm font-semibold text-gray-900 focus:outline-none"
            >
              <span
                className={
                  selectedCar
                    ? "font-bold text-gray-900"
                    : "font-medium text-gray-400"
                }
              >
                {selectedCar
                  ? selectedCar.name
                  : t.hero.form.chooseCarPlaceholder}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${isCarDropdownOpen ? "rotate-180 text-blue-600" : ""}`}
              />
            </button>

            {isCarDropdownOpen && (
              <div className="animate-in fade-in slide-in-from-top-2 absolute top-full left-0 z-50 mt-2 w-72 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                <div className="custom-scrollbar max-h-60 space-y-1 overflow-y-auto pr-1">
                  {CAR_OPTIONS.map((car) => (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => {
                        setSelectedCar(car);
                        setIsCarDropdownOpen(false);
                      }}
                      className={`flex w-full cursor-pointer items-center space-x-3 rounded-xl p-2.5 text-left transition-all ${
                        selectedCar?.id === car.id
                          ? "border border-blue-200 bg-blue-50/80"
                          : "border border-transparent hover:bg-gray-50"
                      }`}
                    >
                      <img
                        src={car.img}
                        alt={car.name}
                        className="h-10 w-10 rounded-lg bg-gray-100/60 object-contain p-1"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-gray-900">
                          {car.name}
                        </p>
                        <p className="text-[11px] font-medium text-gray-400">
                          {car.seats}
                        </p>
                      </div>
                      {selectedCar?.id === car.id && (
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Field 2: Pickup Location */}
          <div className="lg:px-4">
            <label className="mb-1.5 flex items-center space-x-2 text-xs font-bold tracking-wide text-gray-800 uppercase">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span>
                {t.hero.form.pickupLocation}{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder={t.hero.form.pickupPlaceholder}
              className="w-full bg-transparent py-2 text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Field 3: Drop-off Location */}
          {tripType !== "hourly" ? (
            <div className="lg:px-4">
              <label className="mb-1.5 flex items-center space-x-2 text-xs font-bold tracking-wide text-gray-800 uppercase">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>
                  {t.hero.form.dropoffLocation}{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder={t.hero.form.dropoffPlaceholder}
                className="w-full bg-transparent py-2 text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
          ) : (
            <div className="lg:px-4">
              <label className="mb-1.5 flex items-center space-x-2 text-xs font-bold tracking-wide text-gray-800 uppercase">
                <Calendar className="h-4 w-4 text-gray-700" />
                <span>
                  {t.hero.form.pickupDate}{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder={t.hero.form.datePlaceholder}
                className="w-full bg-transparent py-2 text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
          )}

          {/* Field 4: Pickup Date / Select Hours Counter */}
          {tripType !== "hourly" ? (
            <div className="lg:pl-4">
              <label className="mb-1.5 flex items-center space-x-2 text-xs font-bold tracking-wide text-gray-800 uppercase">
                <Calendar className="h-4 w-4 text-gray-700" />
                <span>
                  {t.hero.form.pickupDate}{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder={t.hero.form.datePlaceholder}
                className="w-full bg-transparent py-2 text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
          ) : (
            <div className="lg:pl-4">
              <label className="mb-1.5 flex items-center space-x-2 text-xs font-bold tracking-wide text-gray-800 uppercase">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>
                  {t.hero.form.selectHours}{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <div className="flex items-center space-x-3 py-1">
                <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50/50 p-1">
                  <button
                    type="button"
                    onClick={() => setHours((prev) => Math.max(2, prev - 1))}
                    disabled={hours <= 2}
                    className="cursor-pointer rounded p-1 text-gray-500 transition-all hover:bg-white hover:text-gray-900 disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold whitespace-nowrap text-gray-900">
                    {hours} {hours === 1 ? "hour" : "hours"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setHours((prev) => prev + 1)}
                    className="cursor-pointer rounded p-1 text-gray-500 transition-all hover:bg-white hover:text-gray-900"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <p className="mt-1 text-[11px] text-red-400">
                {t.hero.form.minHoursNotice}
              </p>
            </div>
          )}
        </div>

        {tripType === "roundWay" && (
          <div className="animate-in fade-in slide-in-from-top-1 border-t border-gray-100/80 pt-4">
            <div className="max-w-xs">
              <label className="mb-1.5 flex items-center space-x-2 text-xs font-bold tracking-wide text-gray-800 uppercase">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>
                  {t.hero.form.returnDate}{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder={t.hero.form.datePlaceholder}
                className="w-full bg-transparent py-2 text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions Row */}
      <div className="flex flex-col items-center justify-between gap-4 pt-5 sm:flex-row">
        <div className="flex w-full items-center space-x-2 overflow-x-auto rounded-2xl border border-gray-100/80 bg-gray-50/80 p-1.5 sm:w-auto">
          {["oneWay", "roundWay", "hourly"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setTripType(type)}
              className={`flex cursor-pointer items-center space-x-2 rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                tripType === type
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-600 hover:bg-gray-200/50 hover:text-gray-900"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${tripType === type ? "bg-white" : "bg-gray-300"}`}
              />
              <span>{t.hero.tripTypes[type]}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="group relative flex cursor-pointer items-center justify-center space-x-3 overflow-hidden rounded-xl border-2 border-white bg-blue-600 px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_2px_0_2px_#1d4ed8] transition-all duration-300 before:absolute before:top-1/2 before:h-[120%] before:w-[100px] before:-translate-x-[180%] before:-translate-y-1/2 before:skew-x-[30deg] before:bg-white/40 before:transition-all before:duration-500 before:content-[''] group-hover:before:translate-x-[220%] group-hover:before:delay-100 hover:bg-amber-400 hover:text-gray-950 hover:shadow-[0_2px_0_2px_#d97706] active:scale-90 sm:text-base"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span>{t.hero.form.continueBtn}</span>
            <ArrowRight className="h-4 w-4 stroke-[3]" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroBookingForm;