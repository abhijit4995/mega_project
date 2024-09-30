import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from '../src/assests/logo.jpg';
import './App.css';
import Header from '../src/Components/Layout/header.js';
import Footer from '../src/Components/Layout/footer.js';
import Home from '../src/Components/Home/index.js';
import About from '../src/Components/About/About.js';
import Product from '../src/Components/Product/Product.js';
import Contact from '../src/Components/contact/contact.js';
import Login from '../src/Components/Form/login.js'
import Registration from '../src/Components/Form/registration.js'


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/header" element={<Header/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/footer" element={<Footer/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/registration" element={<Registration/>} />
    </Routes>
    </BrowserRouter>

    </>
  );
}


export default App;
