import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


const getItemDetails = (id) => {
    const myPromise = new Promise((resolve, reject) => {
        const productList = [
            {
              id: 1,
              title: "Crew Neck Sweater",
              price: 100,
              imageUrl: "https://julianvidal-dev.com/ecommerce-react/products/crew-neck-sweater/front.webp",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              stock: 5
            },
            {
              id: 2,
              title: "Long Sleeve T-Shirt",
              price: 80,
              imageUrl: "https://julianvidal-dev.com/ecommerce-react/products/long-sleeve-t-shirts/blue-sleeve.webp",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              stock: 7
            },
            {
              id: 3,
              title: "Cocodrile T-Shirt",
              price: 79,
              imageUrl: "https://julianvidal-dev.com/ecommerce-react/products/cocodrile-t-shirt2.png",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              stock: 20
            }
          ];

          const product = productList.filter(product => product.id === parseInt(id))

        setTimeout(() => {
            resolve(product[0]);
        },2000)
    });

    return myPromise;
}

const ItemDetailContainer = () => {

    const [itemDetails, setItemDetails] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getItemDetails(id)
            .then(res => {
                setItemDetails(res);
                console.log(itemDetails.title);
            })
    } , [id]);

  return (
    <>
        <ItemDetail item={itemDetails} />
    </>
  )
}

export default ItemDetailContainer