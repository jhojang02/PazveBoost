import React, { useState } from "react";

import { InputText } from 'primereact/inputtext';
import './informacionUsuario.css'
//Hola
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import imagen from "./img.png"
import { useNavigate } from "react-router-dom"

function InformacionUsuario() {
    const [value, setValue] = useState('');

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const handleSubmit = (e) => {e.preventDefault();
        const datos = {
            nombre,
            apellido,
            direccion,
            fechaNacimiento,
            telefono,
            correo,
            contrasena
        };
    }


    const navigate = useNavigate();

    const handClick = () => {
        navigate('/bienvenida');
    };

    return (
        <div className='fondo'>
            <div className='cdr_inf'>
                <img src={imagen} className="imagen"/>
                <div className='letra'>
                    <div className="Titulo"><p>Informacion de usuario<br />Por favor, digite su informacion</p></div>
                        <br /><br />
                        <div className="Container1">
                            <form onSubmit={handleSubmit} name="formu" action="registroaprendiz.php" method="post" enctype="multipart/form-data">
                        <FloatLabel>
                            <InputText id="InputInfo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <label htmlFor="Apellido">Correo:</label>
                        </FloatLabel><br />
                        <FloatLabel>
                            <InputText id="InputInfo" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            <label htmlFor="Direccion">Direccion:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                            <label htmlFor="CC">CC:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            <label htmlFor="Telefono">Telefono:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            <label htmlFor="Nombre">Nombre:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                            <label htmlFor="Ciudad">Ciudad:</label>
                        </FloatLabel><br/>
                        </div>
                        <button className="register" onClick={handClick}>Registrar</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default InformacionUsuario