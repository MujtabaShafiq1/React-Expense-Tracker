import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { deleteTransaction } from '../../store/actions';
import UpdateTransaction from './UpdateTransaction';
import Edit from '../../assests/edit.png'

const Transaction = ({ transaction }) => {

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false)

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
                <button className='delete-btn' onClick={() => dispatch(deleteTransaction(transaction.id))}>x</button>
                <img src={Edit} alt="edit" className='edit' onClick={showCartHandler} />
            </li>
        </>
    )
}

export default Transaction