import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsAsync } from "./productsSlice";
import { addItemAsync } from "../cart/cartSlice";
import "./Products.css";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  return (
    <div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(fetchProductsAsync())}
        >
          Get Products
        </button>

      </div>

      <div>
        {
          products.map((product) => (
            <div className="card">
              <img src={product.thumbnail} alt={product.title} style={{width: '100%'}} />
              <h1>{product.title}</h1>
              <p className="price">{product.price}</p>
              <p>{product.description}</p>
              <p><button onClick={() => dispatch(addItemAsync(product))}>Add to Cart</button></p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
