import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContex)
    return (
        <div>
            <h4>Special</h4>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;