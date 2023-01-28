import { useEffect } from "react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Nav = () => {
  const [theme, setTheme] = useState(false);

  // Theme Color Toggle
  const toggle = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-DarkBlue py-4 shadow-md relative">
      <div className="container mx-auto flex-col px-4 flex items-start justify-between sm:flex-row sm:items-center gap-2">
        <h1 className="text-VeryDarkBlue dark:text-white text-xl font-bold md:text-2xl">
          Where in the World?
        </h1>
        <button
          className="flex items-center gap-1 text-VeryDarkBlue dark:text-white text-lg font-semibold outline-none border-none focus-within:outline-none smooth"
          onClick={toggle}
        >
          {theme ? (
            <>
              <FaSun />
              Light Mode
            </>
          ) : (
            <>
              <FaMoon />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
