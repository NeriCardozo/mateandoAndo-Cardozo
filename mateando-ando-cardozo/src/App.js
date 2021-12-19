import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js'

function App() {

  return (
    <div className="App">
      
     <NavBar />
     <ItemListContainer />
     <h2>Envíos a todo el país!</h2>
    </div>
  );
}

export default App;
