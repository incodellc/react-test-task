import React from 'react';
import londonStockLogo from '../../assets/londonStock.png';
import './Header.scss';

const Header = () => {
    return (
        <div className="stock-wrapper__header">
            <div className="stock-wrapper__header-logo">
                <img className="stock-wrapper__header-img" src={londonStockLogo}/>
            </div>
        </div>
    );
};

export default Header;
