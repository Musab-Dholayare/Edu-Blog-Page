import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="bg-[#f8f8f5] dark:bg-gray-900 py-16 lg:py-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HiOutlineSparkles className="w-4 h-4" />
            <span>Welcome to Learning</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            Expand Your
            <br />
            Knowledge,
            <br />
            Transform Your
            <br />
            Future
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-300 leading-8 max-w-xl mb-10">
            Discover expertly crafted articles on education, learning
            strategies, career development, and personal growth.
            Join thousands of learners worldwide.
          </p>

          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
              Trending topics:
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-[#EBE2E4] dark:bg-gray-800 dark:text-white px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Learning Skills
              </span>

              <span className="bg-[#EBE2E4] dark:bg-gray-800 dark:text-white px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Career Growth
              </span>

              <span className="bg-[#EBE2E4] dark:bg-gray-800 dark:text-white px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Teaching Tips
              </span>
            </div>
          </div>

          <div className="flex gap-16 pt-4">
            <div>
              <h2 className="text-4xl font-bold text-emerald-800">
                1200+
              </h2>

              <p className="text-gray-500 dark:text-gray-300 mt-1">
                Articles Published
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-emerald-800">
                50K+
              </h2>

              <p className="text-gray-500 dark:text-gray-300 mt-1">
                Community Members
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Students Learning"
              className="w-full h-[620px] object-cover"
            />
          </div>

          <div className="absolute top-8 right-[-25px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 w-[220px]">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">
              Expert Authors
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
              Learn from industry professionals
            </p>
          </div>

          <div className="absolute bottom-8 left-[-25px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 w-[220px]">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">
              Curated Topics
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
              Handpicked resources for you
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}