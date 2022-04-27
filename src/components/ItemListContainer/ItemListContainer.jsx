import React, { useEffect, useState } from 'react';
import ItemCount from '../Itemcount/ItemCount';
import ItemList from '../ItemList/ItemList';

const getProducts = () => {
  const myPromise = new Promise((resolve,reject) => {
    const productList = [
      {
        id: 1,
        title: "Crew Neck Sweater",
        price: 100,
        imageUrl: "./img/products/crew-neck-sweater/front.webp"
      },
      {
        id: 2,
        title: "Crew Neck Sweater",
        price: 100,
        imageUrl: "./img/products/crew-neck-sweater/front.webp"
      },
      {
        id: 3,
        title: "Crew Neck Sweater",
        price: 100,
        imageUrl: "./img/products/crew-neck-sweater/front.webp"
      }
    ];

    setTimeout(() => {
      resolve(productList)
    }, 2000)
  });

  return myPromise;
}


const ItemListContainer = (props) => {

  function cartMessage() {
    console.log("Product added to the cart");
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
        console.log(`setProducts es de tipo ${typeof setProducts}`);
        console.log(`useState es de tipo ${typeof useState}`);
      })
  }, []);

  return (
    <div className='itemListContainer'>
        <h3>{ props.greeting}</h3>
        <ItemCount stock={5} initial={1} onAdd={cartMessage} />

        <ItemList items={products}/>
    </div>
  )
}

export default ItemListContainer;