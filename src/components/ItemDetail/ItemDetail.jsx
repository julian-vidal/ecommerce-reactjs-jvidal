import React from 'react'
import securePayment from '../../img/secure-site.jpg'; 
import ItemCount from '../Itemcount/ItemCount';

const ItemDetail = ( {item} ) => {
    function cartMessage() {
          console.log("Product added to the cart");
        }
  return (
    <>
        <div className="row my-5">
            <div className="col-md-7">
                <img src={item?.imageUrl} alt={item?.title} className="w-100" />
            </div>
            <div className="col-md-5">
                <h2>{item?.title}</h2>
                <p className='lead'>${item?.price}</p>
                <p>{item?.description}</p>

                <ItemCount stock={5} initial={1} onAdd={cartMessage}/>

                <p className='mt-4 mb-0 text-muted text-uppercase'>Guaranteed safe checkout</p>
                <img src={securePayment} alt="Secure site" className='w-50' /> 
            </div>
        </div> 
    </>
  )
}

export default ItemDetail