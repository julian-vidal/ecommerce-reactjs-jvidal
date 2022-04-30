import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


const getItemDetails = () => {
    const myPromise = new Promise((resolve, reject) => {
        const itemDetails = {
                title: "Crew Neck Sweater",
                price: 20,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                imageUrl: "./img/products/crew-neck-sweater/front.webp"
            };

        setTimeout(() => {
            resolve(itemDetails);
        },2000)
    });

    return myPromise;
}

const ItemDetailContainer = () => {

    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {
        getItemDetails()
            .then(res => {
                setItemDetails(res);
            })
    } , []);

  return (
    <>
        <ItemDetail item={itemDetails} />
    </>
  )
}

export default ItemDetailContainer