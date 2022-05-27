import React, { useState} from 'react';
import HasStock from "./HasStock";


const ItemCount = ({stock, initial, onAdd}) => {
    const [qty, setQty] = useState(initial);

    function handlePlusButton() {
        if (qty < stock) {
            setQty(qty+ 1);
        } 
    }

    function handleMinusButton() {
        if (qty > initial) {
            setQty(qty - 1);
        } 
    }

    return (
        <div className='qtyContainer '>  
            <div className='d-flex align-items-center'>

                {stock>0 ?
                <div className='qtyField me-3 rounded'>
                    <button onClick={() => handleMinusButton()} className="btn no-shadow">-</button>
                    <input readOnly value={qty} />
                    <button onClick={() => handlePlusButton()} className="btn no-shadow">+</button>
                </div> : ""}
                

                <HasStock stock={stock} />
                
            </div>  
            
            {stock>0 ? <button onClick={() => (qty <= stock) && onAdd(qty)} className="btn btn-dark my-3">Add to cart</button> : ""}
            
        </div>
  )
}

export default ItemCount