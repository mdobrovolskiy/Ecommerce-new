import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './ProductPage.sass'
import ColorVariant from '../../ColorVariant/ColorVariant'
import Button from '../../Button/Button'
import LikeButton from '../../LikeButton/LikeButton'
import RecommendItem from '../../RecommendItem/RecommendItem'
const ProductPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="productWrapper">
        <div className="productPage">
          <div className="productTop">
            <div className="navigation">
              <div>Back</div>
              <div>Next</div>
            </div>
            <div className="product">
              <div className="photos">
                <div className="mainPhotos">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="mainPhotos">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="bonusPhotos">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="bonusPhotos">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="bonusPhotos">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="info">
                <div className="name">
                  <div className="nameLeft">
                    <div className="nameBig">BLACK JACKET</div>
                    <div className="namePlus">REF: 3294786 - 01</div>
                  </div>
                  <div className="priceName">400 $</div>
                </div>
                <div className="chooseColor">
                  <div className="colorName">Color</div>
                  <div className="colorItems">
                    <ColorVariant text={'black'} color={'black'} />
                    <ColorVariant text={'yellow'} color={'yellow'} />
                    <ColorVariant text={'red'} color={'red'} />
                  </div>
                </div>
                <div className="chooseSize">
                  <div className="sizeName">Size</div>
                  <div className="sizes">
                    <div>6</div>
                    <div>8</div>
                    <div>10</div>
                    <div>12</div>
                    <div>14</div>
                    <div>16</div>
                  </div>
                  <div>Size guide</div>
                </div>
                <div className="details">
                  <div className="detailsName">
                    <span>Details</span>
                  </div>
                  <div>
                    <p>
                      Mouton coat made of 100% sheepskin leather. Straight cut,
                      collar with adjustable hood, front zip fastening, long
                      sleeves and an adjustable hem. The back length for size M
                      is 61,9 cm. <br />
                      <br />
                      FREE STANDARD SHIPPING ON ORDERS OVER £100
                    </p>
                  </div>
                  <div className="buttons">
                    <Button text="ADD TO BUSKET" />
                    <div className="likeSpace">
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="complete">
            <div>
              <span>COMPLETE YOUR LOOK</span>
            </div>
            <div className="completeList">
              <RecommendItem />
              <RecommendItem />
              <RecommendItem />
              <RecommendItem />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
