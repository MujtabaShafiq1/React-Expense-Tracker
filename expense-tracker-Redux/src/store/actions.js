import {ADD_TRANSACTION,UPDATE_TRANSACTION, DELETE_TRANSACTION} from './actionType'

export const addTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction
})

export const deleteTransaction = (transactionId) => ({
    type: DELETE_TRANSACTION,
    payload: transactionId
})

export const updateTransaction = (transaction) => ({
    type: UPDATE_TRANSACTION,
    payload: transaction
})