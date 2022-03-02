export default function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]            
        case 'REMOVE_ITEM':
            return state.filter(item => item._id !== action.payload)
        default:
            return state
    }
}