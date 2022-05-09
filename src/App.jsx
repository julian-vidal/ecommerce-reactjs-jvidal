import './scss/App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

// Import Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
// import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <main >
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main> 
      
    </div>
    
  );
}

export default App;
