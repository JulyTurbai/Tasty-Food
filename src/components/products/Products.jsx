import React, { useState } from 'react';
import './Products.scss';
import './ProductsMedia.scss';
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

    const [currentImgPancake, setCurrentImgPancake] = useState(0);
    const [currentImgWaffle, setCurrentImgWaffle] = useState(0);

    const prevPancakeSlide = () => {
        setCurrentImgPancake((prevIndex) => (prevIndex === 0 ? pancakeImgs.length -1 : prevIndex - 1));
    };

    const nextPancakeSlide = () => {
        setCurrentImgPancake((prevIndex) => (prevIndex === pancakeImgs.length -1 ? 0 : prevIndex + 1))
    }

    const prevWaffleSlide = () => {
        setCurrentImgWaffle((prevIndex) => (prevIndex === 0 ? wafflesImgs.length -1 : prevIndex - 1));
    };

    const nextWaffleSlide = () => {
        setCurrentImgWaffle((prevIndex) => (prevIndex === wafflesImgs.length -1 ? 0 : prevIndex + 1))
    }
    return (
        <div className='products'>
            <div className="container">
                <div className="block">
                    <Pancake
                    prevPancakeSlide={ prevPancakeSlide }
                    nextPancakeSlide={ nextPancakeSlide }
                    currentImgPancake={ currentImgPancake }
                    pancakeImgs={ pancakeImgs }
                    />
                     <Waffle
                    prevWaffleSlide={ prevWaffleSlide }
                    nextWaffleSlide={ nextWaffleSlide }
                    currentImgWaffle={ currentImgWaffle }
                    wafflesImgs={ wafflesImgs }
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;