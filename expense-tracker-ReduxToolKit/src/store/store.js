import { configureStore } from "@reduxjs/toolkit" 
import expenseSlice from "./ExpenseSlice"

const store = configureStore({
    reducer: {
        expense: expenseSlice.reducer
    }
})

export default store;