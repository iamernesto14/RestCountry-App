import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

const Header = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(!theme);
  };

  return (
    <header className="sticky top-0 p-8 bg-main-100 shadow dark:shadow-sm mb-8 dark:bg-main-600 dark:text-main-100">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <h1 className="cursor-pointer tracking-normal text-base md:text-xl font-bold">
            Where in the world?
          </h1>
        </Link>
        <div
          className="flex gap-2 items-center justify-center cursor-pointer"
          onClick={handleThemeSwitch}
        >
          {!theme ? (
            <>
              <BsMoon />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <BsFillMoonFill />
              <span>Dark Mode</span>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
