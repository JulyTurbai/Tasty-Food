import React from 'react';
import Hero from './hero/Hero';
import Social from './social/Social';
import Discount from './discount/Discount';
import Products from './products/Products';
import Toppings from './toppings/Toppings';
import About from './about/About';


const Main = () => {
    return (
        <div>

            <Hero/>
            <Social/>
            <Discount/>
            <Products/>
            <Toppings/>
            <About/>

        </div>
    );
};

export default Main;