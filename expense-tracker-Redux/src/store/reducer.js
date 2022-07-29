import { ADD_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION } from "./actionType"

const initialState = { transaction: [] }

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transaction: [...state.transaction, action.payload],
            }
        case UPDATE_TRANSACTION:

            const existingTransactionIndex = state.transaction.findIndex(transaction => transaction.id === action.payload.id)
            const existingTransaction = state.transaction[existingTransactionIndex];
            let updatedTransactions;
            const updatedTransaction = { ...existingTransaction, text: action.payload.text, amount: +action.payload.amount }
            updatedTransactions = [...state.transaction]
            updatedTransactions[existingTransactionIndex] = updatedTransaction

            return {
                transaction: updatedTransactions
            }

        case DELETE_TRANSACTION:
            return {
                ...state,
                transaction: state.transaction.filter((transaction) => transaction.id !== action.payload),
            }

        default:
            return state;
    }
}

export default expenseReducer;