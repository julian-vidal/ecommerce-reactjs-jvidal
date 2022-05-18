import CartContext from '../../store/CartContext';
import { useContext } from 'react';
import ItemInCart from '../../components/ItemInCart/ItemInCart';
import { Link } from 'react-router-dom';


const CartSummary = () => {
    const cartCtx = useContext(CartContext);

  return (
    <>
        <div className="row mb-4">
            <h1 className='text-center'>Your cart</h1>
        </div>

        <div className="row">
          <table class="table">
            <thead className='table-light'>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody className='border-top-0'>
              {
                cartCtx.products.map(item => <ItemInCart key={item.id} item={item} />)
              }
            </tbody>
            <tfoot className='table-light border-top-0'>
              <tr>
                <td colspan="4"><b>Total</b></td>
                <td>
                  <b>${cartCtx.getCartTotal()}</b>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="row d-flex justify-content-between">
          <Link to="/" className='text-reset d-inline-block w-auto me-auto'><i className="las la-angle-left"></i>Continue Shopping</Link>
          <Link to="/cart" className='btn btn-outline-dark w-auto me-3' onClick={() => cartCtx.clear()}>Empty Cart</Link>
          <Link to="/checkout" className="btn btn-dark d-inline-block w-auto">Proceed to checkout</Link>
          
        </div>
    </>
  )
}

export default CartSummary