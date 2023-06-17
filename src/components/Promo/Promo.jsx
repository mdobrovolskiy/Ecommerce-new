import React from 'react'
import './Promo.sass'
import { useSelector } from 'react-redux'
import { categories } from '../data'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleCategory } from '../../redux/slices/categorySlice'

const Collection = ({ img, setCurrSlideIndex, currSlideIndex, text }) => {
  const dispatch = useDispatch()
  const man = categories.man
  const woman = categories.woman
  const accessories = categories.accessories
  const categoriesOpen = useSelector((state) => state.counter.categoriesOpen)
  const currentCategory = useSelector((state) => state.counter.currentCategory)
  const catRef = useSelector((state) => state.counter.catRef)

  const category = () => {
    if (currentCategory === 'MAN') {
      return man
    } else if (currentCategory === 'WOMAN') {
      return woman
    } else {
      return accessories
    }
  }
  const modalRef = React.useRef()
  useEffect(() => {
    function handler(e) {
      if (!modalRef.current.contains(e.target) && !catRef.contains(e.target)) {
        console.log(e)
        dispatch(handleCategory([false, currentCategory]))
      }
    }
    if (categoriesOpen) {
      document.addEventListener('mousedown', handler)
    }
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [categoriesOpen])

  return (
    <div className="collection" style={{ backgroundImage: `url(${img})` }}>
      {categoriesOpen && (
        <div ref={modalRef} className="catMenu">
          <p>CATEGORIES</p>
          <div className="catMenuWrapper">
            <div className="catMenuItem">
              <ul>
                {category()
                  .slice(0, 5)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
            <div className="catMenuItem">
              <ul>
                {category()
                  .slice(5, category().length)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="colName"></div>
      <div className="colName">
        <div className="colNameWrapper">
          <h2>{text}</h2>
          <div>
            <button className="shopBtn">
              <p>SHOP NOW</p>
            </button>
          </div>
        </div>
      </div>
      <div className="slidesWrapper">
        <div
          onClick={() => setCurrSlideIndex(0)}
          className={`slide ${currSlideIndex === 0 ? 'slideActive' : ''}`}
        ></div>
        <div
          onClick={() => setCurrSlideIndex(1)}
          className={`slide ${currSlideIndex === 1 ? 'slideActive' : ''}`}
        ></div>
        <div
          onClick={() => setCurrSlideIndex(2)}
          className={`slide ${currSlideIndex === 2 ? 'slideActive' : ''}`}
        ></div>
      </div>
    </div>
  )
}

export default Collection
