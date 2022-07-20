import {createSlice} from '@reduxjs/toolkit';


const CartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState: {
        numberCartProducts: 0,
        CartProducts: [],
    },
    reducers: {
        addToCart: (state, action) => {  
             let newCartProduct ={
                id: action.payload.results[0].id,
                name: action.payload.results[0].data.name,
                price: action.payload.results[0].data.price,
                quantity: action.payload.quantity === undefined ? 1 : action.payload.quantity,
                image: action.payload.results[0].data.mainimage.url,
                altImg: action.payload.results[0].data.mainimage.alt,
                stock: action.payload.results[0].data.stock,
                newStock: action.payload.newStock === undefined ? action.payload.results[0].data.stock - 1 : action.payload.newStock,
            }

            if(state.numberCartProducts === 0){
                state.CartProducts.push(newCartProduct);
                state.numberCartProducts = 1; 
            }
            else{
                const cartProduct = state.CartProducts.find(product => product.id === newCartProduct.id);
                if(cartProduct){
                    cartProduct.quantity = (newCartProduct.quantity + cartProduct.quantity) > cartProduct.stock ? newCartProduct.stock : newCartProduct.quantity + cartProduct.quantity;
                    cartProduct.newStock = newCartProduct.quantity === newCartProduct.stock ? 0 : cartProduct.stock - cartProduct.quantity; 
                }
                else{
                    state.CartProducts.push(newCartProduct);
                    state.numberCartProducts += 1; 
                }
            }  
            
        }
    }
});




export const { addToCart } = CartProductsSlice.actions;
export default CartProductsSlice.reducer;