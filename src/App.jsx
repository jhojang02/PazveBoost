import './App.css'
import "./index.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/Home';
import InfoUser from './pages/inf_usuario/InformacionUsuario'

function App() {

  return (
     

    <PrimeReactProvider value={{ unstyled: false }}>
      <InfoUser />
    </PrimeReactProvider>
    
   
  )
}

export default App
