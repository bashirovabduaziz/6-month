import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MovieApi from '../../components/MovieApi/MovieApi'

const Movies = () => {
  return (
    <div>
        <Header />
        <MovieApi />
        <Footer />
    </div>
  )
}

export default Movies