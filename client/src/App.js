import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Products } from './components/Products'
const axios = require('axios')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
    this.fetchProducts()
  }

  fetchProducts() {


    const makeUpCat = "cat140006"
    const fragrenceCat = "cat160006"
    const eye = "cat130054"
    const eyeShadow = "cat60045"

    axios.get('/api/products/' + fragrenceCat).then(({ data })=>{

      const products = data.products
      if(products){
        this.setState({products: products})
      }

      console.log(this.state)
    })
    // check out other categories here: https://www.sephora.com/api/catalog/categories
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to Arlisha's Beauty App </h1>
        <Products productsArray={this.state.products} />
      </div>
    );
  }
}

export default App;
