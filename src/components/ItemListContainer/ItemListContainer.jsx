import { useEffect, useState } from 'react';
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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return (
    <div className='itemListContainer'>
        <h3>{ props.greeting}</h3>
        <ItemList items={products}/>
    </div>
  )
}

export default ItemListContainer;