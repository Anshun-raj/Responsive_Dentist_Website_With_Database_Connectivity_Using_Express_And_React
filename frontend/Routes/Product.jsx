import React, { useReducer } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import productImg1 from "../Images/product1.jpeg";
import productImg2 from "../Images/product2.jpeg";
import productImg3 from "../Images/product3.jpeg";
import "../Style/Product.css";
function Product() {
  
  return (
    <div className="product">

      <h1>Our Product</h1>
      <div className="productData">
        <div className="productDataCard">
          <img src={productImg1} alt="" />
          <h3>Uses:-It is used for chewing purpose for old citizens.</h3>
          <h3>Price:-$5</h3>
          <Counter />
        </div>
        <div className="productDataCard">
          <img src={productImg2} alt="" />
          <h3>Uses:-It is used to remove plaque.</h3>
          <h3>Price:-$3</h3>
          <Counter />
        </div>
        <div className="productDataCard">
          <img src={productImg3} alt="" />
          <h3>Uses:-It is used to whitening the teeth.</h3>
          <h3>Price:-$2</h3>
          <Counter />
        </div>
      </div>
    </div>
  );
}

function Counter() {
  const initialState = { count: 0 };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increase": {
        return { count: state.count + 1 };
      }
      case "Decrease": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  


  function Increment() {
    dispatch({ type: "Increase" });
  }

  function Decrement() {
    dispatch({ type: "Decrease" });
  }

  return (
    <div>
      <h4 className="productCount">Buy: {state.count}</h4>
      <button onClick={Increment} className="btn3">
        <AiOutlinePlus/>
      </button>
      <button onClick={Decrement} className="btn3">
        <AiOutlineMinus/>
      </button>
    </div>
  );
}

export default Product;
