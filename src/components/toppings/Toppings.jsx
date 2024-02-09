import React from 'react';
import './Toppings.scss';

const Toppings = () => {
    return (
        <div className='toppings'>
            <div className="container">
                <div className="block">
                    <div className="toppings__main-text">
                        <h3>with our special</h3>
                        <h4>toppings</h4>
                        <div className="toppings__shadow"></div>
                    </div>
                    <div className="toppings__decor">
                        <img src="./img/Toppings.png" alt="" />
                    </div>
                    <div className="toppings__descr">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Doloremque voluptatum eius consequuntur eum praesentium
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toppings;