import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/Titlecards/TitleCards'
import Footer from '../../components/Footer/Footer'
import GoToTop from '../../components/GoToTop/GoToTop'
import Map from '../../components/Map/Map'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>

      <div className="hero">
        <img src={hero_banner} alt="hero_banner" className="banner-img" />

        <div className="hero-caption">
          <img src={hero_title} alt="hero_title" className='caption-img' />
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save city from an immortal enemy.
          </p>

          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="play_icon" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="info_icon" />More Info</button>
          </div>

          <TitleCards />

        </div>
      </div>

       <div className="more-cards">
       <TitleCards title={"Blockbuster Movies"} />
       <TitleCards title={"Only on Netflix"} />
       <TitleCards title={"Upcoming"} />
       <TitleCards title={"Top pics for You"} />
       </div>
       
       <Map />
       <Footer />
      <GoToTop/>
    </div>
  )
}

export default Home