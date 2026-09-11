"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Build Your Ideal <br />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next project.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#technologies"
                className="bg-brand-gradient text-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5 inline-block"
              >
                Explore Technologies
              </a>
              <button
                type="button"
                className="bg-white border border-slate-200 text-slate-700 text-sm sm:text-base font-medium px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <Image
                src="/assets/banner-stack.png"
                alt="3D Development Stack Diagram"
                width={550}
                height={550}
                priority
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}