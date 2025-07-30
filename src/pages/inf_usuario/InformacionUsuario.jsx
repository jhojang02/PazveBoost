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
                        <div className="Container1">
                        <FloatLabel>
                            <InputText id="Apellido"  value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <label htmlFor="Apellido">Apellido:</label>
                        </FloatLabel><br />
                        <FloatLabel>
                            <InputText id="Direccion" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            <label htmlFor="Direccion">Direccion:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="ID" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                            <label htmlFor="ID">Id:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            <label htmlFor="Telefono">Telefono:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="Nombre" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            <label htmlFor="Nombre">Nombre:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="Ciudad" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                            <label htmlFor="Ciudad">Ciudad:</label>
                        </FloatLabel><br/>
                        </div>
                        <button className="register">Registrar</button>
                    </span>
                </div>



            </div>
        </div>
    )
}

export default InformacionUsuario