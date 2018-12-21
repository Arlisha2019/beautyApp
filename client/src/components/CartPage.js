import React, { Component } from 'react';
import { categories } from '../productCategories'
import { connect} from 'react-redux'
import Cart from './Cart'


export class CartPage extends Component {

  constructor(props){
    super(props)


}

  render() {

    let thisItemInCart = this.props.cartItems.filter(item => item.productId === this.props.productId)
    return (
      <div>
    
        <h1> Cart Page</h1>
        <Cart />

     </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
  }
}}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
