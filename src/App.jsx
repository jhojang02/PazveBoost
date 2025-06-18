import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/Home';
import Perfil from './pages/perfil';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Home />
      <Perfil />
    </PrimeReactProvider>
  )
}

export default App
