import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";


export default function App() {
  return (
   <main className="text-tertiary">
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sports" element={<Category/>}/>
          <Route path="/Relaxation" element={<Category/>}/>
          <Route path="/Natural energy" element={<Category/>}/>
          <Route path="/product" element={<Product/>}/>
            <Route path=":productId" element={<Product/>}/>\
           { /*<Route path="/cart-page" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter> 
   </main>
  )
} 