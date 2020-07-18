import React, { useState } from "react";
import { ShoppingCart } from "./../../components";
import { cartTotalContext } from "./../../context";
import { getCartTotal, getCartProducts } from "./../../functions";
import "./cartpage.scss";
const CartPage = () => {
  const [totalCart, setTotalCart] = useState(getCartTotal);

  return (
    <cartTotalContext.Provider value={{ totalCart, setTotalCart }}>
      {getCartProducts().length > 0 ? (
        <ShoppingCart />
      ) : (
        <p className="sc-empty">Your cart is empty</p>
      )}
    </cartTotalContext.Provider>
  );
};

export default CartPage;
