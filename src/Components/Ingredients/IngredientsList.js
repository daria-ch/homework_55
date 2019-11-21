import React from 'react';
import './Ingredients.css'

const IngredientsList = (props) => {

    const imgStyle = {
        width: '100px',
        height: '100px'
    };
    return (
        <div>
            <div className="ingredient">
                <img onClick={props.add} style={imgStyle} src={props.image} alt='#'/>
                <p>{props.name}</p>
                <p>x {props.count}</p>
                <p onClick={props.remove}><i className="fas fa-trash-alt"></i></p>
            </div>
        </div>
    );
};

export default IngredientsList;