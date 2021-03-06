import React, { Component } from 'react';
const axios = require('axios')

export class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      renderedProducts: null,
      loading: true
    }

    this.fetchProducts(this.props.category)
  }

  fetchProducts(category) {

    if(category){

      axios.get('/api/products/' + category).then(({ data })=>{

        const products = data.products
        console.log(data.products);
        if(products){
          this.renderProducts(products)

        }
        else{
          this.setState({loading: false})
        }

      })

    }

    // check out other categories here: https://www.sephora.com/api/catalog/categories
  }

  renderProducts = (productsArray) => {

    const renderedProducts =
        productsArray.map(
            function (product){

              return (
                <div>
              <div style={{backgroundColor: 'lightgray', borderRadius: '.2rem', margin: '1rem', padding: '.5rem', width: '200px', height: 'auto'}}>
                <img src={`https://www.sephora.com${product.heroImage}`} />
                <h4>{product.brandName}</h4>
                <p>{product.displayName}</p>
                <h5>{product.currentSku.listPrice}</h5>
                <h5>{product.rating}</h5>
                <button>Add To Cart</button>
              </div>
            </div>)
            })


      this.setState({
        renderedProducts: renderedProducts,
        loading: false
      })
    }

  render() {

    return (
      <div>

      <h1> Welcome to my Fragrance Page </h1>
        {this.state.loading? <p>loading...0 </p> : null}
        <div style={{width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {this.state.renderedProducts}
        </div>
      </div>
    );
  }
}
