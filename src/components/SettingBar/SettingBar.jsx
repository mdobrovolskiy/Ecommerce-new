import React from 'react'
import './SettingBar.sass'
import { categories } from '../data'
import { useSelector } from 'react-redux'

const SettingBar = () => {
  const man = categories.man
  const woman = categories.woman
  const accessories = categories.accessories
  const currentCategory = useSelector((state) => state.counter.currentCategory)
  const category = () => {
    if (currentCategory === 'MAN') {
      return man
    } else if (currentCategory === 'WOMAN') {
      return woman
    } else {
      return accessories
    }
  }
  return (
    <div className="settingWrap">
      <div className="settingContainer">
        <div className="currentStage">
          Home {'>'} Woman {'>'} Jacket
        </div>
        <div className="differentCollections">
          <ul>
            <p>WOMAN</p>
            <li>View all</li>
            {category().map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="colors">
          <p>Colors</p>
          <div className="colorItem">
            <div className="blackCircle"></div>black
          </div>
          <div className="colorItem">
            <div className="brownCircle"></div>brown
          </div>
          <div className="colorItem">
            <div className="redCircle"></div>red
          </div>
          <div className="colorItem">
            <div className="whiteCircle"></div>white
          </div>
        </div>
        <div className="priceBar">
          <input type="range" />
        </div>
      </div>
    </div>
  )
}

export default SettingBar
