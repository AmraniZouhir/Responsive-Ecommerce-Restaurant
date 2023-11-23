import React from 'react'
import Heder from './Heder/Heder'
import Numbres from './Numbers/Numbres'
import About from './About Use/About'
import Ingredients from './Ingredients/Ingredients'
import Paralex from './paralex/Paralex'
import Blogs from './Blogs/Blogs'
import ControlledCarousel from './Slaider/Slaider'
import AskedQuestions from './AskedQuestions/AskedQuestions'
import Subscribe from './Subscribe/Subscribe '
import Footer from './Foter/foter'

export default function Home() {
  return (
    <>
    <Heder/>
    <Numbres/>
    <About/>
    <Ingredients/>
    <Paralex/>
    <Blogs/>
    <ControlledCarousel/>
    <AskedQuestions/>
    <Subscribe/>
    <Footer/>
    </>
    
  )
}
