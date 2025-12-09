import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import "./OlvidasteContraseña.css"
import img from "./img.png"
import { useNavigate } from "react-router-dom"

function OlvidasteContraseña() {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const clickRegistroos = () => {
        navigate('/usuario')
    };


    return (
        <div className='fondo'>
            <div className="cdr_inf2">
                <div id="imagen-logo">
                <img src={img} className="pazve-logo"/>
                </div>
                <div className='txt'>
                    <span>
                        <h3 className="title-contraseña">¿OlVIDASTE TU CONTRASEÑA?</h3><br />Al cambiar tu contraseña, elige una segura y única.<br /> Usa una combinacion de letras, numeros y simbolos de letras, números y símbolos. No compartas tu contraseña con nadie.<br /><br /><strong>Ingresa la dirección de correo electrónico:</strong><br /><br />
                        <div className="unico">
                        <FloatLabel>
                            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} className="p-float-label"/>
                            <label htmlFor="username" className="p-inputtext2">Email:</label>
                        </FloatLabel>
                        </div>
                        <div className="btn-olvi-contra">
                            <button className="Sgn" onClick={() => window.location.href = "/cambiarcontraseña" }>Siguiente</button><br /><br/>
                            <button className="rgr" onClick={clickRegistroos}>Registrar</button>
                        </div>
                    </span>

                </div>
            </div>
        </div>

    )
}

export default OlvidasteContraseña