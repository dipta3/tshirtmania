import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContex = createContext('Matir ring');
export const MoneyContex = createContext(555);
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555)
    const ring = 'diamond ring'
    return (
        <RingContex.Provider value={[house, setHouse]}>
            <MoneyContex.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContex.Provider>
        </RingContex.Provider >
    );
};

export default Grandpa;