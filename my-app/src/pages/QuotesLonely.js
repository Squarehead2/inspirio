// src/pages/quotesLonely.js

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { quotes } from "../data/lonelyQuotesData"; // Updated import statement

function QuotesLonely() {
  // State to track the current quote and animation class
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [animationClass, setAnimationClass] = useState("");

  // Function to get a random quote
  const getRandomQuote = () => {
    if (quotes.length > 0) {
      // Trigger slide-out animation
      setAnimationClass("slide-out");

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);

        // Trigger slide-in animation
        setAnimationClass("slide-in");
      }, 300); // Duration of slide-out animation
    }
  };

  // Set a random quote on component mount
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full bg-white text-gray-800 font-['Inter',system-ui,sans-serif] leading-relaxed animate-fadeIn">
      <Header />

      <section className="w-full pt-32 pb-20 flex-grow min-h-screen bg-black/80 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-fixed bg-center text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              It's Okay to Feel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Lonely
              </span>
              <span className="text-indigo-500">.</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto text-gray-200">
              Here are some quotes to remind you that you're not alone.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div
              className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-10 shadow-xl transition-all hover:-translate-y-4 hover:shadow-2xl border border-white/10 flex flex-col justify-between max-w-2xl w-full cursor-pointer animate-fadeIn ${animationClass}`}
              onClick={getRandomQuote}
            >
              <div className="flex-grow">
                <div className="text-indigo-400 text-6xl mb-6 opacity-30 text-center">
                  "
                </div>
                <p className="text-2xl leading-relaxed font-medium text-white mb-6 text-center">
                  {currentQuote.text}
                </p>
                <p className="italic text-gray-300 mb-6 flex items-center justify-center">
                  <span className="w-10 h-px bg-indigo-500/50 mr-3"></span>
                  {currentQuote.author}
                </p>
              </div>
              <div className="text-center mt-6 text-gray-400">
                <p className="text-sm">Click for another quote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 bg-gray-900 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Inspirio. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Designed with <span className="text-red-500">♥</span> for wisdom
              seekers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default QuotesLonely;
