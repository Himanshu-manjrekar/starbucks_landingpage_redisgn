import React from 'react';
import "./Content.css";

import img1 from './images/img1.png';
import instagram from './images/instagram.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import thumb1 from './images/thumb1.png';
import thumb2 from './images/thumb2.png';
import thumb3 from './images/thumb3.png';
import Imgbox from './Imgbox';

function Content() {
    return (
        <section className="content__section">
            <div className="circle"></div>
            <div className="content">
                <div className="textbox">
                    <h2>It's not just a Coffee.<br />It's<span> Starbucks</span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint accusamus accusantium, voluptatibus quisquam molestias id corrupti voluptatem illo,
                    sed distinctio quam deserunt vel maxime enim odit nulla repellendus cum minima.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className="imgbox">
                    <img src={img1} alt="" />
                </div>

            </div>
            <ul className="sci">
                <li><a href="#"><img src={facebook}></img></a></li>
                <li><a href="#"><img src={instagram}></img></a></li>
                <li><a href="#"><img src={twitter}></img></a></li>
            </ul>
            {/* <Imgbox /> */}
        </section>






    )
}

export default Content
