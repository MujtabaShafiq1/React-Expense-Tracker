import {ADD_TRANSACTION, DELETE_TRANSACTION } from "./actionType"

const initialState = { transaction: []}

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transaction: [...state.transaction,action.payload],
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