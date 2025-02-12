import React from 'react'
import { Link } from "react-router"
import night from "../img/night.svg"

const Header = () => {
  return (
    <header className='py-6 shadow-header dark:bg-lightDark'>
    <div className="flex justify-between items-center w-full max-w-[1320px] px-5 mx-auto">
      <Link className='text-textColor text-xl font-bold sm:text-2xl' to="/">
          <h1>Where in the world?</h1>
      </Link>

      <button className='inline-flex items-center tex-base font-semibold text-textColor'>
        <img className='mr-2' alt="Moon icon" src={night} />
        <span className='hidden sm:block'>Dark mode</span>
      </button>
      
    </div>
  </header>
  )
}

export default Header
