import React from 'react';
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi';

export default function Newsletter() {
  return (
    <section>
      <div className="bg-emerald-800  p-20 text-center text-white dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Opportunity to Learn</h2>
        <p className="text-emerald-100 text-sm md:text-base max-w-xl mx-auto mb-8">
          Subscribe to our newsletter and receive weekly curated articles, learning tips, and exclusive resources directly to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-emerald-300">
              <HiOutlineMail className="w-5 h-5" />
            </span>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full pl-10 pr-4 py-3 bg-emerald-900/40 border border-emerald-700/60 rounded-xl text-white placeholder-emerald-300 focus:outline-none focus:border-emerald-400 text-sm dark:bg-gray-800"
            />
          </div>
          <button className="w-full sm:w-auto bg-white text-emerald-900 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 text-sm flex items-center justify-center space-x-1 whitespace-nowrap cursor-pointer">
            <span>Subscribe</span>
            <HiArrowRight className="w-4 h-4" />
          </button>
        </form>
        
        <p className="text-xs text-emerald-200/70">No spam, just valuable content. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}