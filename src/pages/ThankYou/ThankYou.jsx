import { useContext, useEffect } from "react"
import CartContext from "../../store/CartContext"

const ThankYou = () => {
    const cartCtx = useContext(CartContext);
    

    useEffect(() => {
      cartCtx.setShowHeader(true);
    }, [cartCtx])
    

  return (
    <section className="container mt-200 text-center">
        <h1>Thanks, your order was received successfuly</h1>
        <h3>Your order ID is {cartCtx.orderId} </h3>
    </section>
  )
}

export default ThankYou