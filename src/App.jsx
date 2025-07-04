import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import EditarPerfil from './pages/EditarPerfil.jsx';
import EditarPerfil from './pages//EditarPerfil.jsx';
import Perfil from './pages//Perfil.jsx';


function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Perfil />
    </PrimeReactProvider>
    
  )
}

export default App
