import React from 'react'
import {PRODUCTS} from "../../products"
import Product from "./Product"
import "./shop.css"

const shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Harry's Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=>(
          <Product data={product}></Product>
        ))}
      </div>
    </div>
  )
}

export default shop
