import search from "../img/search.svg"
import {Link } from 'react-router'
import React, { createContext, useState, useEffect } from 'react';
const API = "https://restcountries.com/v3.1/all"

const Home = () => {
  const [countries, setCountries] = useState([]);  
  const getCountries = async()=>{
  const req = await fetch(API)
  const data = await req.json()
  setCountries(data)
  }
  useEffect(()=>{
    getCountries()
  }, [])
  const [searchVal, setSearchval] = useState("");
  const [region, setRegion] = useState("")

  const filterBySearchVal = countries.filter((country) => country.name.common.toLowerCase().startsWith(searchVal.toLocaleLowerCase()));
  const filterByRegion = region? filterBySearchVal.filter((country) => country.region.toLocaleLowerCase() == region.toLocaleLowerCase()): filterBySearchVal

  return (
    <div className='container '>
      <div className="flex flex-col items-end sm:flex-row sm:justify-between mb-12">
          <div className="relative w-full max-w-[480px] mb-5 sm:mr-10 sm:mb-0">
            <input
            value={searchVal} onChange={(e)=> setSearchval(e.target.value)}
              className="w-full py-[18px] pl-[74px] rounded-md shadow-input text-sm text-textColor "
              type="search"
              placeholder="Search for a country…"
            />
            <img
              className="absolute top-5 left-8"
              src={search}
              alt="search icon"
            />
          </div>
          <select
           onChange={(e)=>setRegion(e.target.value)}
            defaultValue="DEFAULT"
            className="px-6 py-5 shadow-input w-52 text-sm text-textColor space-y-2 rounded- bg-white"
          >
            <option value="DEFAULT" disabled>
              Filter by region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    <ul className="grid grid-cols-1 lg:grid-cols-4 gap-[75px]">
      {
        filterByRegion.map((country, ind)=>{
          return(
          <li key={ind} className='bg-white shadow-card'>
            <Link to={`/item/${country.name.common}`}>
            <img src={country.flags.png} alt="something went wrong" className='w-full h-40' />
            <div className="p-6">
              <h3 className='text-lg font-bold mb-4'>{country.name.common}</h3>
              <ul className='space-y-2 text-sm'>
              <p><span className='font-bold'>Population: </span>{country.population}</p>
              <p><span className='font-bold'>Region:</span> {country.region}</p>
              <p><span className='font-bold'>Capital:</span> {country.capital ? country.capital : "No capital" }</p>
              </ul>
            </div>
            </Link>
          </li>
          )
        })
      }
    </ul>
    
    </div>
  )
}

export default Home
