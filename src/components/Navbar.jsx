import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/index";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

const Navbar = ({ onContactClick, onToggleTheme, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on link click
  };
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-white shadow-md"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
      flex items-center justify-between"
      >
        {/* {Logo} */}
        <img
          src="/images/logo.jpg"
          alt="logo"
          width={70}
          height={70}
          className="rounded-full"
        />

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center space-x-6 text-normal
         text-gray-700 dark:text-gray-300"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-indigo-600 font-semibold  dark:hover:text-indigo-400 transition"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={onContactClick}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md
             hover:bg-indigo-500 transition"
          >
            Contact
          </button>

          {/* DarkMode Toggle */}
          <button onClick={onToggleTheme} className="ml-2">
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
        {/* Mobile Hamburger */}

        <div className="md:hidden flex items-center space-x-3 ">
          <button onClick={onToggleTheme}>
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu toggle"
          >
            {menuOpen ? (
              <XMarkIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
         {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white dark:bg-gray-800 border-t
            border-gray-200 dark:border-gray-700"
        >
              <div className="flex flex-col space-y-4 px-6 py-4 text-gray-700 dark:text-gray-300 font-bold">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                   onClick={() => scrollTo(link.id)}
                  className="text-left w-full hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onContactClick();
                }}
                className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition"
              >
                Contact
              </button>
            </div>
        </motion.div>
          )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
