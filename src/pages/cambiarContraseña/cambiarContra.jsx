import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import img from './img.png';
import './cambiarContra.css';
import { useNavigate } from "react-router-dom";

function CambiarContraseña() {
    const [correo, setCorreo] = useState('');        
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const validarCambio = async () => {

        // Validaciones
        if (!correo || !password1 || !password2) {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (password1 !== password2) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setError("");

        try {
            const response = await fetch("http://localhost/pazveboost/cambiar_contra.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    correo: correo,
                    contrasena: password1 
                })
            });

            const data = await response.json();
            console.log(data);

            if (data.ok) {
                alert("Contraseña actualizada con éxito");
                navigate("/exito");
            } else {
                setError(data.mensaje);
            }

        } catch (err) {
            console.error(err);
            setError("Error en la conexión con el servidor");
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
                    <p className="p_contraseña">Ingresa tu correo y tu nueva contraseña</p>

                    <FloatLabel>
                        <InputText id="correo11" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <label htmlFor="correo">Correo:</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="password1" type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
                        <label htmlFor="password1">Nueva contraseña:</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="password2" type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                        <label htmlFor="password2">Repite la contraseña:</label>
                    </FloatLabel>

                    {error && <small style={{ color: 'red', marginTop: '10px' }}>{error}</small>}

                    <button type="button" onClick={validarCambio} className="button_contraseña">
                        Cambiar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CambiarContraseña;
