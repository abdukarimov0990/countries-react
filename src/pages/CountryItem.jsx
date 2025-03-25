import React, { useState, useEffect, } from 'react'
import { Link, useParams } from 'react-router';

const API = "https://restcountries.com/v3.1/all"


const CountryItem = () => {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    const req = await fetch(API)
    const data = await req.json()
    setCountries(data)
  }
  useEffect(() => {
    getCountries()
  }, [])

  const params = useParams()
  const countryObj = countries.find((country) => country.name.common == params.name)
  const [searchVal, setSearchVal] = useState("")
  const [region, setRegion] = useState("")


  return (
    <div className="container dark:text-white grid grid-cols-1 lg:grid-cols-2 py-10 gap-[120px]" >
      <div className="w-full h-full">
        <Link to="/" className='py-2.5 px-8 items-center bg-white rounded-lg dark:bg-dark w-full max-w-[150px] flex gap-2.5 font-light text-base mb-10'>
          <svg
            className="w-5 h-5 text-black dark:text-white" // Dark mode changes the color
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="call-made">
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                fill="currentColor"
              />
            </g>
          </svg>
          Back</Link>
        <img src={countryObj?.flags.png} alt="Something went wrong" className='w-full h-{400px} rounded-lg' />
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className='text-[32px] font-extrabold mb-6'>{countryObj?.name.common}</h2>
        <ul className='grid grid-cols-2'>
          <ul className='flex flex-col gap-2'>
            <li className='text-base'><span className='font-bold'>Native Name</span>: {countryObj?.name.nativeName.eng?.common ? countryObj?.name.nativeName.eng?.common : "No Nativename"}</li>
            <li className='text-base'><span className='font-bold'>Population</span>: {countryObj?.population}</li>
            <li className='text-base'><span className='font-bold'>Sub Region</span>: {countryObj?.subregion ? countryObj.subregion : "No Subregion"}</li>
            <li className='text-base'><span className='font-bold'>Capital</span>: {countryObj?.capital ? countryObj?.capital : "No capital"}</li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <li className='text-base'><span className='font-bold'>Curreincies</span>: {countryObj?.currencies != null && Object.keys(countryObj?.currencies)} </li>
            <li className='text-base'><span className='font-bold'>Language:</span>{countryObj?.languages != null && Object.values(countryObj?.languages).join(", ")}</li>
          </ul>
        </ul>
        <div className=' flex gap-5 items-center mt-6'>
          <h3 className='font-bold text-lg'>Border Countries:</h3>
          <ul className='flex gap-5'>
            {Array.isArray(countryObj?.borders) && countryObj?.borders.map((border) => {
              return (
                <li className='px-4 py-1 bg-white border border-gray-300 dark:border-none dark:bg-dark rounded-lg'><Link>{border}</Link></li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default CountryItem
