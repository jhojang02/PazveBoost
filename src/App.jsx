import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import BasicDemo, { Header, CarritoCompras, WithoutCancelDemo, AccesosRapidos} from './pages/Servicios';
import Home from './pages/Home';
import './index.css';

function App() {

  return (

    <PrimeReactProvider value={{ unstyled: false }}>
      <Header />
      <div className='body'>
        <div className='sidebar'>
          <div className='carrito-container'>
          <CarritoCompras/>
          </div>
          <div className='carrito-header'>
          <h3 className='name_car'>Carrito <span className='simbolo'>➡</span> </h3> 
          <BasicDemo />
          <AccesosRapidos />
          <div className='estrellas'>
            <h4>! Califica nuestra pagina ¡  😊  </h4>
          <WithoutCancelDemo />
          </div>
        </div>
        </div>
        <div className='contenedor contenedor_fondo'>
            <Home />
        </div>
      </div>
    </PrimeReactProvider>
  )
}

export default App
