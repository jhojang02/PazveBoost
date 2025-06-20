import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Perfil from './pages/perfil';


function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Perfil />
    </PrimeReactProvider>
  )
}

export default App
