import React from "react";
import packimg from "../../../assets/products/package.png";
import userimg from "../../../assets/products/user.png";
import rocketimg from "../../../assets/products/rocket.png";

const Options = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-syne font-extrabold text-4xl text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-sm text-gray-400">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm relative flex flex-col items-center text-center">
            <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
              01
            </span>
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <img src={userimg} alt="User" />
            </div>
            <h3 className="font-syne font-bold text-lg text-gray-900 mb-2">
              Create Account
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm relative flex flex-col items-center text-center">
            <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
              02
            </span>
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <img src={packimg} alt="Package" />
            </div>
            <h3 className="font-syne font-bold text-lg text-gray-900 mb-2">
              Choose Products
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm relative flex flex-col items-center text-center">
            <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
              03
            </span>
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <img src={rocketimg} alt="Rocket" />
            </div>
            <h3 className="font-syne font-bold text-lg text-gray-900 mb-2">
              Start Creating
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Options;
