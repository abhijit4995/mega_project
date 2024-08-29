import logo from '../src/assests/logo.jpg';
import './App.css';
import Header from '../src/Components/Layout/header.js';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <img src={logo}></img>
    </div>
    </>
  );
}

export default App;
