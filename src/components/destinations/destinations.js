import React from 'react';
import './destinations-styles.css';

import BoraBora from '../../assets/borabora.jpeg';
import BoraBora2 from '../../assets/borabora2.jpeg';
import Maldives from '../../assets/maldives.jpeg';
import Maldives2 from '../../assets/maldives2.jpeg';
// import Maldives3 from '../../assets/maldives3.jpeg';
import Keywest from '../../assets/keywest.jpeg'
// import Gold from '../../assets/gold.png'



function Destinations() {
    return (
        <div className="destinations">
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On The Carribean's Best Beaches</p>
                <div className="img-container">
                    <img className="span-3 image-grid-row-2" src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={Keywest} alt="/"/>
                </div>
            </div>
            
        </div>
    )
}

export default Destinations
