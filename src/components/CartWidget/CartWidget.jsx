import React from 'react'

const CartWidget = () => {
  return (
    <>
        <i className="las la-shopping-cart position-relative">
            <span className="position-absolute badge rounded-pill product-number">0
              <span className="visually-hidden">Products in the cart</span>
            </span>
        </i>
    </>
  )
}

export default CartWidget