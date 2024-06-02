import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import clothingbanner from './assets/clothingbanner.png'
import cosmeticsbanner from './assets/cosmeticsbanner.png'
import electronicsbanner from './assets/electronicsbanner.png'
import ProductN from "./Pages/Product";
import bg from './assets/bg.png'

export default function App() {
  return (
   <main className="text-tertiary">
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sports" element={<Category category={"Sports"} banner={bg}/>}/>
          <Route path="/Relaxation" element={<Category category={"Organic"} banner={bg} />}/>
          <Route path="/Natural energy" element={<Category category={"Relaxation drink"} banner={bg}/>}/>
          <Route path="/product/:proId" element={<ProductN/>}/>
            <Route path=":productId" element={<ProductN/>}/>
           { /*<Route path="/cart-page" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/> */} 
      </Routes>
      <Footer/>
    </BrowserRouter> 
   </main>
  )
} 