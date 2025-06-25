import "./Ayuda.css"
import { Button } from 'primereact/button';
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import imagenFlecha from "./imagenFlecha.png"

function Ayuda(){
    const [value, setValue] = useState('');
    return(
        <>
        <div className="container-principal">
            <div class="logo"><img src={imagenFlecha} alt="" style="width: 150px; height: auto;" /></div>
            <div className="titulos">
                <h2>Ayuda & FAQS</h2>
                <h3>¿Como Podemos Ayudarte?</h3>
            </div>
            <div className="botones-principales">
                <div className="card flex justify-content-center">
                    <Button label="FAQ" />
                </div>
        
                <div className="card flex justify-content-center">
                    <Button label="Contactanos" />
                </div>
            </div>
            <div className="botones-pequeños">
                <div className="card flex justify-content-center">
                    <Button label="General" />
                </div>
                <div className="card flex justify-content-center">
                    <Button label="Cuenta" />
                </div>
                <div className="card flex justify-content-center">
                    <Button label="Servicio" />
                </div>
            </div>
            <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
            </div>
        </div>
        </>
    )
}

export default Ayuda;