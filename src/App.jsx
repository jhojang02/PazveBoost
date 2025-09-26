import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { Routes, Route } from 'react-router-dom';

import HomeBienvenida from './pages/bienvenidosPazveboost/BienvenidosPazveboost';
import InfoUser from './pages/inf_usuario/InformacionUsuario';
import OlvidoContra from './pages/olvidasteContraseña/OlvidasteContraseña';
import Pantalla_ayuda from './pages/Pantalla_ayuda/Ayuda';
import Perfil from './pages/perfil/perfil.jsx';
import EditarPerfil from './pages/perfil/EditarPerfil.jsx';
import OlvidasteContraseña from './pages/olvidasteContraseña/OlvidasteContraseña.jsx';
import Ayuda from './pages/Pantalla_ayuda/Ayuda.jsx';

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <Routes>
        <Route path="/" element={<HomeBienvenida />} />
        <Route path="/usuario" element={<InfoUser />} />
        <Route path="/olvidaste" element={<OlvidoContra />} />
        <Route path="/ayuda" element={<Pantalla_ayuda />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
        <Route path="/olvidarContraseña" element={<OlvidasteContraseña />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </PrimeReactProvider>
  );
}

export default App;
