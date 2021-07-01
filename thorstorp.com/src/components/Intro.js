import React from 'react'
import './intro.css'

import bgVideo from '../assets/video/konverteradTech_Tiles.mp4'
import { useEffect} from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {


 


    const scrollInsetFixer = () => {
        const greetContainer = document.querySelector('.greet-container');
        const arrow = document.querySelector('.arrow');
        window.addEventListener('scroll', (e) => {
            let lastKnownScrollPositionVH = (window.scrollY / document.body.clientHeight) * 100;
            // let lastKnownScrollPosition = document.body.scrollHeight;
            // console.log(window.scrollY);
            if (lastKnownScrollPositionVH < 50) {
                arrow.style.visibility = 'visible';
            } else arrow.style.visibility = 'hidden';

            greetContainer.style.clipPath = `inset(${lastKnownScrollPositionVH}% 0 ${lastKnownScrollPositionVH}% 0)`;

        })
    }

    useEffect(() => {
        scrollInsetFixer();
    }, [])





    return (

     
            <div className="intro-main">
                <div className="intro-container">
                    <video autoPlay="autoplay" muted loop="loop" id="video" >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="greet-container">
                        <h1 className="greet">Hello, I'm Max.</h1>
                        <br />
                        <h3>At this website you can find my CV and portfolio. </h3>
                    </div>
                    <i className="arrow fas fa-3x fa-angle-double-down"></i>
                </div>
                <div className="links-container">
                    <div>
                    <Link style={{textDecoration: 'none'}}to="/CV"><h3 className="intro-links">My CV</h3></Link>
                        <br />
                        <br />
                        <Link style={{textDecoration: 'none'}}to="/portfolio"><h3 className="intro-links">My Portfolio</h3></Link>
                    </div>
                </div>
            </div>

        



    )
}

export default Intro
