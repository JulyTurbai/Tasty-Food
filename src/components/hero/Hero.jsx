import React from 'react';
import './Hero.scss';
import './HeroMedia.scss';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="block">
                    <div className="hero__main">
                        <h1>tasty food</h1>
                    </div>
                    <div className="hero__shadow"></div>
                    <div className="hero__img">
                         <img src="./img/Hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;