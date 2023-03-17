import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  const [imageModal, setImageModal] = useState(false);
  const showImageModalHandler = () => {
    setImageModal(true);
  };
  const closeImageModalHandler = () => {
    setImageModal(false);
  };
  return (
    <Fragment>
      <Header
        imageModal={imageModal}
        onCloseImageModal={closeImageModalHandler}
      />
      <Product onShowImageModal={showImageModalHandler} />
    </Fragment>
  );
};

export default App;
