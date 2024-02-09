import React from 'react';
import './Social.scss';
import './SocialMedia.scss';

const Social = () => {
    return (
        <div className='social'>
            <div className="container">
                <div className="block">
                    <div className="social__text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Asperiores quae adipisci autem omnis eveniet officiis eum? 
                            Tenetur nulla quo nihil repudiandae, praesentium sequi perspiciatis dolorem illum pariatur sapiente!
                        </p>
                    </div>
                    <ul className="social__items">
                        <li className="social__item">
                            <img src="./img/Facebook.png" alt="" />
                        </li>
                        <li className="social__item">
                            <img src="./img/Instagram.png" alt="" />
                        </li>
                        <li className="social__item">
                            <img src="./img/Twitter.png" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Social;