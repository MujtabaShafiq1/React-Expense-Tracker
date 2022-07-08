import React from 'react'
import {useDispatch } from 'react-redux';

import { deleteTransaction } from '../store/actions';

const Transaction = ({ transaction }) => {

    const dispatch = useDispatch();

    const sign = transaction.amount > 0 ? '+' : "-";
    const propery = sign === '+' ? 'plus' : 'minus'

    return (
        <li className={propery}>
            {transaction.text}
            <span>{sign}{Math.abs(transaction.amount)}$</span>
            <button
                className='delete-btn'
                onClick={() => dispatch(deleteTransaction(transaction.id))}
            >
                x</button>
        </li>
    )
}

export default Transaction