import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import img from "./image.png"
import './IniciarSesion.css';
import { useNavigate } from "react-router-dom";

function IniciarSesion({ esEmpleado }) {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
        const navigate = useNavigate();
    

    return (
        <div className="container-principal-perfil">
            <div className="caja-sesion">
                <div className="section-logo">
                    <img src={img} alt="" />
                </div>
                <div className="section-informacion">
                    <h2>Iniciar sesion {esEmpleado ? 'empleado' : 'cliente'}</h2>
                    <p>Ingresar tus credenciales para ingresar a tu cuenta</p>
                    <FloatLabel className="inputs-login-Inisesion">
                        <InputText id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <label htmlFor="correo" className="labels-login">{esEmpleado ? 'Nombre de usuario' : 'Correo:'}</label>
                    </FloatLabel>
                    <FloatLabel className="inputs-login-Inisesion">
                        <InputText id="contraseña" type='password' value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                        <label htmlFor="contraseña" className="labels-login">Contraseña:</label>
                    </FloatLabel>
                    <p>¿Olvidaste tu contraseña?<br></br>
                    <button className="boton_inicio" type="button" onClick={() => enviarDatos(esEmpleado)}>
                        Iniciar sesión
                    </button></p>
                    <p className="registro-p">¿No tienes cuenta?, Registrate...<br></br><br></br>
                    <button className="boton_registro" type="button" onClick={() => navigate('/usuario')} >
                        Registrate
                    </button></p>
                </div>
            </div>
        </div>
    )
}

function enviarDatos(esEmpleado) {
    if (esEmpleado) {
        alert("Es empleado")
    } else {
        alert("esCliente")
    }
}

export default IniciarSesion;
