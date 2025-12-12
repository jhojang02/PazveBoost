import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import "./informacionUsuario.css";
import imagen from "./img.png";
import { useNavigate } from "react-router-dom";

function InformacionUsuario() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [direccion, setDireccion] = useState("");
    const [tipo_documento, setTipoDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [nombre, setNombre] = useState("");
    const [ciudad, setCiudad] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const datos = {
            correo,
            contrasena,
            nombre,
            telefono,
            direccion,
            cc: tipo_documento,
            ciudad
        };

        try {
            const response = await fetch(
                "http://localhost/pazveboost/registrousuario.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datos)
                }
            );

            const data = await response.json();
            console.log(data);

            if (data.ok) {
                alert("Usuario registrado correctamente");
                navigate("/bienvenida");
            } else {
                alert(data.mensaje);
            }
        } catch (error) {
            console.error(error);
            alert("Error en el servidor");
        }
    };

    return (
        <div className="fondo">
            <div className="cdr_inf">
                <img src={imagen} className="imagen" alt="logo" />
                <div className="letra">
                    <div className="Titulo">
                        <p>
                            Información de usuario<br />
                            Por favor, digite su información
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="Container1">
                        <FloatLabel>
                            <InputText value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            <label>Correo</label>
                        </FloatLabel><br />

                        <FloatLabel>
                            <InputText value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                            <label>Contraseña</label>
                        </FloatLabel><br />

                        <FloatLabel>
                            <InputText value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                            <label>Dirección</label>
                        </FloatLabel><br />

                        <FloatLabel>
                            <InputText value={tipo_documento} onChange={(e) => setTipoDocumento(e.target.value)} />
                            <label>CC</label>
                        </FloatLabel><br />

                        <FloatLabel>
                            <InputText value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            <label>Teléfono</label>
                        </FloatLabel><br />

                        <FloatLabel>
                            <InputText value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <label>Nombre</label>
                        </FloatLabel><br />

                        <FloatLabel>
                            <InputText value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                            <label>Ciudad</label>
                        </FloatLabel><br />

                        <button className="register" type="submit">
                            Registrar
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default InformacionUsuario;