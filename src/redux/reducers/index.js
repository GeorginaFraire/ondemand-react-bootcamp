import { createSlice } from "@reduxjs/toolkit";

const CartProductsSlice = createSlice({
  name: "cartProducts",
  initialState: {
    numberCartProducts: 0,
    CartProducts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let newCartProduct = {
        id: action.payload.id,
        name: action.payload.data.name,
        price: action.payload.data.price,
        quantity:
          action.payload.quantity === undefined ? 1 : action.payload.quantity,
        image: action.payload.data.mainimage.url,
        altImg: action.payload.data.mainimage.alt,
        stock: action.payload.data.stock,
        newStock:
          action.payload.newStock === undefined
            ? action.payload.data.stock - 1
            : action.payload.newStock,
        total:
          action.payload.data.price *
          (action.payload.quantity === undefined ? 1 : action.payload.quantity),
      };

      if (state.numberCartProducts === 0) {
        state.CartProducts.push(newCartProduct);
        state.numberCartProducts = 1;
      } else {
        const cartProduct = state.CartProducts.find(
          (product) => product.id === newCartProduct.id
        );
        if (cartProduct) {
          cartProduct.quantity =
            newCartProduct.quantity + cartProduct.quantity > cartProduct.stock
              ? newCartProduct.stock
              : newCartProduct.quantity + cartProduct.quantity;
          cartProduct.newStock =
            newCartProduct.quantity === newCartProduct.stock
              ? 0
              : cartProduct.stock - cartProduct.quantity;
          cartProduct.total = cartProduct.price * cartProduct.quantity;
        } else {
          state.CartProducts.push(newCartProduct);
          state.numberCartProducts += 1;
        }
      }
    },
    incrementQuantity: (state, action) => {
      const cartProduct = state.CartProducts.find(
        (product) => product.id === action.payload.id
      );

      if (cartProduct) {
        cartProduct.quantity = cartProduct.quantity + 1;
        cartProduct.newStock = cartProduct.newStock - 1;
        cartProduct.total = cartProduct.price * cartProduct.quantity;
      }
    },
    decrementQuantity: (state, action) => {
      const cartProduct = state.CartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (cartProduct) {
        cartProduct.quantity = cartProduct.quantity - 1;
        cartProduct.newStock = cartProduct.newStock + 1;
        cartProduct.total = cartProduct.price * cartProduct.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const cartProduct = state.CartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (cartProduct) {
        state.CartProducts.splice(state.CartProducts.indexOf(cartProduct), 1);
        state.numberCartProducts -= 1;
      }
    },
    clearAll:()=>{
      return {
        numberCartProducts: 0,
        CartProducts: [],
      }
    }
  },
});

export const {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  clearAll,
} = CartProductsSlice.actions;
export default CartProductsSlice.reducer;
