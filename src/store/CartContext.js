import { createContext, useState } from "react";

const CartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {},
    removeAllUnits: () => {},
    addOneProduct: () => {},
    getCartTotal: () => {}
})

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    const addProduct = product => {
        const repeatedItemIndex = productList.findIndex(item => item.id === product.id);

        if (repeatedItemIndex !== -1) {
            setProductList(productList.map(item => item.id === product.id ? {...item, quantity: item.quantity + product.quantity}: item));
        } else {
            setProductList([product,...productList]);
        }
    }

    const addOneProduct = product => {
        if (product.quantity < product.stock) {
            setProductList(productList.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1}: item));
        }
    }

    const removeProduct = id => {
        const indexToRemove = productList.findIndex(item => item.id === id);

        if(productList[indexToRemove].quantity === 1) {
            setProductList(productList.filter(item => item.id !== id))
        } else {
            setProductList(productList.map(item => item.id === id ? {...item, quantity: item.quantity-1}: item))
        }
    }

    const removeAllUnits = id => {
        setProductList(productList.filter(item => item.id !== id))
    }

    const clear = () => {
        setProductList([])
    }

    const isInCart = id => {
        return productList.map(item => item.id).indexOf(id) !== -1;
    }

    const getCartQuantity = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    const getCartTotal = () => {
        return productList.reduce((total, product) => {
            return total + (product.quantity * product.price)
        },0)
    }

    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity,
            removeAllUnits,
            addOneProduct,
            getCartTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;