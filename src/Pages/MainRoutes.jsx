import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Cart1 from '../Component/Cart1'
import Header from '../Component/Header'

const MainRoutes = () => {
  return (
    <div>
      <Header />
          <Routes>
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart1 />
        </Route>
        
      </div>
      </Routes>
    </div>
  )
}

export default MainRoutes