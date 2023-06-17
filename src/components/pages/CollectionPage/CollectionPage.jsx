import React from 'react'
import './CollectionPage.sass'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import SettingBar from '../../SettingBar/SettingBar'
import ProductCard from '../../ProductCard/ProductCard'
const CollectionPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="colPageWrap">
        <SettingBar />

        <div className="cardWrapper">
          <div className="categoryNow">Jakets</div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CollectionPage
