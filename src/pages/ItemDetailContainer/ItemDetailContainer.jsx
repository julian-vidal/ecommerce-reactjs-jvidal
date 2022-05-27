import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {doc, getDoc } from "firebase/firestore";
import db from '../../services/firebase';
import Spinner from '../../components/Spinner/Spinner';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const getItemDetails = id => {
  const myItem = doc(db, "items", id);
  return getDoc(myItem);
}

const ItemDetailContainer = () => {

    const [itemDetails, setItemDetails] = useState({});
    const [load, setLoad] = useState(true);
    const {id} = useParams();
    const cartCtx = useContext(CartContext);
    

    useEffect(() => {
      cartCtx.setShowHeader(true);
        getItemDetails(id)
            .then(snapshot => {
                setItemDetails({...snapshot.data(), id: snapshot.id })
                setLoad(false)
            })
    } , [id, cartCtx]);

  return (
    <>
      {load ? <section className='mt-200'><Spinner /></section> : <ItemDetail item={itemDetails} />}
    </>
  )
}

export default ItemDetailContainer