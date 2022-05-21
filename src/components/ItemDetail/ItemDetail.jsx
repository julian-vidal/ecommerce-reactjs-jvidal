import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import ItemCount from '../Itemcount/ItemCount';


const ItemDetail = ( {item} ) => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = quantityToAdd => {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }

    const showItem = () => {
       return (cartCtx.getCartQuantity() === 1 ? "Item" : "Items");
    }

    return (
        <div className="container itemDetail mb-5">
            <div className="row ">
                <div className="col-md-7">
                    <img src={item?.imageUrl} alt={item?.title} className="w-100" />
                </div>
                <div className="col-md-5">
                    <h2>{item?.title}</h2>
                    <p className='lead'>${item?.price}</p>
                    <p>{item?.description}</p>

                    <ItemCount stock={item.stock} initial={1} onAdd={addToCartHandler}/>  
                    
                    {
                        cartCtx.getCartQuantity() > 0 && 
                            <Link to="/cart">
                                <button className='btn btn-dark w-100 my-3'> Checkout now ({cartCtx.getCartQuantity()} {showItem()})</button>
                            </Link> 
                    }
                    
                    <div className="d-flex align-items-center mt-3">
                        Share: <i className="lab la-facebook-f"></i> <i className="lab la-whatsapp"></i> 
                    </div>
                    <p className='mt-4 mb-0 text-muted text-uppercase'>Guaranteed safe checkout</p>
                    <img src="https://julianvidal-dev.com/ecommerce-react/secure-site.jpg" alt="Secure site" className='w-50' /> 
                </div>
            </div> 
        </div>
  )
}

export default ItemDetail