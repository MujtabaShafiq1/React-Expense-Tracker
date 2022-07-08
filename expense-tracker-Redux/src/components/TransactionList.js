import React from 'react'
import { useSelector } from 'react-redux'
import Transaction from './Transaction'

const TransactionList = () => {
    
    const transactions = useSelector((state) => state.transaction)

    return (
        <>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactions.map((transaction) => (
                    <Transaction
                        transaction={transaction}
                        key={transaction.id} />
                ))}

            </ul>
        </>
    )
}

export default TransactionList