/*
const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': 
            const alreadyExist = state.cartItems.find(item => item._id === action.payload._id);

            if (alreadyExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => 
                        item._id === action.payload._id ? action.payload : item
                    )
                };
                console.log("Updated state with existing item:", updatedState); // Debugging
        return updatedState;
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
                console.log("Updated state with new item:", newState); // Debugging
                return newState; 
            }
            case 'DELETE_FROM_CART' : return {
                ...state,
                cartItems:state.cartItems.filter(item=>{return item._id !== action.payload._id})
            }
        default: 
            return state;
    }
};

export default cartReducer;
*/
// Following is the updated code
// Ensure that cartItems is correctly synced between localStorage and Redux. The initial state in store.js ensures that cart items are fetched from localStorage:

const addToCartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const alreadyExist = state.cartItems.find(item => item._id === action.payload._id);

            if (alreadyExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item._id === action.payload._id ? action.payload : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }
        }
        case 'DELETE_FROM_CART': {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id),
            };
        }

        default:
            return state;
    }
};

export default addToCartReducer;