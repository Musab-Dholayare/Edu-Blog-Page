import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import LatestArticles from './Components/LatestArticles';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-all duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Categories />
        <LatestArticles />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}