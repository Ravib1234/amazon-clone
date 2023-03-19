import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket}, dispatch ] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
         className="checkout__ad"
        src="https://images-na.ssl-images-amazon.
        com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
        alt=""
        />

        <div>
            <h2 className='checkout__title'> Your Shopping
             Basket </h2>
              
              
             <CheckoutProduct
                item='234221'
                title="This is a test"
                image="https://m.media-amazon.com/images/I/51WIKlio9gL.jpg"
                price={199.99}
                rating={5}
                
                />

                <CheckoutProduct
                item='234221'
                title="This is a test"
                image="https://m.media-amazon.com/images/I/51WIKlio9gL.jpg"
                price={199.99}
                rating={5}
                
                />
              
              {basket.map(item => (
               
               <CheckoutProduct
                item={item.item}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                
                />

                

              ))}
             
             {/*  CheckoutProduct  */}
             {/*  CheckoutProduct  */}
             {/*  CheckoutProduct  */}
             {/*  CheckoutProduct  */}
             
        </div>
        </div>

        <div className='checkout__right'>
        
            <Subtotal />
        
      </div>
    </div>
  )
}

export default Checkout
