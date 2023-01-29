import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContex);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
        </div>
    );
};

export default Sister;