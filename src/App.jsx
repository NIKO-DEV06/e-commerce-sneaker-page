import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";

import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  const cartNumber = useSelector((state) => state.cart.cartNumber);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart());
  };

  const [imageModal, setImageModal] = useState(false);
  const showImageModalHandler = () => {
    setImageModal(true);
  };
  const closeImageModalHandler = () => {
    setImageModal(false);
  };
  console.log(cartNumber);
  return (
    <Fragment>
      <Header
        cartCount={cartNumber}
        imageModal={imageModal}
        onCloseImageModal={closeImageModalHandler}
      />
      <Product
        onShowImageModal={showImageModalHandler}
        onAddToCart={addToCartHandler}
      />
    </Fragment>
  );
};

export default App;
