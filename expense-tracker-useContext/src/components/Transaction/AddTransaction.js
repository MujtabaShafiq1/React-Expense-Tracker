import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { AddTransaction } = useContext(GlobalContext)

    const submitHandler = (event) => {
        event.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text: text,
            amount: +amount
        }
        AddTransaction(newTransaction)
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