import { createSlice } from "@reduxjs/toolkit"

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        transaction: []
    },
    reducers: {
        AddTransaction(state, action) {
            state.transaction = [...state.transaction, action.payload];
        },
        UpdateTransaction(state, action) {
            const existingTransactionIndex = state.transaction.findIndex(transaction => transaction.id === action.payload.id)
            const existingTransaction = state.transaction[existingTransactionIndex];
            let updatedTransactions;
            const updatedTransaction = { ...existingTransaction, text: action.payload.text, amount: +action.payload.amount }
            updatedTransactions = [...state.transaction]
            updatedTransactions[existingTransactionIndex] = updatedTransaction

            state.transaction = updatedTransactions;

        }, 
        DeleteTransaction(state, action) {
            state.transaction = state.transaction.filter((transaction) => transaction.id !== action.payload);
        }
    }
})


export const expenseActions = expenseSlice.actions;
export default expenseSlice;