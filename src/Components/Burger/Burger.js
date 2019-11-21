import React from 'react';
import './Burger.css';

const Burger = props => {
    const priceStyle = {
        marginTop: '50px',
        fontSize: '20px',
        fontWeight: 'bold',
    };
    return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {props.ingredients}
                <div className="BreadBottom"></div>
                <p style={priceStyle}>Price: {props.price}</p>
            </div>

    );
};

export default Burger;