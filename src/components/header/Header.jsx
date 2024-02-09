import React from 'react';
import './Header.scss';
import './HeaderMedia.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="block">
                    <div className="logo">
                        <img src="./img/Logo.png" alt="" />
                    </div>
                    <ul className="menu">
                        <li className="menu__item">Home</li>
                        <li className="menu__item">Menu</li>
                        <li className="menu__item">About us</li>
                        <li className="menu__item">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;