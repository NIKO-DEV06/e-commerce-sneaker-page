import React, { Fragment } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  return (
    <Fragment>
      <section className="h-screen bg-white">
        <Header />
        <Product />
      </section>
    </Fragment>
  );
};

export default App;
