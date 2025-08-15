import './App.css'
import "./index.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import HomeBienvenida from './pages/Home';
import InfoUser from './pages/inf_usuario/InformacionUsuario'
import OlvidoContra from './pages/olvidasteContraseña/OlvidasteContraseña'
import Pantalla_ayuda from './pages/Pantalla_ayuda/Ayuda';

function App() {

  return (
     

    <PrimeReactProvider value={{ unstyled: false }}>
      <Pantalla_ayuda />
    </PrimeReactProvider>
    
   
  )
}

export default App
