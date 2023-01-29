import React from 'react';
import './Tshirt.css'

const Tshit = ({ tshit, handleAddtoCart }) => {
    const { picture, name, price } = tshit;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={() => handleAddtoCart(tshit)}>Buy This</button>
        </div >
    );
};

export default Tshit;