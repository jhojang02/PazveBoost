import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import "./BienvenidosPazveboost.css"
import img from "./img.png"

function BienvenidosPazveboost(){
    return(
        <div className="cdr_inf">
            <p><strong><h1>¡¡Bienvenidos A <br/>PazveBoost!!</h1><br/><img src={img}/><br/>
            Tu tranquiliad es nuestra prioridad. Encuentra los <br/>mejores servicios de instalacion y monitoreo de<br/> camaras de seguridad para proteger lo que mas te<br/> importa.
            </strong><br/><br/>
            <button>Siguiente</button>
            </p>
          
        </div>
    )
}

export default BienvenidosPazveboost