import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import Edit from '../../assests/edit.png'
import UpdateTransaction from './UpdateTransaction';

const Transaction = ({ transaction }) => {

    const [isEditing, setIsEditing] = useState(false)
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount > 0 ? '+' : "-";
    const propery = sign === '+' ? 'plus' : 'minus'

    const showCartHandler = () => {
        setIsEditing(true);
    };

    const hideCartHandler = () => {
        setIsEditing(false);
    };

    return (
        <>
            {isEditing && <UpdateTransaction onClose={hideCartHandler} transaction={transaction}/>}
            <li className={propery}>
                {transaction.text}
                <span>{sign}{Math.abs(transaction.amount)}$</span>
                <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
                <img src={Edit} alt="edit" className='edit' onClick={showCartHandler} />
            </li>
        </>
    )
}

export default Transaction