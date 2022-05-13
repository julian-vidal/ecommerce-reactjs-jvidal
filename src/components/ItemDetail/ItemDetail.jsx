import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import securePayment from '../../img/secure-site.jpg'; 
import CartContext from '../../store/CartContext';
import ItemCount from '../Itemcount/ItemCount';

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';


const ItemDetail = ( {item} ) => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = quantityToAdd => {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }

    const showItem = () => {
       return (cartCtx.getCartQuantity() === 1 ? "Item" : "Items");
    }

    // This is needed for the tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

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
                    
                    <span className='mb-3 custom-tooltip' data-bs-toggle="tooltip" data-bs-original-title="Check the console for more details" title data-bs-placement="right">Helper buttons <i className="las la-info-circle"></i></span>

                    <div className="d-flex flex-wrap gap-1 helper-buttons mt-3">
                        
                        <button onClick={() => console.log(cartCtx.products )} className='btn btn-outline-dark btn-sm flex-grow-1'>Show cart</button>
                        <button onClick={() => cartCtx.removeProduct(item.id) } className='btn btn-outline-dark btn-sm flex-grow-1' >Remove Product</button>
                        <div className="break"></div>
                        <button onClick={() => cartCtx.clear()} className='btn btn-outline-dark btn-sm flex-grow-1'>Empty cart</button>
                        <button onClick={() => console.log(cartCtx.isInCart(item.id))} className='btn btn-outline-dark btn-sm flex-grow-1'>Is In Cart?</button>
                    </div>

                    
                    
                    <div className="d-flex align-items-center mt-3">
                        Share: <i className="lab la-facebook-f"></i> <i className="lab la-whatsapp"></i> 
                    </div>
                    <p className='mt-4 mb-0 text-muted text-uppercase'>Guaranteed safe checkout</p>
                    <img src={securePayment} alt="Secure site" className='w-50' /> 
                </div>
            </div> 
        </div>
  )
}

export default ItemDetail