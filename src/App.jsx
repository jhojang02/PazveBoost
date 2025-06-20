import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import BasicDemo, { Header } from './pages/Servicios';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Header />
      <BasicDemo />
    </PrimeReactProvider>
  )
}

export default App
