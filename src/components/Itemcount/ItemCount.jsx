import React, {useState} from 'react';



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

    function handleHasStock() {
        let hasStock;

        if(stock > 0) {
            hasStock = `<i className='las la-check-circle text-success me-1'></i> In Stock`;
        } else {
            hasStock = `<i className="las la-times-circle text-danger me-1"></i> Out of stock`;
        }   

        return(hasStock);
    }
    

    return (
        <div className='qtyContainer '>  
            <div className='d-flex align-items-center'>
                <div className='qtyField me-3 rounded'>
                    <a onClick={() => handleMinusButton()}>-</a>
                    <input readOnly value={qty} />
                    <a onClick={() => handlePlusButton()}>+</a>
                </div>

                {/* {handleHasStock()} */}
                {/* <i class="las la-times-circle text-danger me-1"></i> Out of stock */}
                <i className='las la-check-circle text-success me-1'></i> In Stock
                
            </div>  
            
            <a onClick={() => onAdd()} className="btn btn-dark my-3">Add to cart</a>

           <div className="d-flex align-items-center ">
            Share: <i className="lab la-facebook-f"></i> <i className="lab la-whatsapp"></i> 
           </div>
            
        </div>
  )
}

export default ItemCount