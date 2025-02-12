import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import CountryItem from './pages/countryItem'


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/item/:name' element={<CountryItem/>}></Route>
      </Route>
    )
  )
  return(
     <RouterProvider router={routes}/>

  )
}

export default App
