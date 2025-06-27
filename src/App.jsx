import './App.css'
import Home from './pages/Home';
import './index.css'

function App() {

  return (
    
    <PrimeReactProvider value={{ unstyled: false }}>
      <div className='contenedor_fondo'>
       <div>
          <Home />
        </div>
      </div>
      <Header />
    </PrimeReactProvider>
  )
}

export default App
