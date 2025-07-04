import React, { useState } from "react";

import { InputText } from 'primereact/inputtext';
import './informacionUsuario.css'
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import img from "./img.png"

function InformacionUsuario() {
    const [value, setValue] = useState('');

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    return (
        <div className='fondo'>
            <div className='cdr_inf'>
                <img src={img} />
                <div className='letra'>
                    <span >Informacion de usuario<br />Por favor, digite su informacion
                        <br /><br />
                        <FloatLabel>
                            <InputText id="nombre"  value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <label htmlFor="nombre">Nombre:</label>
                        </FloatLabel><br />
                        <FloatLabel>
                            <InputText id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            <label htmlFor="apellido">Apellido:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="fecha_nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                            <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            <label htmlFor="telefono">Telefono:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            <label htmlFor="correo">Correo:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                            <label htmlFor="contraseña">Contraseña:</label>
                        </FloatLabel><br/>
                        <button>Registrar</button>
                    </span>
                </div>



            </div>
        </div>
    )
}

export default InformacionUsuario