import React, { useState } from "react";

import { InputText } from 'primereact/inputtext';
import './informacionUsuario.css'
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';

function InformacionUsuario() {
    const [value, setValue] = useState('');
    return (
        <div className='fondo'>
            <div className='cdr_inf'>
                <img src='img.png' />
                <div className='letra'>
                    <span >Informacion de usuario<br />Por favor, digite su informacion
                        <br /><br />
                        <FloatLabel>
                            <InputText id="username"  value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="username">Nombre:</label>
                        </FloatLabel><br />
                        <FloatLabel>
                            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="username">Apellido:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="username">Fecha de nacimiento:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="username">Telefono:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="username">Correo:</label>
                        </FloatLabel><br/>
                        <FloatLabel>
                            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="username">Contraseña:</label>
                        </FloatLabel><br/>
                        <button>Registrar</button>
                    </span>
                </div>



            </div>
        </div>
    )
}

export default InformacionUsuario