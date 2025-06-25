import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import BasicDemo, { Header, CarritoCompras } from './pages/Servicios';
import Home from './pages/Home';
import './index.css';

function App() {

  return (

    <PrimeReactProvider value={{ unstyled: false }}>
      <Header />
      <div className='body'>
        <div className='sidebar'>
          <div className='carrito-container'>
            <CarritoCompras />
          </div>
          <h3 className='name_car'>Carrito</h3>
          <BasicDemo />
        </div>
        <div className='contenedor contenedor_fondo'>
            <Home />
        </div>
      </div>
    </PrimeReactProvider>
  )
}

export default App
