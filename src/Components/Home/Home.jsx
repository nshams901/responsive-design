import React from 'react'
import Navbar from './Navbar/Navbar'
import PostForm from './PostForm/PostForm'
import HeroSection from './HeroSection/HeroSection'
import SliderSection from './SliderSection/SliderSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <PostForm />
      <HeroSection />
      <SliderSection />
    </div>
  )
}

export default Home
