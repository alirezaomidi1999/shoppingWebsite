import React from "react";
import { useContext } from "react";
import { basketContext } from "./Basketcontext";
import { GrClose, GrProductHunt } from "react-icons/gr";
import { IoCloseCircleOutline } from "react-icons/io5";
import "../style/Basket.css";

function Basket() {
  const { showBasket, setShowBasket } = useContext(basketContext);
  const { productBasket, setProductBasket } = useContext(basketContext);
  const { showEmptyBasket, setShowEmptyBasket } = useContext(basketContext);
  const { totalPrice, setTotalPrice } = useContext(basketContext);
  const { counterProduct, setCounterProduct } = useContext(basketContext);
  let counterBasket = 0;
  const closeBasket = () => {
    setShowBasket(false);
  };

  const changeQuantityHandler = (basketproduct, value) => {
    const basket = [...productBasket];
    const findProduct = basket.filter(
      (productbasket) => basketproduct.id === productbasket.id
    );
    findProduct[0].quantity = value;
    setProductBasket(basket);
    setTotalPrice(
      basket
        .map((productbasket) => productbasket.quantity * productbasket.price)
        .reduce((a, b) => a + b, 0)
    );
  };

  const removeProductFromBasket = (basketproduct) => {
    const basket = [...productBasket];
    const removeProduct = basket.filter(
      (productbasket) => basketproduct.id !== productbasket.id
    );
    const removeOfTotalPrice = basket.filter(
      (productbasket) => basketproduct.id === productbasket.id
    );
    console.log(basket);
    setProductBasket(removeProduct);
    setTotalPrice(
      totalPrice - removeOfTotalPrice[0].price * removeOfTotalPrice[0].quantity
    );
    setCounterProduct((counter) => counter - 1);
    console.log(productBasket.length);
    if (productBasket.length <= 1) {
      setShowEmptyBasket(true);
      setTimeout(() => {
        setShowEmptyBasket(false);
      }, 3000);
      setShowBasket(false);
    }
  };
  return (
    showBasket && (
      <div className="container-basket">
        <GrClose
          onClick={closeBasket}
          style={{ position: "absolute", right: 10, top: 5, cursor: "pointer" }}
        />
        <div className="container-basketproduct">
          {productBasket.map((product) => (
            <div key={product.id} className="basketproduct">
              <span className="basketproduct-counter">{++counterBasket}.</span>
              <div className="basketproduct-left">
                <img
                  className="basketproduct-image"
                  src={product.images[1]}
                  alt={product.images[2]}
                ></img>
                <span className="basketproduct-title">{product.title}</span>
              </div>
              <div className="basketproduct-right">
                <span className="basketproduct-price">
                  price: {product.price}$
                </span>
                <input
                  className="basketproduct-quantity"
                  min={1}
                  max={50}
                  value={product.quantity}
                  type="number"
                  onChange={(e) =>
                    changeQuantityHandler(product, e.target.value)
                  }
                ></input>
              </div>
              <IoCloseCircleOutline
                className="icondelete"
                onClick={() => removeProductFromBasket(product)}
              ></IoCloseCircleOutline>
            </div>
          ))}
        </div>
        <p className="totalprice">Total Price: {totalPrice}$</p>
      </div>
    )
  );
}

export default Basket;
