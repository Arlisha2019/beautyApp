// import { createStore } from 'redux'
//
// const rootReducer = combineReducers ({
//
// })
//
//
//
//
// export default reducer

const initialState = {
  cartItems: [],
  totalPrice: 0.00,
  quantity: 0
  // cartItems: {
  //   item: '',
  //   quantity: 0,
  // },
  // totalPrice: 0.00,
}

const cartWithoutItem = (cartItems, item) => cartItems.cartItems.filter(cartItems => cartItems.id !== item.id)

const itemInCart = (cartItems, item) => cartItems.cartItems.filter(cartItem => cartItem.id === item.id)




// const addToCart = (cartItems, item) => {
//   console.log(cartItems)
//   console.log(item)
//   const cartItem = itemInCart(cartItems, item)
//   console.log(cartItem)
//   return cartItem === undefined ? [...cartWithoutItem(cartItems, item), {...item, quantity: 1}]
//   : [...cartWithoutItem(cartItems, item), {...cartItem, quantity: +1}]
// }

const addToCart = (item) => {
  return {
    type: 'ADD',
    item: item,

  }
}

const removeFromCart = (item) => {
  return {
    type: 'REMOVE',
    item: item,
  }
}

// const removeFromCart = (cartItems,item) => {
//   return [...cartWithoutItem(cartItems, item) ]
// }

const removeAllFromCart = (cartItems,item) => {
  return item.quantity === 1
  ? [...cartWithoutItem(cartItems, item) ]
  : [...cartWithoutItem(cartItems, item), {...item, quantity: item.quantity -1}]
}

const cartReducer = (state= initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,

        cartItems: state.cartItems.concat(action.payload),
        totalPrice: state.totalPrice += action.payload.currentSku.listPrice,
        quantity: state.quantity += 1
      }
        // ...state,
        // cartItems: state.cartItems.concat(action.payload)


// cartItems
//    0 - { quantity: 2, product: {} }
//    1 - {quantity: 10, product : {} }

    // case 'REMOVE':
    //
    // 
    //
    //   return {
    //     ...state,
    //
    //     cartItems: state.cartItems.filter(item => item.productId != action.payload),
    //     totalPrice: state.totalPrice -= action.payload.currentSku.listPrice,
    //     quantity: state.quantity -= 1
    //
    //   }
        // return removeFromCart(state, action.payload)


    case 'REMOVE_ALL':
      return {
        ...state,

        cartItems: state.cartItems.filter(item => item!= action.payload),
        totalPrice: state.totalPrice -= action.payload.currentSku.listPrice,
        quantity: state.quantity -= 1

      }
        // const firstMatchIndex1 = state.indexOf(action.payload)
        // return removeAllFromCart(state, action.payload)

    default:
      return state;
  }
}


export default cartReducer
