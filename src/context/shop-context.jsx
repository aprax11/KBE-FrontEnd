import { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const ShopContext = createContext(null);



const getDefaultCart = () => {
  const userId = "d6e38053-872d-4d4a-b9e5-ce48cd749e62";
  let data;


  return {userId: "null", products: [], totalPrice: 0}
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {

    return cartItems.totalPrice;
  };

  const getAmmountOfItemInCart = (id) => {

    return cartItems.products.filter(item => item.id.toString()===id.toString()).map(x => x.count)[0]
  }
  const addToCart = (product) => {

    const userId = "d6e38053-872d-4d4a-b9e5-ce48cd749e62";
    let realProduct = product.data
    realProduct.image = "1";
    const basketComponent = {userId: userId, product: realProduct};

    updateCartItemCount()

      Axios.put("http://localhost:8081/basket/add", basketComponent)
          .then((response) => {
            // Handle the successful response here
            console.log('Response from adding to cart: ', response.data);
          })
          .catch(error =>
              console.log('tried to send Putrequest')
          );



    updateCartItemCount()
    console.log(cartItems);
  }

  const removeFromCart = (product, userId) => {
    const basketComponent = {product: product , userId: userId.toString()};

    Axios.put("http://localhost:8081/basket/delete", basketComponent)
        .then((response) => {
          // Handle the successful response here
          console.log('Response from deleting from cart:', response.data);
        })
        .catch(error =>
            console.error(error));

    Axios.get("http://localhost:8081/basket/"+userId).then((res) => setCartItems(res.data))
        .catch(error => console.error(error));
  };

  const updateCartItemCount = () => {
    const userId = "d6e38053-872d-4d4a-b9e5-ce48cd749e62";

    Axios.get("http://localhost:8081/basket/" + userId).then((res) => setCartItems(res.data))
        .catch(error => console.log('tried to send Getrequest'));

    console.log(cartItems)


  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getAmmountOfItemInCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
