import { createContext, useContext, useState } from 'react';
import { products } from '../data';

const createAppContext = createContext();

export const useAppContext = () => {
  return useContext(createAppContext);
};

export const UseAppContextProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);

  const handlerDeleteCartItem = (id) => {
    let cartCopy = cart;

    setCart(cartCopy.filter((item) => item.id !== id));
  };

  const handlerAddToCart = (product) => {
    //jeśli koszyk jest pusty
    if (quantity === 0) return;

    if (cart.length === 0) {
      const updateProduct = {
        ...product,
        inCart: product.inCart + quantity,
      };
      setCart([updateProduct]);
    } else {
      const currentItemInCart = cart.find((item) => item.id === product.id);
      const updateProduct = {
        ...currentItemInCart,
        inCart: currentItemInCart.inCart + quantity,
      };
      setCart([updateProduct]);
    }

    setQuantity(0);
  };

  const handleQuantityAdd = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const handleQuantityRemove = () => {
    setQuantity((prevState) => prevState - 1);

    if (quantity === 0) {
      setQuantity(0);
    }
  };

  return (
    <createAppContext.Provider
      value={{
        quantity,
        setQuantity,
        handleQuantityAdd,
        handleQuantityRemove,
        data,
        setCart,
        cart,
        setData,
        handlerDeleteCartItem,
        handlerAddToCart,
      }}
    >
      {children}
    </createAppContext.Provider>
  );
};
