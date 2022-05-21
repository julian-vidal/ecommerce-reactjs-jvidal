const LineItem = ({product}) => {

    

  return (
    <li className="d-flex align-items-center mb-4 pb-3 border-bottom">
        <div className="me-3">
            <img src={product.imageUrl} alt="" className="w-65px border" />
            <span className="position-absolute badge rounded-pill product-number">{product.quantity}
                <span className="visually-hidden">Products in the cart</span>
            </span>
        </div>
          
        {product.title}

        <span className="ms-auto text-end">${(product.quantity * product.price).toLocaleString()} </span>
        
    </li>
  )
}

export default LineItem