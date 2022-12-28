import React from 'react'
import Safestcars from '../Safestcars/Safestcars'
import Trendingcars from '../Trendingcars/Trendingcars'
import Upcominglaunches from '../UpcomingLaunches/Upcominglaunches'
import "./home.css"

const Home = () => {
  return (
    <>
    <div>
    <Trendingcars/>
    <Upcominglaunches/>
    <Safestcars/>
  </div>
  </>
  )
}

export default Home