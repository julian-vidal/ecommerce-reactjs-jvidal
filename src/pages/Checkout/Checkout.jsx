import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import { Link, useNavigate } from "react-router-dom";
import LineItem from "./LineItem";
import db from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";


const Checkout = () => {

  
  const cartCtx = useContext(CartContext);
  

  useEffect(() => {
    cartCtx.setShowHeader(false)
  },[cartCtx])

  const cartTotal = cartCtx.getCartTotal();
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    zip: '',
    city: '',
    state: '',
    country: ''
  })

  const {firstName, lastName, email, phone, address, address2, zip, city, state, country} = buyer;

  const handleInputChange = e => {
    setBuyer(({
      ...buyer,
      [e.target.id]: e.target.value
    }))

  }

  const handleSubmit = e => {
    e.preventDefault();
    const items = cartCtx.products.map(item => { return {id:item.id, title:item.title, price:item.price, quantity:item.quantity} })
    const purchaseDate = new Date();
    const cartTotal = cartCtx.getCartTotal();
    const data = {buyer, items, purchaseDate, cartTotal }
    generateOrder(data)
  }

  const generateOrder = async(data) => {
    try {
      const col = collection(db, "orders")
      const order = await addDoc(col, data)
      cartCtx.setOrderId(order.id);
      navigate("/thank-you");
      cartCtx.clear()
    } catch (error) {

    }
  }

  
  
  return (
    <section className='container-fluid'>
    
      <div className="row">
        <div className="col-7 p-5 vh-100">
          <h2 className="mb-4">Complete Checkout</h2>
          <form className="mb-5" onSubmit={handleSubmit}>
            <h6>Contact Information</h6>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email*"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number*"
                  value={phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <h6>Shipping Information</h6>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address*"
                  value={address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment, suite, etc"
                  value={address2}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder="ZIP code*"
                  value={zip}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City*"
                value={city}
                onChange={handleInputChange}
                required
              />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="State*"
                value={state}
                onChange={handleInputChange}
                required
              />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Country*"
                  value={country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <input type="submit" value="checkout now" className="btn btn-dark" />
          </form>
          <Link to="/" className="text-muted"><i className="las la-arrow-left"></i> Back to the site</Link>
        </div>

        <div className="col-5 bg-light p-5 border-start">

          <ul className="ps-0">
              {
                  cartCtx.products.map(item => <LineItem key={item.id} product={item} /> )
              }
          </ul>
          
          <p>
            Total <span className="h5 float-end"><b>${cartTotal.toLocaleString('en')}</b></span>
          </p>
          
        </div>
      </div>

    </section>
  )
}

export default Checkout