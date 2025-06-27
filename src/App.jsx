import './App.css'
import Home from './pages/Home';
import './index.css'
import {PrimeReactProvider, PrimeReactContext} from 'primereact/api';
function App() {

  return (
    
    <PrimeReactProvider  value={{ unstyled: false }}>
      <div className='contenedor_fondo'>
       <div>
          <Home />
        </div>
      </div>
    </PrimeReactProvider> 
  )
}

export default App
