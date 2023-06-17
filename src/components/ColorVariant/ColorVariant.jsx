import React from 'react'
import './ColorVariant.sass'
const ColorVariant = ({ text, color }) => {
  return (
    <div className="colorVariant">
      <div
        className="colorVariantItem"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div>{text}</div>
    </div>
  )
}

export default ColorVariant
