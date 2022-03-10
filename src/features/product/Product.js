import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {addProduct} from './quantitySlice';

function Product({product}) {
  const [quantitySold, updateQuantity] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <span>{`$ ${product.price}.00`}</span>
      <div>
        <button
          // using useState hook: onClick={() => updateQuantity(quantitySold + 1)}
          onClick={() => dispatch(addProduct(
            {
              name: product.name,
              quantity: 1
            }
          ))}
        >
          Add to cart
        </button>
      </div>
      <div>
        <p>{quantitySold > 0 ? `${quantitySold} of this product have been added to your cart` : null}</p>
      </div>
    </div>
  )
}

export default Product;
