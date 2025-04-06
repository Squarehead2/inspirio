import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuotesLonely from "../pages/QuotesLonely";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="w-full fixed top-[-40px] left-0 z-10">
      <nav className="flex justify-between items-center p-5 mt-10 w-full bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="logo max-w-7xl w-full mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white font-medium text-base hover:text-indigo-300 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
          >
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Inspirio<span className="text-indigo-500">.</span>
            </h1>
          </Link>
          <ul className="hidden md:flex space-x-8 list-none">
            <li>
              <Link
                to="/"
                className="text-white font-medium text-base hover:text-indigo-300 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white font-medium text-base hover:text-indigo-300 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
              >
                Quotes
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
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
            </li>
            <li>
              <a
                href="#about"
                className="text-white font-medium text-base hover:text-indigo-300 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
              >
                About
              </a>
            </li>
          </ul>
          <button className="md:hidden text-white text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
