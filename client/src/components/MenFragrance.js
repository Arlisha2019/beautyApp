import React, { Component } from 'react';
import { categories } from '../productCategories'
import './MenFragrance.css'

const MENS_FRAGRANCE_URL = "http://localhost:3001/api/products/cat1230040"


export class MenFragrance extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
      isLoaded: false

    }
  }

  componentDidMount() {
    fetch(MENS_FRAGRANCE_URL)
    .then((res) => {
      return res.json()
    }).then((json) => {
      
        this.setState({
          isLoaded: true,
          products : json.products

      })

    })
  }

  render() {

    var { isLoaded, products } = this.state

    if (!isLoaded) {
      return <div>Loading...2...</div>

  } else {

    return (
      <div>

         {products.map(index => (
           <div key={index} id="menContainer">
            <ul className="menList">
                <img src={`https://www.sephora.com${index.heroImage}`} />
                <h4>{index.brandName}</h4>
                <h6>{index.displayName} </h6>
                <h4>{index.currentSku.listPrice}</h4>
                <h5 className="ratings">{index.rating}</h5>
                <button type="submit">Add to Cart</button>
              </ul>
            </div>
        ))}
      </div>
      )
    }
  }
}
