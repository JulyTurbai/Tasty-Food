import React, { useState } from 'react';
import './Products.scss';
import Pancake from './Pancake';
import Waffle from './Waffle';

const Products = () => {

    const pancakeImgs = [
        './img/Pancake.png',
        './img/Pancake2.png',
        './img/Pancake3.png',
        './img/Pancake4.png',
    ];

    const wafflesImgs = [
        './img/Waffle.png',
        './img/Waffle2.png',
        './img/Waffle3.png',
        './img/Waffle4.png',
    ];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const prevPancakeSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? pancakeImgs.length -1 : prevIndex - 1));
    };

    const nextPancakeSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === pancakeImgs.length -1 ? 0 : prevIndex + 1))
    }

    const prevWaffleSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? wafflesImgs.length -1 : prevIndex - 1));
    };

    const nextWaffleSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === wafflesImgs.length -1 ? 0 : prevIndex + 1))
    }
    return (
        <div className='products'>
            <div className="container">
                <div className="block">
                    <Pancake
                    prevPancakeSlide={ prevPancakeSlide }
                    nextPancakeSlide={ nextPancakeSlide }
                    currentImgIndex={ currentImgIndex }
                    pancakeImgs={ pancakeImgs }
                    />
                     <Waffle
                    prevWaffleSlide={ prevWaffleSlide }
                    nextWaffleSlide={ nextWaffleSlide }
                    currentImgIndex={ currentImgIndex }
                    wafflesImgs={ wafflesImgs }
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;