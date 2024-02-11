import React from 'react';

const Waffle = ({ prevWaffleSlide, nextWaffleSlide, currentImgWaffle, wafflesImgs }) => {
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
                <button className='waffle__btn-left' onClick={prevWaffleSlide}>
                    <span>&#11164;</span>
                </button>
                <img className="slider-imgs" src={ wafflesImgs[currentImgWaffle] } alt="slide" />
                <button className='waffle__btn-right' onClick={nextWaffleSlide}>
                    <span>&#11166;</span>
                </button>
            </div>
        </div>
    );
};

export default Waffle;