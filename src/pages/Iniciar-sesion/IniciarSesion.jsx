
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import img from './img.png'
import './IniciarSesion.css'

function IniciarSesion({ esEmpleado }) {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');




    return (
        <div className="container-principal">
            <div className="caja-sesion">
                <div className="section-logo">
                    <img src={img} alt="" />
                </div>
                <div className="section-informacion">
                    <h2>Iniciar sesion {esEmpleado ? 'empleado' : 'cliente'}</h2>
                    <p>Ingresar tus credenciales para ingresar a tu cuenta</p>
                    <FloatLabel>
                        <InputText id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <label htmlFor="correo">{esEmpleado ? 'Nombre de usuario' : 'Correo:'}</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="contraseña" type='password' value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                        <label htmlFor="contraseña">Contraseña:</label>
                    </FloatLabel>
                    <button type="button" onClick={() => enviarDatos(esEmpleado)}>
                        Iniciar sesión
                    </button>
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

