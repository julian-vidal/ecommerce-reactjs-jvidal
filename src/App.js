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
      <main className='hero pb-5'>
        <div className='container'>
          <ItemListContainer greeting="Hello, it's me!" />
        </div>
        
      </main> 
      
    </div>
    
  );
}

export default App;
