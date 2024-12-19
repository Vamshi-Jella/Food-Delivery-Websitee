import React from 'react'
import Chains from '../Components/Chains'
import ItemsDisplay from '../Components/ItemsDisplay'
import FirmCollections from '../Components/FirmCollections'
import ProductMenu from '../Components/ProductMenu'
import Navbar from '../Components/Navbar'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        </div>
    </div>
  )
}

export default LandingPage