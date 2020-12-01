import React from 'react';

import thumb1 from './images/thumb1.png';
import thumb2 from './images/thumb2.png';
import thumb3 from './images/thumb3.png';
// import "./Content.css";
import "./Imgbox.css";


function Imgbox(props) {
    return (

        <ul className="thumb">
            <li><img src={thumb1} alt="" onClick={() => { }} /></li>
            <li><img src={thumb2} alt="" /></li>
            <li><img src={thumb3} alt="" /></li>
        </ul>



    )
}

export default Imgbox
