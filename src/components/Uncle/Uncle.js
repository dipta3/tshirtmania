import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money] = useContext(MoneyContex)
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>House: {house}</small></p>
            <p><small>House: {money}</small></p>
        </div>
    );
};

export default Uncle;