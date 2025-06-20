import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import BasicDemo, { Header, CarritoCompras } from './pages/Servicios';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Header />
      <CarritoCompras />
      <BasicDemo />
    </PrimeReactProvider>
  )
}

export default App
