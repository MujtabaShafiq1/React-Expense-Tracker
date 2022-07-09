const data = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                transaction: state.transaction.filter((transaction) => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                transaction: [action.payload, ...state.transaction]
            }

        case 'UPDATE_TRANSACTION':
            const existingTransactionIndex = state.transaction.findIndex(transaction => transaction.id === action.payload.id)
            const existingTransaction = state.transaction[existingTransactionIndex];
            let updatedTransactions;

            const updatedTransaction = { ...existingTransaction, text: action.payload.text, amount: +action.payload.amount}
            updatedTransactions = [...state.transaction]
            updatedTransactions[existingTransactionIndex] = updatedTransaction

            return {
                transaction: updatedTransactions
            }

        default:
            return;
    }
}

export default data;