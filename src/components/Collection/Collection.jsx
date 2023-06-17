import React from 'react'
import '../Collection/Collection.sass'

const Collection = ({ img, text }) => {
  return (
    <div className="collectionItem">
      <img src={img} alt="" />
      <div className="action">
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Collection
