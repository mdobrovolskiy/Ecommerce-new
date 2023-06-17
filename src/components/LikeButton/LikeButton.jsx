import React from 'react'
import './LikeButton.sass'
import like from '../../images/favorite_border_24px.svg'
const LikeButton = () => {
  return (
    <div className="likeButton">
      <button>
        <img src={like} alt="" />
      </button>
    </div>
  )
}

export default LikeButton
