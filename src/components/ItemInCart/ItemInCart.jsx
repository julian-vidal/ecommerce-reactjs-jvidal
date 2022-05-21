import { useContext } from "react"
import CartContext from "../../store/CartContext"
import { Link } from "react-router-dom";


const ItemInCart = ({item}) => {

    const cartCtx = useContext(CartContext);

  return (
    <tr>
        <td className="align-middle">
            <button onClick={() => cartCtx.removeAllUnits(item.id) } className="btn btn-dark rounded-circle">X</button>
        </td>
        <td>
            <Link to={"/item/" + item.id} className="text-reset text-decoration-none">
                <div className="d-flex align-items-center product-name-img">
                    <img src={item.imageUrl} alt={item.title}/>
                    {item.title}
                </div>
            </Link>
            
        </td>
        <td className="align-middle">${item.price}</td>
        <td className="align-middle">
            <div className='qtyField me-3 rounded'>
                <button className="btn no-shadow" onClick={() => cartCtx.removeProduct(item.id)}>-</button>
                <input readOnly value={item.quantity} />
                <button className="btn no-shadow" onClick={()=> cartCtx.addOneProduct(item)}>+</button>
            </div>
            
        </td>
        <td className="align-middle">${(item.quantity * item.price).toLocaleString()}</td>
    </tr>
  )
}

export default ItemInCart