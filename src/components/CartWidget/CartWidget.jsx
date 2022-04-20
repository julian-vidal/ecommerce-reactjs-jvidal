import React from 'react'

const CartWidget = () => {
  return (
    <>
        <i class="las la-shopping-cart position-relative">
            <span class="position-absolute badge rounded-pill product-number">0
            <span class="visually-hidden">unread messages</span>
    </span>
        </i>
    </>
  )
}

export default CartWidget