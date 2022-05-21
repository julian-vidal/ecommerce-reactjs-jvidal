import React, { useContext } from 'react'
import CartContext from '../../store/CartContext';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';

const Cart = () => {

  const cartCtx = useContext(CartContext);
  cartCtx.setShowHeader(true)
  

  return (
    <section className='container mt-200'>
      
      {cartCtx.getCartQuantity() ? <CartSummary /> : <EmptyCart/> }
        
    </section>
  )
}

export default Cart