import logo from '../src/assests/logo.jpg';
import './App.css';
import Header from '../src/Components/Layout/header.js';
import Footer from '../src/Components/Layout/footer.js';
import Home from '../src/Components/Home/index.js';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <img src={logo}></img>
    </div>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
