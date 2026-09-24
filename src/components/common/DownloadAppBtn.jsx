import { ArrowRight } from "lucide-react";

export default function DownloadAppBtn({ text = "Download App", className = "" }) {
  return (
    <a
      href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
      target="_blank"
      rel="noreferrer"
      className={`group relative inline-block cursor-pointer border-none bg-transparent p-1.5 text-sm font-bold tracking-wider uppercase transition-all duration-150 ease-linear outline-none before:absolute before:top-0 before:right-0 before:left-0 before:block before:h-[calc(50%-5px)] before:border before:border-b-0 before:border-amber-300 before:transition-all before:duration-150 before:content-[''] after:absolute after:right-0 after:bottom-0 after:left-0 after:block after:h-[calc(50%-5px)] after:border after:border-t-0 after:border-amber-300 after:transition-all after:duration-150 after:content-[''] active:scale-95 ${className}`}
    >
      <span className="relative block overflow-hidden bg-amber-400 px-7 py-3.5 text-gray-950 shadow-[inset_0px_0px_0px_1px_transparent] before:absolute before:top-0 before:left-0 before:block before:h-0.5 before:w-0.5 before:bg-amber-400 before:content-[''] after:absolute after:right-0 after:bottom-0 after:block after:h-1 after:w-1 after:bg-amber-400 after:transition-all after:duration-200 after:content-[''] group-hover:after:bg-white">
        {/* Animated Blue Background Sweep */}
        <span className="absolute top-0 -bottom-[1px] -left-2 block w-0 -skew-x-[15deg] bg-blue-600 transition-all duration-300 ease-linear group-hover:w-[calc(100%+15px)]" />

        {/* Content */}
        <span className="relative z-10 flex items-center space-x-3 font-bold tracking-wider text-gray-950 transition-colors duration-200 group-hover:text-white">
          <span>{text}</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
        </span>
      </span>
    </a>
  );
}