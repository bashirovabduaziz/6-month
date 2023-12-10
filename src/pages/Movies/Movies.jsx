import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carusel from '../../components/Carusel/Carusel'
import TopRated from '../../components/MovieApi/TopRated'
import NowPlaying from '../../components/MovieApi/NowPlaying'
import Upcoming from '../../components/MovieApi/Upcoming'

const Movies = () => {
  let slides = [
    "https://images8.alphacoders.com/113/1130048.jpg",
    "https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/09/avengers_title_hero_art_1920x1080.jpg",
    "https://images.alphacoders.com/128/1289451.jpg",
    "https://images2.alphacoders.com/280/280472.jpg"

  ]
  return (
    <div className='container'>
        <Header />
        <Carusel slides={slides}/>
        <div className='h-[1200px] border-[2px] border-gray-800 mt-10 rounded-[10px] w-[100%] max-w-[1240px] ml-[10px]'>       
           <TopRated />
           <NowPlaying />
           <Upcoming />
        </div>

        <Footer />
    </div>
  )
}

export default Movies