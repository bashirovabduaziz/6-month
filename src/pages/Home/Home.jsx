import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { FaPlay } from "react-icons/fa";


const Home = () => {
  return (
    <div className='bg'>
        <Header />
           <div className='container mt-[560px]'>
                 <div className='className="md:flex items-center justify-between sm:flex-row mt-8"'>
                  <h1 className='text-white font-[700] text-[46px] text-center'>The Best Streaming Experience</h1>
                  <p className='text-[18px] text-[#999999] text-center font-[400] mt-6'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                 </div>
                 <button className='text-white flex items-center gap-2 font-[600] bg-[#E50000] p-[15px] mt-6 border border-[#E50000] rounded-[6px] hover:text-[#E50000] hover:bg-[#141414] ml-[530px]'>
                    <FaPlay />
                    Start Watching Now
                 </button>
           </div>
        <Footer />
    </div>
  )
}

export default Home