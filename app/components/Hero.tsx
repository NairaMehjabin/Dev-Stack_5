"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className="text-[15px] sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium px-2 sm:px-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next project.
            </p>

            <div className="pt-3 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <a
                href="#technologies"
                className="flex-1 sm:flex-none bg-brand-gradient text-white text-[13px] sm:text-base font-semibold px-2 py-3 sm:px-6 sm:py-3.5 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all text-center whitespace-nowrap"
              >
                Explore Technologies
              </a>
              <button
                type="button"
                className="flex-1 sm:flex-none bg-white border border-slate-200 text-slate-700 text-[13px] sm:text-base font-medium px-2 py-3 sm:px-6 sm:py-3.5 rounded-xl hover:bg-slate-50 transition-colors text-center whitespace-nowrap"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 md:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-none">
              <Image
                src="/assets/banner-stack.png"
                alt="3D Development Stack Diagram"
                width={550}
                height={550}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}