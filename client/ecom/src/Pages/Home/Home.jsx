import React from 'react'
import Slider from '../../Components/Slider/Slider'
import { Helmet } from 'react-helmet'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'


const Home = () => {
  return (
    
    <div className='home'>
      <Helmet>
          <title>Shopsphere - Home</title>
          <meta name='description' content='One stop website for all your fashion needs'/>
          <meta name='keywords' content='Clothes, Shopping, Fashion, Style, Home' />
        </Helmet>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
      <Contact/>
    </div>
  )
}

export default Home