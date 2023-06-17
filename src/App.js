import './App.css'

import Home from './components/pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CollectionPage from './components/pages/CollectionPage/CollectionPage'
import ProductPage from './components/pages/ProductPage/ProductPage'
import Login from './components/pages/Login/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<CollectionPage />} />
      <Route path="/:id" element={<ProductPage />} />
      <Route path="/account" element={<Login />} />
    </Routes>
  )
}

export default App
