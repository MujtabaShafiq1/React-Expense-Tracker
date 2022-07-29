import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addTransaction } from '../../store/actions';

const AddTransaction = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const submitHandler = (event) => {
        event.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        dispatch(addTransaction(newTransaction))
        setText("")
        setAmount(0)
    }

    const textChangeHandler = (event) => {
            setText(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={textChangeHandler}
                        placeholder='Enter Text...'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense , positive - income)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={amountChangeHandler}
                        placeholder='Enter Amount...'
                    />
                </div>
                <button className='btn'>
                    Add Transaction
                </button>
            </form>
        </>
    )
}

export default AddTransaction