import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Quotes from "./pages/Quotes";
import QuotesLonely from "./pages/QuotesLonely";
import Header from "./components/Header";
import QuotesInspiration from "./pages/QuotesInspiration";
import QuotesFeelingDown from "./pages/QuotesFeelingDown";
import QuotesInisghtful from "./pages/QuotesInisghtful";
function App() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      text: "In the midst of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus",
    },
    {
      id: 2,
      text: "It's not what happens to you, but how you react to it that matters.",
      author: "Epictetus",
    },
    {
      id: 3,
      text: "Freedom is what we do with what is done to us.",
      author: "Jean-Paul Sartre",
    },
    {
      id: 4,
      text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
      author: "Fyodor Dostoevsky",
    },
    {
      id: 5,
      text: "Nature does not hurry, yet everything is accomplished.",
      author: "Lao Tzu",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage quotes={quotes} />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/lonely" element={<QuotesLonely />} />
        <Route path="/quotes/inspiration" element={<QuotesInspiration />} />
        <Route path="/quotes/feeling-down" element={<QuotesFeelingDown />} />
        <Route path="/quotes/insight" element={<QuotesInisghtful />} />
      </Routes>
    </Router>
  );
}

function HomePage({ quotes }) {
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);

  const toggleExploreDropdown = () => {
    setIsExploreDropdownOpen(!isExploreDropdownOpen);
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-white text-gray-800 font-['Inter',system-ui,sans-serif] leading-relaxed animate-fadeInPage">
      <Header />

      <section className="w-full flex items-center justify-center pt-32 pb-20 flex-grow min-h-screen bg-black/80 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-fixed bg-center text-white text-center">
        <div className="px-8 w-full max-w-3xl mx-auto">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Discover{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Wisdom
              </span>
              <span className="text-indigo-500">.</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 font-light max-w-xl mx-auto text-gray-200">
              Curated inspiration for the modern mind, designed to elevate your
              perspective
            </p>
            <div className="relative">
              <button
                onClick={toggleExploreDropdown}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none py-3.5 px-10 text-base font-semibold rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 tracking-wide inline-flex items-center group"
              >
                Explore Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              {isExploreDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 z-20 bg-white shadow-lg rounded-md">
                  <li>
                    <Link
                      to="/quotes"
                      className="block px-4 py-2 text-black hover:bg-indigo-500 hover:text-white"
                    >
                      Quotes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quotes/lonely"
                      className="block px-4 py-2 text-black hover:bg-indigo-500 hover:text-white"
                    >
                      For when you're lonely
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quotes/inspiration"
                      className="block px-4 py-2 text-black hover:bg-indigo-500 hover:text-white"
                    >
                      For when you need inspiration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quotes/feeling-down"
                      className="block px-4 py-2 text-black hover:bg-indigo-500 hover:text-white"
                    >
                      For when you're feeling down
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quotes/insight"
                      className="block px-4 py-2 text-black hover:bg-indigo-500 hover:text-white"
                    >
                      For when you need some insight
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <section
        id="quotes"
        className="w-full py-20 md:py-28 bg-gradient-to-br from-black via-purple-900/30 to-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-md">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Insights
            </span>
            <span className="text-indigo-500">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 max-w-7xl mx-auto">
            {quotes.map((quote, index) => (
              <div
                key={quote.id}
                className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl border border-white/10 flex flex-col justify-between h-full animate-fadeIn`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-grow">
                  <div className="text-indigo-400 text-4xl mb-4 opacity-30">
                    "
                  </div>
                  <p className="text-lg leading-relaxed font-medium text-white mb-4">
                    {quote.text}
                  </p>
                  <p className="italic text-gray-300 mb-6 flex items-center">
                    <span className="w-6 h-px bg-indigo-500/50 mr-3"></span>
                    {quote.author}
                  </p>
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    className="bg-gray-800/80 hover:bg-indigo-500/80 border-none text-gray-300 hover:text-white text-lg p-2.5 rounded-full transition-colors"
                    aria-label="Save quote"
                  >
                    <i className="far fa-bookmark"></i>
                  </button>
                  <button
                    className="bg-gray-800/80 hover:bg-indigo-500/80 border-none text-gray-300 hover:text-white text-lg p-2.5 rounded-full transition-colors"
                    aria-label="Share quote"
                  >
                    <i className="far fa-share-square"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-black to-transparent opacity-30 z-10"></div>
      </section>

      <section id="about" className="w-full py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Philosophy
            </span>
            <span className="text-indigo-500">.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-gray-700">
            I created Inspirio as a place where people can find inspiration,
            comfort, and motivation. My goal is to provide a sanctuary of
            uplifting words for those going through difficult times, a spark for
            those seeking creative ideas, and a collection of wisdom that
            resonates with the human experience. Each quote represents an
            opportunity to see the world from a fresh perspective.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-xs">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4 mx-auto">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
              <p className="text-gray-600">
                Find the spark that ignites your creativity and passion
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-xs">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 mx-auto">
                <i className="fas fa-brain text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wisdom</h3>
              <p className="text-gray-600">
                Gain insights from the greatest minds throughout history
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-xs">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <i className="fas fa-heart text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Motivation</h3>
              <p className="text-gray-600">
                Find the encouragement you need to pursue your dreams
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 bg-gray-900 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Inspirio<span className="text-indigo-500">.</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Curated wisdom for the modern mind.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 text-lg transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 text-lg transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 text-lg transition-colors"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quotes"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Quotes
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
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

export default App;
