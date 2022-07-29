import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTransaction } from '../../store/ExpenseActions'
import Modal from '../Overlay/Modal'

const UpdateTransaction = ({ transaction, onClose }) => {

    const dispatch = useDispatch();
    const [text, setText] = useState(transaction.text)
    const [amount, setAmount] = useState(transaction.amount)

    const textChangeHandler = (e) => {
        setText(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const updatedTransaction = { id: transaction.id, text, amount }
        dispatch(updateTransaction(updatedTransaction));
        onClose();
    }

    return (
        <>
            <Modal onClose={onClose}>
                <button className='close' onClick={onClose}>X</button>
                <h2>Update Transaction</h2>
                <form onSubmit={submitHandler}>
                    <div className='form-control'>
                        <label htmlFor="text">Text</label>
                        <input
                            type="text"
                            name="expenseText"
                            value={text}
                            onChange={textChangeHandler}
                            placeholder='Enter Text...'
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            name="expenseAmount"
                            value={amount}
                            onChange={amountChangeHandler}
                            placeholder='Enter Amount...'
                        />
                    </div>

                    <button className='btn' style={{ width: "20%", marginTop: "5%" }}>
                        Update
                    </button>

                </form>

            </Modal>
        </>
    )
}


export default UpdateTransaction