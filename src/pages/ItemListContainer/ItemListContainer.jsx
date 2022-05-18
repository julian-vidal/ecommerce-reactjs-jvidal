import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

// const getProducts = (category) => {
//   const myPromise = new Promise((resolve,reject) => {
//     const productList = [
//       {
//         id: 1,
//         title: "Crew Neck Sweater",
//         price: 100,
//         imageUrl: "https://julianvidal-dev.com/ecommerce-react/products/crew-neck-sweater/front.webp",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         category: "women",
//         stock: 5
//       },
//       {
//         id: 2,
//         title: "Long Sleeve T-Shirt",
//         price: 80,
//         imageUrl: "https://julianvidal-dev.com/ecommerce-react/products/long-sleeve-t-shirts/blue-sleeve.webp",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         category: "men",
//         stock: 7
//       },
//       {
//         id: 3,
//         title: "Cocodrile T-Shirt",
//         price: 79,
//         imageUrl: "https://julianvidal-dev.com/ecommerce-react/products/cocodrile-t-shirt2.png",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         category: "kids",
//         stock: 20
//       }
//     ];

//     const productsFiltered = category ? productList.filter(product => product.category === category) : productList;
    

//     setTimeout(() => {
//       resolve(productsFiltered)
//     }, 2000)
//   });

//   return myPromise;
// }


const getProducts = categoryId => {
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');

    const myQuery = categoryId && query(
      itemsCollection,
      where("category", "==", categoryId)
    )

    return getDocs(myQuery || itemsCollection);
    // return getDocs(itemsCollection)
}

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
  const heading = categoryId ? categoryId : "Hello World";

  useEffect(() => {
    

    getProducts(categoryId)
      .then(snapshot => {
        console.log(snapshot.docs[0].data())
        setProducts(snapshot.docs.map(doc => {
          return {...doc.data(), id:doc.id}
        }))
        // setProducts(snapshot.docs.map(doc => {return {...doc.data(), id:doc.id}}));
      })
      .catch(
        err => console.log(err)
      );
    // getProducts(categoryId)
    //   .then(res => {
    //     setProducts(res);
    //   })
    //   .catch (err => {
    //     console.log(err);
    //     alert('Ocurrió un error, revisa la consola para mas detalles');
    //   });
  }, [categoryId]);

  return (
    <>
    <section className='hero pb-5'>
          <div className='container'>
            <div className='itemListContainer'>
                <h3 className='text-center'>{heading}</h3>
            </div>
          </div>
    </section>

    <section className='py-5'>
      <div className="container">
        <ItemList items={products}/>
      </div>
    </section>
    </>

  )
}

export default ItemListContainer;