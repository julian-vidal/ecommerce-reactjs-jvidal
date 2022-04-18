import './scss/App.scss';
// import '../node_modules/jquery/dist/jquery.slim';
// import '../node_modules/popper/farms/'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='hero'>
      </main> 
    </div>
    
  );
}

export default App;
