import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import {collection, getDocs, query, where} from 'firebase/firestore';
import db from '../../services/firebase';
import Spinner from '../../components/Spinner/Spinner';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const getProducts = categoryId => {
    
    const itemsCollection = collection(db, 'items');
    
    const myQuery = categoryId && query(
      itemsCollection,
      where("category", "==", categoryId)
    )

    return getDocs(myQuery || itemsCollection);
}

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
  const heading = categoryId ? categoryId : "Hello World";
  const [load, setLoad] = useState(true);
  const cartCtx = useContext(CartContext);
  

  useEffect(() => {
    cartCtx.setShowHeader(true);
  }, [cartCtx])

  useEffect(() => {
    

    getProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return {...doc.data(), id:doc.id}
        }))
        setLoad(false);
      })
      .catch(
        err => console.log(err)
      );

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
        {load ? <Spinner />: <ItemList items={products}/> }
      </div>
    </section>
    </>

  )
}

export default ItemListContainer;