import React, { Component } from 'react';
import { categories } from '../productCategories'
import './WomenFragrance.css'
import { connect} from 'react-redux'



const WOMENS_FRAGRANCE_URL = "http://localhost:3001/api/products/cat160006"

 class WomenFragrance extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
      isLoaded: false
    }
    console.log(props);
  }


  componentDidMount() {
    fetch(WOMENS_FRAGRANCE_URL)
    .then((res) => {
      return res.json()
    }).then((json) => {
        console.log(json)
        this.setState({
          isLoaded: true,
          products : json.products

      })
    })
  }



  render() {

    var { isLoaded, products } = this.state

    if (!isLoaded) {
      return <div>Loading...1...</div>

  } else {

    return (
      <div>

         {products.map(item => (
           <div key={item.productId} id="womenContainer">
            <ul className="womenList">
                <img src={`https://www.sephora.com${item.heroImage}`} />
                <h4>{item.brandName}</h4>
                <h6>{item.displayName} </h6>
                <h4>{item.currentSku.listPrice}</h4>
                <h5 className="ratings">{item.rating}</h5>

                <button onClick={() => this.props.addToCart(item)} type="submit">Add to Cart</button>
              </ul>
            </div>
        ))}
      </div>
      )
    }
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
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WomenFragrance)
