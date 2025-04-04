import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full fixed top-[-40px] left-0 z-10">
      <nav className="flex justify-between items-center p-5 mt-10 w-full bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="logo max-w-7xl w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Inspirio<span className="text-indigo-500">.</span>
          </h1>
          <ul className="hidden md:flex space-x-8 list-none">
            <li>
              <Link
                to="/"
                className="text-white font-medium text-base hover:text-indigo-300 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/quotes"
                className="text-white font-medium text-base hover:text-indigo-300 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
              >
                Quotes
              </Link>
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
