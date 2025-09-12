import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import "./ContraseñaCambiada.css"
import img from "./img.png"
import otraimg from "./chulo.jpg"

function ContraseñaCambiada() {
    return (
        <div className="cdr_inf">
            <img src={img} />
           
            <div className="txt">
                 <img src={otraimg} className="imagen" />
                <span>La contraseña ha sido<br/> cambiada con exito</span>
                <br /><br/>
                <button className="BotonContraseña">Volver a iniciar sesión</button>
            </div>
        </div>
    )
}

export default ContraseñaCambiada