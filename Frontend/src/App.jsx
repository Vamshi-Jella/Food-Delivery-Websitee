import React from 'react'
import LandingPage from './Pages/LandingPage'
import {Routes, Route} from 'react-dom'
import './App.css'
import ProductMenu from './Components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<LandingPage />}/>
        <Route path='/products/:firmId/:firmName' element ={<ProductMenu/>} />
      </Routes>
      App</div>
  )
}

export default App