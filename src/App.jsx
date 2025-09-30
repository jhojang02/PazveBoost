import './App.css'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeBienvenida from './pages/Home';
import InfoUser from './pages/inf_usuario/InformacionUsuario';
import OlvidoContra from './pages/olvidasteContraseña/OlvidasteContraseña';
import Pantalla_ayuda from './pages/Pantalla_ayuda/Ayuda';
import IniciarSesion from './pages/iniciarSesion/IniciarSesion';

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeBienvenida />} />
          <Route path="/usuario" element={<InfoUser />} />
          <Route path="/olvidaste" element={<OlvidoContra />} />
          <Route path="/ayuda" element={<Pantalla_ayuda />} />
          <Route path="/inicio" element={<iniciarSesion/>} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;