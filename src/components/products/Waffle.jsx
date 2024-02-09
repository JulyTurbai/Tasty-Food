import React from 'react';

const Waffle = ({ prevWaffleSlide, nextWaffleSlide, currentImgIndex, wafflesImgs }) => {
    return (
        <div className="waffle">
            <div className="waffle__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Ex dolorum illo assumenda, 
                    distinctio consequuntur sed aspernatur inventore.
                </p>
            </div>
            <div className="waffle__slider">
                <button className='btn-left' onClick={prevWaffleSlide}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="97px" height="98px">
                        <path fill-rule="evenodd"  fill="#480000"
                        d="M96.996,97.998 L79.619,49.001 L96.996,0.005 L-0.001,49.001 L96.996,97.998 Z"/>
                    </svg>
                </button>
                <img className="slider-imgs" src={ wafflesImgs[currentImgIndex] } alt="slide" />
                <button className='btn-right' onClick={nextWaffleSlide}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="97px" height="98px">
                        <path fill-rule="evenodd"  fill="#480000"
                        d="M0.504,97.998 L17.791,49.001 L0.504,0.005 L97.001,49.001 L0.504,97.998 Z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Waffle;