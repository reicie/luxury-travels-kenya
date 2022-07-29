import React from 'react';
import './selects-styles.css';

import BoraBora from '../../assets/borabora.jpeg';
import BoraBora2 from '../../assets/borabora2.jpeg';
import Maldives from '../../assets/maldives.jpeg';
import Maldives2 from '../../assets/maldives2.jpeg';
import Maldives3 from '../../assets/maldives3.jpeg';
import Keywest from '../../assets/keywest.jpeg';
import Selectsimg from '../selectsimg/selectsimg';

function Selects() {
    return (
        <div name="views" className="selects">
            <div className="container">
                <Selectsimg bgImg = {BoraBora} text = 'BoraBora' />
                <Selectsimg bgImg = {BoraBora2} text = 'Emerald Bay' />
                <Selectsimg bgImg = {Maldives} text = 'Maldives' />
                <Selectsimg bgImg = {Maldives2} text = 'Grenada' />
                <Selectsimg bgImg = {Maldives3} text = 'Barbados' />
                <Selectsimg bgImg = {Keywest} text = 'Keywest' />
            </div>
        </div>
    )
}

export default Selects
