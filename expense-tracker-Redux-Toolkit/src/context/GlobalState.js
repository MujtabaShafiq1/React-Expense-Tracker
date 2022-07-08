import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
    transaction: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const AddTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    return (
        <GlobalContext.Provider
            value={{ transactions: state.transaction, deleteTransaction, AddTransaction}}>
            {children}
        </GlobalContext.Provider>)
}