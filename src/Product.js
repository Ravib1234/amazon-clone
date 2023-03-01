import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating}) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into data layer
  
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title:title,
          image:price,
          rating:rating,
        }
      })
  }
  return (
    <div className='product'>
      
      <div
      className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
                </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => (
            <p>🌟</p>
            ))}
            
        </div>

        <img src="https://images-na.ssl-images-amazon.com/
        images/I/5lZymoq7UnL._AC_SY400_.jpg" alt=""/>
        
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
