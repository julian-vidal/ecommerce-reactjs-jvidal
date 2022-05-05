import React from 'react';
import Item from "../Item/Item";

const ItemList = ({items}) => {
  return (
    <div className='card-group gap-4 justify-content-center'> 
        {items.map(item => <Item item={item} key="{item.id}"></Item>)}
    </div>
  )
}

export default ItemList