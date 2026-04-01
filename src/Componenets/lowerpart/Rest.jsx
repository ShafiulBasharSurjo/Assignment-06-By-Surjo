import React from "react";

const Rest = () => {
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
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
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
            <button className="w-full text-sm font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-50 rounded-full py-3 transition-colors duration-200">
              Get Started Free
            </button>
          </div>

          <div className="bg-purple-600 rounded-2xl p-8 shadow-xl flex flex-col relative">
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
            <button className="w-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-full py-3 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-purple-700 to-purple-500 py-20 px-[5%] text-center">
        <h2 className="font-syne font-extrabold text-4xl text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm text-purple-200 leading-relaxed mb-8">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trail today.
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <button className="text-sm font-semibold text-white border-2 border-white hover:bg-white hover:text-purple-600 rounded-full px-7 py-3 transition-all duration-200">
            Explore Products
          </button>
          <button className="text-sm font-semibold text-purple-600 bg-white hover:bg-purple-50 rounded-full px-7 py-3 transition-all duration-200">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>
      <footer className="bg-[#0f172a] text-white px-[5%] pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-syne font-extrabold text-xl mb-3">DigiTools</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Templates", "Integrations"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Help Center", "Community", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Social Links
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
export default Rest;
