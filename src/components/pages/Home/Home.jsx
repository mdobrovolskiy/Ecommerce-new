import React from 'react'
import './Home.sass'
import Header from '../../Header/Header'
import Promo from '../../Promo/Promo'
import Collection from '../../Collection/Collection'
import image1 from '../../../images/Photo.jpg'
import image2 from '../../../images/newCol1.jpg'
import image3 from '../../../images/newCol2.jpg'
import { useState } from 'react'
import item1 from '../../../images/item1.jpg'
import item2 from '../../../images/item2.jpg'
import item3 from '../../../images/item3.jpg'
import item4 from '../../../images/item4.jpg'
import Footer from '../../Footer/Footer'
import main from '../../../images/main.jpg'
import main2 from '../../../images/main2.jpg'
import main3 from '../../../images/main3.jpg'

const slides = [main, main2, main3]
const texts = ['NEW COLLECTION', 'END-OF-SEASON SALE', 'ENJOY 70% OFF']

const Home = () => {
  const [currSlideIndex, setCurrSlideIndex] = useState(0)

  return (
    <div className="home">
      <div className="container">
        <Header />
        <Promo
          img={slides[currSlideIndex]}
          text={texts[currSlideIndex]}
          currSlideIndex={currSlideIndex}
          setCurrSlideIndex={setCurrSlideIndex}
        />
        <p className="topSign">New</p>
        <div className="collectionsWrapper">
          <div className="content">
            <Collection img={image1} text="NEW IN" />
          </div>
          <div className="content">
            <div className="contentRight">
              <Collection img={image3} text="NEW COLLECTION" />
            </div>
            <div className="contentRight">
              <Collection img={image2} text="NEW COLLECTION" />
            </div>
          </div>
        </div>
        <p className="topSign">Shop by category</p>
        <div className="catWrapper">
          <div className="contentCategory">
            <div className="categoryItem">
              <Collection img={item3} text="BAG SHOP" />
            </div>
            <div className="categoryItem">
              <Collection img={item2} text="DRESS SHOP" />
            </div>
            <div className="categoryItem">
              <Collection img={item4} text="BELT SHOP" />
            </div>
          </div>
          <div className="contentCategory">
            <Collection img={item1} text="SUNGLASSES SHOP" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
