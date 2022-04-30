import './scss/App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Import Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  // const myproduct = {
  //   title: "Crew Neck Sweater",
  //   price: 20,
  //   description: "Descripcion del producto.",
  //   imageUrl: "./img/products/crew-neck-sweater/front.webp"
  // }

  return (
    <div className="App">
      <NavBar />
      <main >
        <section className='hero pb-5'>
          <div className='container'>
            <ItemListContainer greeting="Hello, it's me!" />
          </div>
        </section>
        
        
        <section className='container'>
          {/* <ItemDetail item={myproduct} /> */}
          <ItemDetailContainer />
        </section>
      </main> 
      
    </div>
    
  );
}

export default App;
