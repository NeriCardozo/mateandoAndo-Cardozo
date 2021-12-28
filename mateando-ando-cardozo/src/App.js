import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartChechkout from './components/CartCheckout.js';


function App() {

  const Home = () => (<div>Bienvenidos a nuestro sitio :)</div>)

  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
      
        <Routes> 
          <Route path="/" element={<NavBar />,<ItemListContainer />}/>
          <Route exact path="/Category/:id" element={<ItemListContainer />}/>
          <Route exact path="/Item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/cart" element={<CartChechkout />}/>
        </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
