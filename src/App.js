import React from 'react'
import Header from './Header';
import CategorieSection from './Component/CategorieSection';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Furniture from './Component/Furniture';
import NotFound from './Component/NotFound';
import FurnitureDetail from './Component/FurnitureDetail';
import Loading from './Component/Loading';
import Cart from './Component/Cart';
import {reducer} from './Store/Reducer'
import { createContext, useReducer,useEffect,useState } from 'react'

export const CartContext = createContext()
const initialState = {
     products: []
   };
function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/amit-negi-23/Fake-Server/main/furniture.json")
      .then(res => res.json())
      .then(data => { setData(data);})

  },[])

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    (data!=null)?<div>
      <CartContext.Provider value={{ store, dispatch }}>
      
    <Router>
    <Header />

      <Routes>

        <Route path={'/'} element={<CategorieSection />} />
        <Route path={'/cart'} element={<Cart/>} />
        <Route path={'/:category'} element={<Furniture/>}/>
        <Route path={'/:category/:product'} element={<FurnitureDetail/>}/>
        <Route path={'/:category/offer/:offerproduct'} element={<FurnitureDetail/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
      

    </Router>

  </CartContext.Provider>
  </div>:<><Loading/></>
  );
}

export default App;
