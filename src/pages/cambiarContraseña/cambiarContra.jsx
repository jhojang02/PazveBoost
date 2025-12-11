import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import img from './img.png';
import './cambiarContra.css';
import "primereact/resources/themes/lara-light-blue/theme.css";  
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

function CambiarContraseña() {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validarCambio = () => {
    if (!password1 || !password2) {
      setError('Ambos campos son obligatorios');
    } else if (password1 !== password2) {
      setError('Las contraseñas no coinciden');
    } else {
      setError("");
      navigate("/exito");
    }
  };

  return (
    <div className="container_principal_contraseña">
      <div className="caja_sesion_contraseña">
        <div className="section_logo_contraseña">
          <img src={img} alt="" />
        </div>
        <div className="section_informacion_contraseña">
          <h2 className="h2_contraseña">Cambiar Contraseña</h2>
          <p className="p_contraseña">Ingresa la nueva contraseña</p>
          <FloatLabel>
            <InputText id="password1" type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
            <label htmlFor="password1">Nueva contraseña:</label>
          </FloatLabel>
          <FloatLabel>
            <InputText id="password2" type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
            <label htmlFor="password2">Repite la contraseña:</label>
          </FloatLabel>
          {error && <small style={{ color: 'red', marginTop: '10px' }}>{error}</small>}
          <button type="button" onClick={validarCambio} className="button_contraseña">Cambiar</button>
        </div>
      </div>
    </div>
  );
}

export default CambiarContraseña;