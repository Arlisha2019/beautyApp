import React from 'react';

export const Products = ({productsArray}) => {

  return (
    <div style={{width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{
      productsArray.map(
        function (product){
          return (
            <div style={{backgroundColor: 'lightgray', borderRadius: '.2rem', margin: '1rem', padding: '.5rem', width: '200px', height: 'auto'}}>
              <img src={`https://www.sephora.com${product.heroImage}`} />

              <h4>{product.brandName}</h4>
              <p>{product.displayName}</p>

            </div>)
        })
    }</div>)

}
