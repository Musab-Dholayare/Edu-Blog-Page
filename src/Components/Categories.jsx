import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { categoriesData } from '../data/blogData'; 

export default function Categories() {
  return (
    <section className="bg-[#F6F5F0] py-16 px-6 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Popular Categories</h2>
            <p className="text-gray-500 dark:text-gray-300">Explore our diverse range of educational content</p>
          </div>
          <a href="#" className="flex items-center space-x-1 text-emerald-800 font-semibold hover:underline text-sm pr-1">
            <span >View all articles</span>
            <HiArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoriesData.map((cat, i) => {
            const CategoryIcon = cat.icon; 
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow relative dark:bg-gray-800  dark:border-gray-700">
                <span className="absolute top-6 right-6 text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">
                  {cat.count}
                </span>
                
                <div className="w-fit mb-4">
                  <span className={`p-3 rounded-xl block ${cat.bgClass}`}>
                    <CategoryIcon className="w-6 h-6" />
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">{cat.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed dark:text-gray-300 ">{cat.desc}</p>
                <a href="#" className="text-emerald-800 text-sm font-semibold flex items-center space-x-1 hover:underline">
                  <span>Explore category</span>
                  <HiArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}