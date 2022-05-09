import React, {useEffect, useState} from 'react';



const ItemCount = ({stock, initial, onAdd}) => {
    const [qty, setQty] = useState(initial);
    const [stringStock, setStringStock] = useState("");

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

    useEffect(() => {
        if(stock === 0) {
            setStringStock(<i className='las la-times-circle text-danger me-1'></i>, "Out of stock");
        } else if (stock === 1) {
            setStringStock("<i className='las la-times-circle text-danger me-1'></i> {stock} Item in Stock");
        } else {
            setStringStock("<i className='las la-check-circle text-success me-1'></i>  Items in Stock");
        }
    } ,[stock])

    return (
        <div className='qtyContainer '>  
            <div className='d-flex align-items-center'>
                <div className='qtyField me-3 rounded'>
                    <button onClick={() => handleMinusButton()} className="btn no-shadow">-</button>
                    <input readOnly value={qty} />
                    <button onClick={() => handlePlusButton()} className="btn no-shadow">+</button>
                </div>

                {/* {stringStock} */}
                {/* <i class="las la-times-circle text-danger me-1"></i> Out of stock */}
                <i className='las la-check-circle text-success me-1'></i> {stock} Items in Stock
                
            </div>  
            
            
            <button onClick={() => onAdd(qty)} className="btn btn-dark my-3">Add to cart</button>
        </div>
  )
}

export default ItemCount