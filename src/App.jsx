import React from "react";
import { Routes, Route } from "react-router-dom";
import CambiarContraseña from "./pages/CambiarContraseña/CambiarContraseña";
import Exito from "./pages/Exito/Exito.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CambiarContraseña />} />
      <Route path="/exito" element={<Exito />} />
    </Routes>
  );
}

export default App;
