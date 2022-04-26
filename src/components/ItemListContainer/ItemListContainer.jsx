import React from 'react';
import ItemCount from '../Itemcount/ItemCount';

const ItemListContainer = (props) => {

  function cartMessage() {
    console.log("Product added to the cart");
  }
    return (
    <div className='itemListContainer'>
        <h3>{ props.greeting}</h3>
        <ItemCount stock={5} initial={1} onAdd={cartMessage} />
    </div>
  )
}

export default ItemListContainer;