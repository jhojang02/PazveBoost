import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/Home';
import IniciarSesion from './pages/Iniciar-sesion/IniciarSesion';

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <Home />
    </PrimeReactProvider>
  )
}

export default App
