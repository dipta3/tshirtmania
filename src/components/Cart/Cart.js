import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please but al least one item!!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno ekta nao</h3>
        </div>
    }
    else {
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? 'orange' : 'purple'}> This is orders</h2>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity:{cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>Tin jonke gift diba?</p> : <p>Kino kino</p>
            }
            <p>and operator</p>
            {cart.length === 2 || <h2>Double Item na</h2>}
        </div>
    );
};

export default Cart;