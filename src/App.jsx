import './scss/App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

// Import Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import { useContext } from 'react';
import CartContext from './store/CartContext';
import ThankYou from './pages/ThankYou/ThankYou'

function App() {

  const cartCtx = useContext(CartContext);

  return (
    
    <div className="App">
      {
        cartCtx.showHeader ? <NavBar /> : ""
      }
      

      <main >
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/thank-you' element={<ThankYou />} />
        </Routes>
      </main> 
      
    </div>
    
  );
}

export default App;
