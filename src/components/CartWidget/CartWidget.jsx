import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../store/CartContext'

const CartWidget = () => {
  
  const cartCtx = useContext(CartContext);

  // cartCtx.getCartQuantity()) ? "Hola" : "Hello";

  return (
    <>
    {cartCtx.getCartQuantity() ?
      <Link to="/cart">
        <i className="las la-shopping-cart position-relative">
          <span className="position-absolute badge rounded-pill product-number">{cartCtx.getCartQuantity()}
            <span className="visually-hidden">Products in the cart</span>
          </span>
        </i>
      </Link> : ""}
      
    </>
  )
}

export default CartWidget