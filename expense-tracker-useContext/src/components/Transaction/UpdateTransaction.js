import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Modal from '../Overlay/Modal'

const UpdateTransaction = ({ transaction, onClose }) => {

    const [text, setText] = useState(transaction.text)
    const [amount, setAmount] = useState(transaction.amount)

    const { UpdateTransaction } = useContext(GlobalContext)

    const textChangeHandler = (e) => {
        setText(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const updatedTransaction = { id: transaction.id, text, amount }
        UpdateTransaction(updatedTransaction);
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