import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/Home';
import Header from './pages/Servicios';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <div className='contenedor_fondo'>
       <div>
          <Home />
        </div>
      </div>
      <Header />
    </PrimeReactProvider>
  )
}

export default App
