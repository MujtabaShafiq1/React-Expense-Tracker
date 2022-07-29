import { expenseActions } from "./ExpenseSlice"

export const addTransaction = (transaction) => {
    return async (dispatch) => {
        dispatch(expenseActions.AddTransaction(transaction))
    }
}

export const deleteTransaction = (transactionId) => {
    return async (dispatch) => {
        dispatch(expenseActions.DeleteTransaction(transactionId))
    }
}

export const updateTransaction = (transaction) => {
    return async (dispatch) => {
        dispatch(expenseActions.UpdateTransaction(transaction))
    }
}