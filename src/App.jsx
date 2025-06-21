import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import BasicDemo, { Header, CarritoCompras } from './pages/Servicios';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Header />
      <div className='sidebar'>
      <CarritoCompras />
      <BasicDemo />
      </div>
    </PrimeReactProvider>
  )
}

export default App
