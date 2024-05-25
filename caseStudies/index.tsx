import React from 'react'

import {Header, HeroSection, Testimonials, Footer} from './components'

const index = () => {
  return (
    <>
    <div className='px-8 lg:px-16'
     style={{
    backgroundImage: `url(${'/assets/caseStudy/shaneLewisMedium.png'})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:"cover",
    backgroundColor:'rgba(0, 0, 0, 0.6)',
    backgroundBlendMode:'multiply',
    backgroundPosition:"center"
    }}>
    <Header/>
    <HeroSection/>
    </div>
    <Testimonials/>
    <hr />
    <Footer/>
    </>
  )
}

export default index
