import './App.css'
import "./index.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/Home';
import InfoUser from './pages/inf_usuario/InformacionUsuario'
import OlvidoContra from './pages/olvidasteContraseña/OlvidasteContraseña'
import Header from './pages/Servicios';

function App() {

  return (
     

    <PrimeReactProvider value={{ unstyled: false }}>
      <Home />
    </PrimeReactProvider>
    
   
  )
}

export default App
