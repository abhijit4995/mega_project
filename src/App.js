import logo from '../src/assests/logo.jpg';
import './App.css';
import Header from '../src/Components/Layout/header.js';
import Footer from '../src/Components/Layout/footer.js';
import Home from '../src/Components/Home/index.js';
import About from '../src/Components/About/About.js';
import Product from '../src/Components/Product/Product.js';
import contact from '../src/Components/contact/contact.js';


function App() {
  return (
    <>
    <Header/>
    {/* <div className="App">
      <img src={logo}></img>
    </div> */}
    <Home/>
    <About/>
    <Product/>
    <contact/>
    <Footer/>
    </>
  );
}

export default App;
