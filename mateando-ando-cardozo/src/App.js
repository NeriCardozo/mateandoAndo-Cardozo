import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  const Home = () => (<div>Bienvenidos a nuestro sitio :)</div>)

  return (
    <BrowserRouter>
    <div className="App">
      
        <NavBar />
        <Routes> 
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/Items" element={<ItemListContainer />}/>
        </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
