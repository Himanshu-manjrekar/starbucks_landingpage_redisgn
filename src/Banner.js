import React, { useState } from 'react';

import "./Banner.css";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import instagram from './images/instagram.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import Imgbox from './Imgbox';
import thumb1 from './images/thumb1.png';
import thumb2 from './images/thumb2.png';
import thumb3 from './images/thumb3.png';

function Banner() {

    const [Image, setImage] = useState("https://freepngimg.com/thumb/starbucks/77325-frappuccino-drink-chocolate-starbucks-matcha-white.png");

    // const [Color, setColor] = useState("#0171143");

    const setStyle = (Image) => {

        setImage(Image);


    }

    return (
        <div>
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
                        <img src={Image} alt="starbucks image 1" className="starbucks" />
                    </div>
                </div>
            </section>
            <ul className="thumb">
                <li><img src={thumb1} alt="thumbnail 1"
                    onClick={() =>
                        setStyle("https://freepngimg.com/thumb/starbucks/77325-frappuccino-drink-chocolate-starbucks-matcha-white.png")} />
                </li>
                <li><img src={thumb2} alt="thumbnail 2"
                    onClick={() =>
                        setStyle("https://freepngimg.com/thumb/coffee/62115-tea-coffee-drink-starbucks-latte-free-download-image.png")} />
                </li>
                {/* <li><img src={thumb3} alt="thumbnail 3"
                    onClick={() =>
                        setStyle("https://freepngimg.com/thumb/coffee/62120-coffee-frappuccino-drink-latte-starbucks-unicorn.png")} />
                </li> */}
            </ul>
            <ul className="sci">
                <li><a href="#"><img src={facebook}></img></a></li>
                <li><a href="#"><img src={instagram}></img></a></li>
                <li><a href="#"><img src={twitter}></img></a></li>
            </ul>
        </div>

    )
}

export default Banner
