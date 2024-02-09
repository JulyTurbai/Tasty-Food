import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
            <div className="block">
                    <div className="about__descr">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque neque porro nesciunt qui nemo quia esse nisi ipsa 
                            voluptatibus sint provident, tempore dolore itaque quos quam nihil 
                            similique
                        </p>
                    </div>
                    <div className="about__main-text">
                        <p>about <br/> us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;