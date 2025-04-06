import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { quotes, categories } from "../data/quotesData";
import "../pages/css/Quotes.css";
function Quotes() {
  // State to track the current quote, selected main category and subcategories
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [selectedMainCategory, setSelectedMainCategory] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);
  const [animationClass, setAnimationClass] = useState("");

  // Function to select main category
  const selectMainCategory = (categoryId) => {
    setSelectedMainCategory(categoryId);
  };

  // Function to toggle category selection
  const toggleCategory = (categoryId, categoryName) => {
    setSelectedCategories((prevSelected) => {
      // Check if this category is already selected
      const existingIndex = prevSelected.findIndex(
        (cat) => cat.id === categoryId
      );

      if (existingIndex >= 0) {
        // Remove if already selected
        return prevSelected.filter((_, index) => index !== existingIndex);
      } else {
        // Add if not selected
        return [...prevSelected, { id: categoryId, name: categoryName }];
      }
    });
  };

  // Function to remove a category from selection
  const removeCategory = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.filter((category) => category.id !== categoryId)
    );
  };

  // Update filtered quotes when selected categories change
  React.useEffect(() => {
    let filtered = quotes;

    if (selectedCategories.length > 0) {
      // Filter quotes that match any of the selected categories
      filtered = quotes.filter((quote) =>
        quote.categories.some((category) =>
          selectedCategories.some((selected) => selected.id === category)
        )
      );
    } else if (selectedMainCategory !== "all") {
      // If no specific categories selected but a main category is selected
      filtered = quotes.filter(
        (quote) =>
          quote.categories.includes(selectedMainCategory) ||
          quote.categories.some((cat) => {
            const mainCat = categories.find(
              (c) => c.id === selectedMainCategory
            );
            return (
              mainCat &&
              mainCat.subcategories &&
              mainCat.subcategories.some((sub) => sub.id === cat)
            );
          })
      );
    }

    setFilteredQuotes(filtered);

    // Set a random quote from the filtered list
    if (filtered.length > 0) {
      const randomIndex = Math.floor(Math.random() * filtered.length);
      setCurrentQuote(filtered[randomIndex]);
    }
  }, [selectedMainCategory, selectedCategories]);

  // Function to get a random quote from filtered quotes
  const getRandomQuote = () => {
    if (filteredQuotes.length > 0) {
      // Trigger slide-out animation
      setAnimationClass("slide-out");

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        setCurrentQuote(filteredQuotes[randomIndex]);

        // Trigger slide-in animation
        setAnimationClass("slide-in");
      }, 300); // Duration of slide-out animation
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-white text-gray-800 font-['Inter',system-ui,sans-serif] leading-relaxed animate-fadeIn">
      <Header />

      <section className="w-full pt-32 pb-20 flex-grow min-h-screen bg-black/80 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-fixed bg-center text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Wisdom{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Collection
              </span>
              <span className="text-indigo-500">.</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto text-gray-200">
              Select a category below or click on the quote to discover new
              philosophical insights
            </p>
          </div>

          {/* Main layout with categories and selected categories */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Categories section - left side */}
            <div className="md:w-3/4">
              {/* Category Selection */}
              <div className="mb-8 pb-4">
                <div className="flex flex-wrap justify-center gap-4 px-4">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      onClick={() => selectMainCategory(category.id)}
                      className={`px-6 py-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl flex-shrink-0 
                        ${
                          selectedMainCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white`
                            : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/80"
                        }`}
                    >
                      <span className="font-medium flex items-center">
                        {category.icon && <category.icon className="mr-2" />}
                        {category.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subcategory Selection - show for all main categories except "all" */}
              {selectedMainCategory !== "all" && (
                <div className="mb-8 overflow-x-auto pb-4 thin-scrollbar">
                  <div className="flex flex-wrap gap-3 px-4 justify-center py-2">
                    {categories
                      .find((cat) => cat.id === selectedMainCategory)
                      ?.subcategories?.map((subcategory) => (
                        <div
                          key={subcategory.id}
                          onClick={() =>
                            toggleCategory(subcategory.id, subcategory.name)
                          }
                          className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-1 flex-shrink-0 text-sm
                            ${
                              selectedCategories.some(
                                (cat) => cat.id === subcategory.id
                              )
                                ? `bg-white/20 text-white border border-white/30`
                                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60"
                            }`}
                        >
                          <span className="font-medium flex items-center ">
                            {subcategory.icon && (
                              <subcategory.icon className="mr-2" />
                            )}
                            {subcategory.name}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Selected categories - right side */}
            <div className="md:w-1/4">
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/10">
                <h3 className="text-lg font-medium mb-3 text-white">
                  Selected Categories
                </h3>

                {selectedCategories.length === 0 ? (
                  <p className="text-gray-400 text-sm italic">
                    No categories selected
                  </p>
                ) : (
                  <div className="flex flex-col gap-2">
                    {selectedCategories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center justify-between bg-gray-800/80 rounded-lg px-3 py-2 text-sm"
                      >
                        <span className="text-gray-200">{category.name}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCategory(category.id);
                          }}
                          className="text-gray-400 hover:text-white ml-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-700/80 transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    ))}

                    {selectedCategories.length > 0 && (
                      <button
                        onClick={() => setSelectedCategories([])}
                        className="text-xs text-indigo-400 hover:text-indigo-300 mt-2 self-end "
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div
              className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-10 shadow-xl transition-all hover:-translate-y-4 hover:shadow-2xl border border-white/10 flex flex-col justify-between max-w-2xl w-full cursor-pointer animate-fadeIn ${animationClass}`}
              onClick={getRandomQuote}
            >
              {filteredQuotes.length > 0 ? (
                <>
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
                </>
              ) : (
                <div className="text-center py-10">
                  <p className="text-xl text-gray-300">
                    No quotes found in this category
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Try selecting a different category
                  </p>
                </div>
              )}
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
                    href="/#about"
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

export default Quotes;
