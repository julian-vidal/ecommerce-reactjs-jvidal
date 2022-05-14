import React, { useContext } from 'react'
import CartContext from '../../store/CartContext';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';

const Cart = () => {

  const cartCtx = useContext(CartContext);

  return (
    <section className='cart-page container'>
      
      {cartCtx.getCartQuantity() ? <CartSummary /> : <EmptyCart/> }
        
    </section>
  )
}

export default Cart