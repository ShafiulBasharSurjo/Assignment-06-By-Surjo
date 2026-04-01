import React from "react";
import heroimg from "../../../assets/products/banner.png";
const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-[5%] py-16 md:py-20 min-h-[calc(100vh-70px)] gap-10 relative overflow-hidden bg-white">
        <div className="absolute top-[-10%] right-[-5%] w-150 h-150 rounded-full bg-purple-300/20 blur-3xl pointer-events-none"></div>

        <div className="flex-1 max-w-130 z-10">
          <div className="inline-flex items-center gap-2 text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="font-syne font-extrabold text-5xl md:text-6xl leading-[1.08] tracking-tight text-gray-900 mb-5">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="text-sm text-gray-500 leading-relaxed max-w-105 mb-8">
            Access premium AI tools, design assets, templates, and productivity
            software — all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-full px-6 py-3 shadow-lg shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5">
              Explore Products
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-800 border border-gray-200 hover:border-purple-400 rounded-full px-5 py-3 transition-all duration-200 hover:-translate-y-0.5">
              <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                <svg
                  viewBox="0 0 10 12"
                  className="w-2.5 fill-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L10 6L0 12V0Z" />
                </svg>
              </div>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-135 z-10 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/40">
            <img src={heroimg} alt="" className="w-full h-105 object-cover" />
          </div>
        </div>
      </section>

      <div className="bg-[#7C3AED] px-[5%] py-8 flex flex-wrap items-center justify-around gap-6">
        <div className="text-center text-white flex flex-col gap-1">
          <span className="font-syne font-extrabold text-4xl tracking-tight leading-none">
            50K+
          </span>
          <span className="text-xs font-light opacity-70 tracking-wide">
            Active Users
          </span>
        </div>

        <div className="w-px h-10 bg-white/30"></div>

        <div className="text-center text-white flex flex-col gap-1">
          <span className="font-syne font-extrabold text-4xl tracking-tight leading-none">
            200+
          </span>
          <span className="text-xs font-light opacity-70 tracking-wide">
            Premium Tools
          </span>
        </div>

        <div className="w-px h-10 bg-white/30"></div>

        <div className="text-center text-white flex flex-col gap-1">
          <span className="font-syne font-extrabold text-4xl tracking-tight leading-none">
            4.9
          </span>
          <span className="text-xs font-light opacity-70 tracking-wide">
            Rating
          </span>
        </div>
      </div>
    </>
  );
};
export default Hero;
