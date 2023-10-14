import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
const Product = (props) => {
  const {id,productName,price,productImage}=props.data
  const {cartItems,addToCart} = useContext(ShopContext)
  const amount= cartItems[id]
  return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={()=> addToCart(id)}>Add to cart {amount>0 && <>({amount})</>}</button>
    </div>
  )
}

export default Product