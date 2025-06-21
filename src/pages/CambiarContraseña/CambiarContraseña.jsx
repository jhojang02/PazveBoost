import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import img from './img.png';
import './CambiarContraseña.css';

function CambiarContraseña(){
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const validarCambio = () => {
    if (!password1 || !password2) {
      setError('Ambos campos son obligatorios');
    } else if (password1 !== password2) {
      setError('Las contraseñas no coinciden');
    }
  };
    
    return(
        <div className="container-principal">
            <div className="caja-sesion">
                <div className="section-logo">
                    <img src={img} alt="" />
                </div>
                <div className="section-informacion">
                    <h2>Cambiar Contraseña</h2>
                    <p>Ingresa la nueva contraseña</p>
                    <FloatLabel>
                        <InputText id="password1" type='password' value={password1} onChange={(e) => setPassword1(e.target.value)} />
                        <label htmlFor="password1">Nueva contraseña:</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="password2" type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} />
                        <label htmlFor="password2">Nueva contraseña:</label>
                    </FloatLabel>
                    {error && <small style={{ color: 'red', marginTop: '10px' }}>{error}</small>}
                    <button type="button" onClick={validarCambio}>Cambiar</button>
                </div>
            </div>
        </div>
        
    )
}


export default CambiarContraseña;