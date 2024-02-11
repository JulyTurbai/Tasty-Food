import React from 'react';

const Pancake = ({ prevPancakeSlide, nextPancakeSlide, currentImgPancake, pancakeImgs }) => {
    return (
        <div className="pancake">
            <div className="pancake__slider">
                <button className='pancake__btn-left' onClick={prevPancakeSlide}>
                    <span>&#11164;</span>
                </button>
                <img className="slider-imgs" src={ pancakeImgs[currentImgPancake] } alt="slide" />
                <button className='waffle__btn-right' onClick={nextPancakeSlide}>
                    <span>&#11166;</span>
                </button>
            </div>
            <div className="pancake__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Ex dolorum illo assumenda, 
                    distinctio consequuntur sed aspernatur inventore.
                </p>
            </div>
        </div>
    );
};

export default Pancake;