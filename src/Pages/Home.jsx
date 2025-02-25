import React from 'react'
import Header from '../Components/Header'
import SpecialtyMenu from '../Components/SpecialtyMenu'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialtyMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home
