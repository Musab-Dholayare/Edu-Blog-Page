import React from 'react';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-gray-400 text-sm pt-16 pb-8 px-6 dark:bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-12 mb-8">
        {/* About column */}
        <div>
          <div className="flex items-center space-x-2 text-white font-bold text-xl mb-4">
            <span className="p-1.5 bg-emerald-800 text-white rounded-md">
              <HiOutlineAcademicCap className="w-5 h-5" />
            </span>
            <span>EduBlog</span>
          </div>
          <p className="text-gray-500 leading-relaxed mb-6">
            Empowering learners and educators worldwide through quality educational content and resources.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 text-base">
            <a href="#" className="hover:text-white p-2 bg-gray-900 rounded-lg hover:bg-emerald-800 transition-colors dark:bg-gray-800"><FaFacebookF /></a>
            <a href="#" className="hover:text-white p-2 bg-gray-900 rounded-lg hover:bg-emerald-800 transition-colors dark:bg-gray-800"><FaTwitter /></a>
            <a href="#" className="hover:text-white p-2 bg-gray-900 rounded-lg hover:bg-emerald-800 transition-colors dark:bg-gray-800"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white p-2 bg-gray-900 rounded-lg hover:bg-emerald-800 transition-colors dark:bg-gray-800"><FaInstagram /></a>
            <a href="#" className="hover:text-white p-2 bg-gray-900 rounded-lg hover:bg-emerald-800 transition-colors dark:bg-gray-800"><FaGithub /></a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5">
            {['All Articles', 'Categories', 'Trending', 'Resources'].map((item, i) => (
              <li key={i}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Learning</h4>
          <ul className="space-y-2.5">
            {['For Students', 'For Teachers', 'Careers', 'Contribute'].map((item, i) => (
              <li key={i}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2.5">
            {['Contact Us', 'Help Center', 'Privacy Policy', 'Terms of Service'].map((item, i) => (
              <li key={i}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 EduBlog. All rights reserved. Empowering education worldwide.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}