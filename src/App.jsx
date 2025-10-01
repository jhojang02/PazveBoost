import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: true }}>

    </PrimeReactProvider>
  )
}

export default App
