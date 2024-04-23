import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from 'framer-motion';

const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='home'>

        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>

            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? '158px': '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type:'tween'}}

                >

                </motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/* the best ad */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div><span>
                    in here we will help you to shape and build your ideal body and live up your life to fullest.</span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitnesss Program</span>
                </div>
            </div>

            {/* hero buttons */}
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>

        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>



            <motion.div 
              initial={{right: "-1rem"}}
              whileInView={{right: '4rem'}}
              transition={transition}
              className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116bpm</span>
            </motion.div>

            {/* Hero Images */}
            <img src={hero_image} alt="" className='hero-image' />
            <motion.img
            initial={{right: '32rem'}} 
                whileInView={{right: '10rem'}}
                transition={{...transition, type:'tween'}}
                src={hero_image_back} alt="" className='hero-image-back' />
            {/* calories */}
            <motion.div
                initial={{right: '32rem'}} 
                whileInView={{right: '50rem'}}
                transition={{...transition, type:'tween'}}
                className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
                
            </motion.div>


        </div>
    </div>
  )
}

export default Hero