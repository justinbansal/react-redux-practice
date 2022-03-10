import React from "react";

import Product from "../features/product/Product";

function ProductsList() {
  const products = [
    {
      name: 'T-shirt',
      price: 20,
    },
    {
      name: 'Coffee Mug',
      price: 10
    },
    {
      name: 'Leather Jacket',
      price: 100
    }
  ]

  const productsList = products.map(product => <Product product={product} />)
  return (
    <div className="products-list">
      <h1>Products List</h1>
      {productsList}
    </div>
  )
}

export default ProductsList;
