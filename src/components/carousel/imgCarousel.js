import React from 'react';
import './imgCarousel-styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import BoraBora from '../../assets/borabora.jpeg';
import BoraBora2 from '../../assets/borabora2.jpeg';
import Maldives from '../../assets/maldives.jpeg';

function ImgCarousel() {
    return (
        <div name="carousel" className="container">
            <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={BoraBora} alt="/"/>
                    <p className="legend">BoraBora</p>
                </div>
                <div>
                    <img src={BoraBora2} alt="/"/>
                    <p>Emerald Bay</p>
                </div>
                <div>
                    <img src={Maldives} alt="/"/>
                    <p>Maldives</p>
                </div>
            
            </Carousel>
        </div>
    )
}

export default ImgCarousel
