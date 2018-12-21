import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Header.css'


export class Header extends Component {

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     search: "",
  //     products: []
  //   }
  // }
  // searchBarInput = (e) => {
  //   this.setState({
  //     search: e.target.value
  //   })
  //   if(this.state.search && this.state.search.length > 1) {
  //     if(this.state.search.length % 2 === 0){
  //       this.componentDidMount()
  //     }
  //   }
  // }
  //
  // componentDidMount() {
  //   const WOMEN_FRAGRANCE_URL = "http://localhost:3001/api/products/cat160006"
  //   fetch(WOMEN_FRAGRANCE_URL)
  //   .then(results => results.json())
  //   .then(data => {
  //     let products = data.results.map((product) => {
  //       return ( <ul key={product.brandName}>
  //         <li>{product.brandName}</li>
  //         </ul>
  //       )
  //     })
  //     this.setState({
  //       products: products
  //
  //     })
  //     console.log("state", products);
  //   })
  // }

  render() {
    return (
      <div className="menuBar">
        <span><Link to ="/">Home</Link></span>
        <span><Link to ="/women_fragrances">Women Fragrances</Link></span>
        <span><Link to ="/cart">Shopping Cart</Link></span>
      <div>
      </div>
    </div>
    )
  }

}
