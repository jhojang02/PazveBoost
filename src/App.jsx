import './App.css'
import "./index.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/Home';

function App() {

  return (
     

    <PrimeReactProvider value={{ unstyled: false }}>
      <Home />
    </PrimeReactProvider>
    
   
  )
}

export default App
