import React, {useState} from 'react';



const ItemCount = ({stock, initial, onAdd}) => {
    const [qty, setQty] = useState(initial);

    function handlePlusButton() {
        if (qty < stock) {
            setQty(qty+ 1);
        } 
    }

    function handleMinusButton() {
        if (qty > 1) {
            setQty(qty - 1);
        } 
    }

    return (
        <div className='qtyContainer'>    
            <div className='qtyField mb-3 rounded'>
                <a onClick={() => handleMinusButton()}>-</a>
                <input readOnly value={qty} />
                <a onClick={() => handlePlusButton()}>+</a>
            </div>
            <a onClick={() => onAdd()} className="btn btn-dark">Add to cart</a>
        </div>
  )
}

export default ItemCount