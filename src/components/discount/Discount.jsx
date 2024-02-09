import React from 'react';
import './Discount.scss';
import './DiscountMedia.scss';

const Discount = () => {
    return (
        <div className='discount'>
            <div className="discount__top"></div>
            <div className="container">
                <div className="block">
                    <div className="discount__price">
                        <p>
                            20% off
                        </p>
                    </div>
                    <div className="discount__img">
                        <img src="./img/Discount-img.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="discount__bottom"></div>
        </div>
    );
};

export default Discount;