import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import { basketContext } from "./components/Basketcontext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showBasket, setShowBasket] = useState(false);
  const [showEmptyBasket, setShowEmptyBasket] = useState(false);
  const [productBasket, setProductBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [counterProduct, setCounterProduct] = useState(0);
  return (
    <basketContext.Provider
      value={{
        showBasket,
        setShowBasket,
        productBasket,
        setProductBasket,
        totalPrice,
        setTotalPrice,
        showEmptyBasket,
        setShowEmptyBasket,
        counterProduct,
        setCounterProduct,
      }}
    >
      <Basket />

      <div>
        <Navigation />
        <Header />
        <Main />
      </div>
    </basketContext.Provider>
  );
}

export default App;
