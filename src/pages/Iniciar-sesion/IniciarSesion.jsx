import './IniciarSesion.css'
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

function IniciarSesion(){
    const [value, setValue] = useState('');
    
    return(
        <div className="container-principal">
            <div className="caja-sesion">
                <div className="section-logo">
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=afe5bddd2c&attid=0.1&permmsgid=msg-f:1835220543824463244&th=1978035c7728058c&view=att&disp=safe&realattid=f_mc15h1p90&zw" alt="Logo" className="" />
                </div>
                <div className="section-informacion">
                    <h2>Iniciar sesion</h2>
                    <p>Ingresar tus credenciales para ingresar a tu cuenta</p>
                    <FloatLabel>
                        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </FloatLabel>
                </div>
            </div>
        </div>
    )
}

export default IniciarSesion;

