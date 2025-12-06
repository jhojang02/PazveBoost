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

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [direccion, setDireccion] = useState('');
    const [tipo_documento, setTipoDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nombre, setNombre] = useState('');
    const [ciudad, setCiudad] = useState('');
    

    const handleSubmit = async (e) => {
        {e.preventDefault();

    const formData = new FormData();
    formData.append("Correo", correo);
    formData.append("Contraseña", contrasena);
    formData.append("Direccion", direccion);
    formData.append("CC", tipo_documento);
    formData.append("telefono", telefono);
    formData.append("Nombre", nombre);
    formData.append("Ciudad", ciudad);

    try {
      const response = await fetch(
        "http://localhost/PazveBoost_API/registrousuario.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    }
  };


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
                        <br />
                        <div className="Container1">
                            <form onSubmit={handleSubmit} name="formu" action="registrousuario.php" method="post" enctype="multipart/form-data">
                        <FloatLabel>
                            <InputText id="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} name="mail"/>
                            <label htmlFor="Correo">Correo:</label>
                        </FloatLabel><br />
                        <FloatLabel>
                            <InputText id="InputInfo" value={contrasena} onChange={(e) => setContrasena(e.target.value)} name="contr"/>
                            <label htmlFor="Contraseña">Contraseña:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={direccion} onChange={(e) => setDireccion(e.target.value)} name="dir"/>
                            <label htmlFor="Direccion">Dirección:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={tipo_documento} onChange={(e) => setTipoDocumento(e.target.value)} name="tp"/>
                            <label htmlFor="CC">CC:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={telefono} onChange={(e) => setTelefono(e.target.value)} name="tel"/>
                            <label htmlFor="Telefono">Teléfono:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={nombre} onChange={(e) => setNombre(e.target.value)} name="nom"/>
                            <label htmlFor="Nombre">Nombre:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="InputInfo" value={ciudad} onChange={(e) => setCiudad(e.target.value)} name="ciud"/>
                            <label htmlFor="Ciudad">Ciudad:</label>
                        </FloatLabel><br/>
                        </form>
                        </div>
                        <button className="register" onClick={handClick}>Registrar</button>
                </div>
            </div>
        </div>
        
    )
}

export default InformacionUsuario