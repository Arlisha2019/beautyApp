import React, { Component } from 'react';
import { connect } from 'react-redux'
import MyStoreCheckout from './MyStoreCheckout'
import App from '../App'

const grandTotal = () => this.props.cartItems.reduce((total,cartItem) => {
  const price = parseFloat(cartItem.currentSku.listPrice.replace("$","")).toFixed(2)
  return total + parseFloat(price)
},0)

function sort(items) {
 return items.sort((a, b) => a.id < b.id )
}

let currentItems = []
class Cart extends Component {

  render() {
    return ( <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Item Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
        {
          this.props.cartItems.map((item,index) => {
          if(currentItems.includes(item.productId)){
            if(index == this.props.cartItems.length - 1) currentItems = []
            return ""
          }
          if(index == this.props.cartItems.length - 1) currentItems = []
          else currentItems.push(item.productId)
          const itemQuantity = this.props.cartItems.reduce((total,cartItem) => cartItem.productId == item.productId ? total + 1:total,0)
          return <tr key={item.productId}>
          <img src={`https://www.sephora.com${item.heroImage}`} />
          <td>{ item.brandName} </td>
          <td> {itemQuantity} </td>
          <td> ${parseFloat(item.currentSku.listPrice.replace("$","")).toFixed(2) * itemQuantity} </td>
          <td>
            <button onClick={() => this.props.addToCart(item)}> + </button>
            </td>
            <td>
              <button onClick={() => this.props.removeAllFromCart(item)}> Clear Cart </button>
              </td>
        </tr>} )

        }
        Grand Total: ${ this.props.cartItems.reduce((total,cartItem) => {
          const price = parseFloat(cartItem.currentSku.listPrice.replace("$","")).toFixed(2)
          return total + parseFloat(price)
        },0)}
        <div className="App">
          <p className="App-intro">
            <MyStoreCheckout
              name={'Discount Perfumes'}
              description={'Enter Your Credit Card Information Below'}
              amount={24}
            />
          </p>
        </div>
        </tbody>
      </table>
      </div>
    )
  }
}






const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    quantity: state.quantity,
    totalPrice: 0.00
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


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
