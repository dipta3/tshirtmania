import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import Tshit from '../Tshirt/Tshit';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddtoCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('tshirt already exixst')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('successfully added');
        }


    }
    const handleRemoveItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining);
    }
    return (
        <div className='home-container'>

            <div className="tshit-container">
                {
                    tshirts.map(tshirt => <Tshit
                        tshit={tshirt}
                        key={tshirt._id}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshit>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                >

                </Cart>
            </div>
        </div>
    );
};

export default Home;