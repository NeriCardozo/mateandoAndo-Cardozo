import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetail from './components/ItemDetail.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartChechkout from './components/CartCheckout.js';
import CartContext from './context/CartContext';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
    <BrowserRouter>

    
    <NavBar />
        <Routes> 
          <Route path="/" element={<ItemListContainer />}/>
          <Route exact path="/Category/:id" element={<ItemListContainer />}/>
          <Route exact path="/Item/:id" element={<ItemDetail />}/>
          <Route exact path="/cart" element={<CartChechkout />}/>
        </Routes>
<Footer />
</BrowserRouter>
</div>
  );
}

export default App;
