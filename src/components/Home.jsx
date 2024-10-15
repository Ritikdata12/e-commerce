import React from 'react'
import Header from './Header'
import SimpleSlider from './Slider'
import Heroslider from './Heroslider'
import DealsSection from './DealsSection'
import Filtercard from './Filtercard'
import SliderComponent from './Electronicsslider'

const Home = () => {
  return (
    <>
    <Header/>
    <Heroslider/>
   <SimpleSlider/>
   <SimpleSlider/>
   <DealsSection/>
   <SliderComponent/>
   <Filtercard/>
    </>
  )
}

export default Home