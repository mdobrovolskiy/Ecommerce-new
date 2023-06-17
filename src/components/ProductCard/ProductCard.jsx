import React from 'react'
import './ProductCard.sass'
import img from '../../images/woman.png'
const ProductCard = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="productImage">
          <img src={img} alt="" />
        </div>
        <div className="productInfo">
          <div className="productName">Black Jaket</div>
          <div className="productPrice">
            <span>400$</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
