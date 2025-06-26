import "./Ayuda.css";
import { Button } from 'primereact/button';
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import Flecha from "./imagenFlecha.png";

function Ayuda() {
    const [value, setValue] = useState('');
    const [botonPrincipal, setBotonPrincipal] = useState('FAQ');
    const [botonSecundario, setBotonSecundario] = useState('');

    const handlePrincipalClick = (boton) => {
        setBotonPrincipal(boton);
    };

    const handleSecundarioClick = (boton) => {
        setBotonSecundario(boton);
    };

    return (
        <div className="container-principal-ayuda">
            <div className="header-ayuda">
                <div className="logo">
                    <button><img src={Flecha} alt="Volver" /></button>
                </div>
                <div className="titulos">
                    <h2>Ayuda & FAQS</h2>
                    <h3>¿Cómo Podemos Ayudarte?</h3>
                </div>
            </div>

            <div className="botones-principales">
                <Button
                    label="FAQ"
                    className={`${botonPrincipal === 'FAQ' ? 'p-button-primary' : 'p-button-outlined'} boton-grande`}
                    onClick={() => handlePrincipalClick('FAQ')}
                />
                <Button
                    label="Contáctanos"
                    className={`${botonPrincipal === 'Contactanos' ? 'p-button-primary' : 'p-button-outlined'} boton-grande`}
                    onClick={() => handlePrincipalClick('Contactanos')}
                />
            </div>

            
            <div className="botones-pequenos">
                <Button
                    label="General"
                    className={`${botonSecundario === 'General' ? 'p-button-secondary' : 'p-button-outlined'} boton-pequeno`}
                    onClick={() => handleSecundarioClick('General')}
                />
                <Button
                    label="Cuenta"
                    className={`${botonSecundario === 'Cuenta' ? 'p-button-secondary' : 'p-button-outlined'} boton-pequeno`}
                    onClick={() => handleSecundarioClick('Cuenta')}
                />
                <Button
                    label="Servicio"
                    className={`${botonSecundario === 'Servicio' ? 'p-button-secondary' : 'p-button-outlined'} boton-pequeno`}
                    onClick={() => handleSecundarioClick('Servicio')}
                />
            </div>

            <div className="buscador">
                <FloatLabel>
                    <InputText id="buscar" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="buscar">Buscar</label>
                </FloatLabel>
            </div>
        </div>
    );
}

export default Ayuda;
