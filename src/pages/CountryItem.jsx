import React, { useState, useEffect,} from 'react'
import { Link, useParams } from 'react-router';
import back from "../img/back.svg"
const API = "https://restcountries.com/v3.1/all"


const CountryItem = () => { 
  const [countries, setCountries] = useState([]);  
  const getCountries = async()=>{
  const req = await fetch(API)
  const data = await req.json()
  setCountries(data)
  }
  useEffect(()=>{
    getCountries()
  }, [])
  
  const params = useParams()
  const countryObj = countries.find((country)=> country.name.common == params.name)
  const [searchVal, setSearchVal] = useState("")
  const [region, setRegion] = useState("")

 
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 py-10 gap-[120px]" >
      <div className="w-full h-full">
        <Link to="/" className='py-2.5 px-8 flex gap-2.5 font-light text-base mb-10'><img src={back} alt="" />Back</Link>
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
        <div className=' flex gap-5 mt-6'>
           <h3 className='font-bold text-lg'>Border Countries:</h3>
           <ul className='flex gap-5'>
            {Array.isArray(countryObj?.borders) &&  countryObj?.borders.map((border)=> {
              return(
              <li><Link>{border}</Link></li>
            )
            })}
           </ul>
        </div>
      </div>
    </div>
    
  )
}

export default CountryItem
