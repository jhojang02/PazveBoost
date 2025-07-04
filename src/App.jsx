import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import EditarPerfil from './pages/EditarPerfil.jsx';


function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <EditarPerfil />
    </PrimeReactProvider>
    
  )
}

export default App
