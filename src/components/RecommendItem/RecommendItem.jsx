import React from 'react'
import './RecommendItem.sass'
const RecommendItem = () => {
  return (
    <div className="recItem">
      <div className="recImg">
        <img
          src="https://www.leman.in.ua/image/cache/catalog/sumky/klatchi/lm4124/209611750_340662657501561_3779216302425528009_n-auto_width_1350.jpg"
          alt=""
        />
      </div>
      <div className="recName">LACE-UP FLAT SHOES WITH KNOTS</div>
      <div className="recPrice">180 $</div>
    </div>
  )
}

export default RecommendItem
