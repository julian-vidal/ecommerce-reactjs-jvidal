import './scss/App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Import Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import itemListContainer from './components/itemListContainer/index';
// import itemListContainer from './components/itemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='hero'>
        <ItemListContainer greeting="Hello, it's me!" />
      </main> 
      
    </div>
    
  );
}

export default App;
