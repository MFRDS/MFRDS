import React, { useEffect } from "react";

export default function ThemeToggle({ darkMode, setDarkMode }) {  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
        darkMode ? "bg-gray-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
          darkMode
            ? "right-1 bg-gray-800 text-white"
            : "left-1 bg-white text-gray-800"
        }`}
      >
        {darkMode ? (
          <i className="fas fa-moon text-sm"></i>
        ) : (
          <i className="fas fa-sun text-sm"></i>
        )}
      </div>
    </div>
  );
}
