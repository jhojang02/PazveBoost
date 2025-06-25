import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/Home';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <div className='contenedor_fondo'>
       <div>
          <Home />
        </div>
      </div>
    </PrimeReactProvider>
  )
}

export default App
