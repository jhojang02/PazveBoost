import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { Routes, Route } from 'react-router-dom';

import HomeBienvenida from './pages/bienvenidosPazveboost/BienvenidosPazveboost';
import InfoUser from './pages/inf_usuario/InformacionUsuario';
import OlvidoContra from './pages/olvidasteContraseña/OlvidasteContraseña';
import Pantalla_ayuda from './pages/Pantalla_ayuda/Ayuda';
import Perfil from './pages/perfil/perfil.jsx';
import editarPerfil from './pages/perfil/EditarPerfil.jsx';

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <Routes>
        <Route path="/" element={<HomeBienvenida />} />
        <Route path="/usuario" element={<InfoUser />} />
        <Route path="/olvidaste" element={<OlvidoContra />} />
        <Route path="/ayuda" element={<Pantalla_ayuda />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/editarPerfil" element={<editarPerfil />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </PrimeReactProvider>
  );
}

export default App;
