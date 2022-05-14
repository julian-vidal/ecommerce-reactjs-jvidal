import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="d-flex flex-column align-items-center">
        <h3>No Products in the Cart</h3>
        <Link to="/" className="btn btn-dark">Continue shopping</Link>
    </div>
  )
}

export default EmptyCart