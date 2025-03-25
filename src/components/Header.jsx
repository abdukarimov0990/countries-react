import React, { useEffect, useState } from 'react'
import { Link } from "react-router"
import night from "../img/night.svg"
import day from "../img/day.svg"


const Header = () => {
   const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });
    useEffect(() => {
      console.log("Dark mode state:", darkMode);
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);

    return (
      <header className='py-6 shadow-header text-black dark:text-white bg-white dark:bg-dark'>
        <div className="flex justify-between items-center w-full max-w-[1320px] px-5 mx-auto">
          <Link className='text-textColor text-xl font-bold sm:text-2xl' to="/">
            <h1>Where in the world?</h1>
          </Link>
          <button onClick={() => setDarkMode(!darkMode)} className='inline-flex items-center tex-base font-semibold text-textColor'>
            <img className='mr-2' alt="Moon icon" src={!darkMode ? night : day} />
            <span className='hidden sm:block'>Dark mode</span>
          </button>

        </div>
      </header>
    )
  }

  export default Header
