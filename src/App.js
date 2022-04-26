import './scss/App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import "../node_modules/sweet-alert/sweet-alert.css";
import sweetAlert from 'sweet-alert';

// Import Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/Itemcount/ItemCount';


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
