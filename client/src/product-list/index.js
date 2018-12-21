import React from 'react'
import { connect} from 'react-redux'
import {WomenFragrance } from './components/WomenFragrance'
import { cartItemsWithQuantity} from '../store'

export default function ProductListing(props) {

  return <div>
  {
    props.products.map( product =>
    <WomenFragrance
        product={product}
        addToCart={props.addToCart}
        cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        removeFromCart={props.removeFromCart}

        />)
  }


  </div>
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
