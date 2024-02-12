export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload.newProduct] };
        case 'REMOVE_PRODUCT':
            return { ...state, products: state.products.filter((product) => product.productId !== action.payload.id) };
        default:
            return state;
    }

}
