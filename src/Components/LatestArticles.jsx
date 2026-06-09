import React from 'react';
import { HiOutlineUser, HiOutlineClock, HiOutlineHeart, HiOutlineChatAlt, HiArrowRight } from 'react-icons/hi';
import { articlesData } from '../data/blogData'; 

export default function LatestArticles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20"  id='articles'>
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 dark:text-white">Latest Articles</h2>
          <p className="text-gray-500 dark:text-gray-300">Stay updated with fresh insights and expert perspectives</p>
        </div>
        <a href="#" className="flex items-center space-x-1 text-emerald-800 font-semibold hover:underline text-sm">
          <span>View all articles</span>
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articlesData.map((art, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col dark:border-gray-700 dark:bg-gray-800">
            <div className="h-52 relative bg-gray-100">
              <img src={art.img} alt={art.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-black/40 text-white backdrop-blur-sm px-2.5 py-1 rounded text-xs">
                {art.tag}
              </span>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-800 cursor-pointer line-clamp-2 dark:text-white">
                  {art.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed dark:text-gray-300">{art.desc}</p>
              </div>

              <div>
                <div className="flex items-center text-xs text-gray-400 space-x-4 mb-4  dark:text-gray-300">
                  <span className="flex items-center"><HiOutlineUser className="mr-1.5 w-4 h-4" /> {art.author}</span>
                  <span className="flex items-center"><HiOutlineClock className="mr-1.5 w-4 h-4" /> {art.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 text-xs text-gray-400 dark:border-gray-700 dark:text-gray-300">
                  <div className="flex space-x-4">
                    <span className="flex items-center cursor-pointer hover:text-red-500 gap-1">
                      <HiOutlineHeart className="w-4 h-4" /> {art.likes}
                    </span>
                    <span className="flex items-center cursor-pointer hover:text-blue-500 gap-1">
                      <HiOutlineChatAlt className="w-4 h-4" /> {art.comments}
                    </span>
                  </div>
                  <span>{art.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}