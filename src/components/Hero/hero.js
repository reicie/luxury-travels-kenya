import React from 'react'
import './hero-styles.css'
import Video from '../../assets/maldivesVideo.mp4'
import {AiOutlineSearch} from 'react-icons/ai'

function Hero() {
    return (
        <div className="hero">
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations WorldWide</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder="Search Destionations" />
                    </div>
                    <div className="search-button">
                        <button><AiOutlineSearch className="icon"/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
