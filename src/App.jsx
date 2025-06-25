import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import BasicDemo, { Header, CarritoCompras } from './pages/Servicios';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Header/>
      <div className='sidebar'>
      <div className='carrito-container'>
      <CarritoCompras />
      </div>
      <h3>Carrito</h3>
      <BasicDemo />
      </div>
    </PrimeReactProvider>
  )
}

export default App
