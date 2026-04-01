import React from "react";

const Simple = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-syne font-extrabold text-4xl text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-gray-400">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
            <h3 className="font-syne font-bold text-lg text-gray-900 mb-1">
              Starter
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              Perfect for getting started
            </p>
            <div className="mb-6">
              <span className="font-syne font-extrabold text-4xl text-gray-900">
                $0
              </span>
              <span className="text-sm text-gray-400">/Month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-purple-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full text-sm font-semibold bg-linear-to-r from-purple-600 to-blue-500 text-white rounded-full py-3">
              Get Started Free
            </button>
          </div>

          <div className="bg-linear-to-r from-purple-600 to-blue-500 rounded-2xl p-8 shadow-xl flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            </div>
            <h3 className="font-syne font-bold text-lg text-white mb-1">Pro</h3>
            <p className="text-xs text-purple-200 mb-5">
              Best for professionals
            </p>
            <div className="mb-6">
              <span className="font-syne font-extrabold text-4xl text-white">
                $29
              </span>
              <span className="text-sm text-purple-200">/Month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full text-sm font-semibold text-purple-600 bg-white hover:bg-purple-50 rounded-full py-3 transition-colors duration-200">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
            <h3 className="font-syne font-bold text-lg text-gray-900 mb-1">
              Enterprise
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              For teams and businesses
            </p>
            <div className="mb-6">
              <span className="font-syne font-extrabold text-4xl text-gray-900">
                $99
              </span>
              <span className="text-sm text-gray-400">/Month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-purple-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-blue-500 rounded-full py-3">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Simple;
