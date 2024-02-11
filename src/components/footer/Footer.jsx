import React from 'react';
import './Footer.scss';
import './FooterMedia.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="block">
                    <div className="footer__shadow"></div>
                    <div className="footer__main-block">
                        <div className="footer__main-info">
                            <div className="footer phone">
                                <div className="phone__icon">
                                    <img src="./img/Telephone.png" alt="" />
                                </div>
                                <div className="phone__number">
                                    <p>+ 1 2345 6789</p>
                                </div>
                            </div>
                            <div className="footer open-info">
                                <p>we are open<br/> 7 am - 10 pm</p>
                            </div>
                            <div className="footer location">
                                <div className="location__icon">
                                    <img src="./img/Location.png" alt="" />
                                </div>
                                <div className="location__adress">
                                    <p>Main Road, City</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer copyright">
                <div className="copyright__info">
                    <p>2020 Restaurant. All right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;