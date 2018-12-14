import React, { Component } from 'react';
import './App.css';
import Products from './components/Products'
import { categories } from './productCategories'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      selection: "mensFragrances"
    }

  }

  selectCategory = (e) => {
    var cat = e.target.getAttribute('product_cat');
    this.setState({selection: cat})
  }

  render() {
    return (
      <div>

        <button product_cat="makeup" onClick={this.selectCategory} style={{margin: '1rem'}}>makeup</button>
        <button product_cat="fragrences" onClick={this.selectCategory} style={{margin: '1rem'}}>fragrences</button>
        <button product_cat="mensFragrances" onClick={this.selectCategory} style={{margin: '1rem'}}>mens fragrences</button>
        { this.state.selection === "fragrences"? <Products style={{margin: '1rem'}} category={categories.fragrences} /> : null }
        { this.state.selection === "makeup"? <Products style={{margin: '1rem'}} category={categories.makeup} /> : null }
        { this.state.selection === "mensFragrances"? <Products style={{margin: '1rem'}} category={categories.mensFragrances} /> : null }


      </div>
    );
  }
}

export default App;
