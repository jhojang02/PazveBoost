import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';
import "./perfil.css";
import { Perfil1 } from './componentesPerfil/primerComponente.jsx';


function Perfil() {

    return (
        <div className='Contenedor'>
            <div className='pi pi-arrow-left'></div>
            <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <div className='avatar-container'>
                    <h2 className='Titulo'>Mi Perfil</h2>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="Avatar" />
                    <h2 className='Titulo'>Usuario</h2>
                    </div>
                    <div className='general_botones'>
                    <button className='botones'><div className='opciones'><i className="pi pi-user-edit" style={{ fontSize: '2.8rem' }}></i><h3>Editar Perfil</h3></div></button>
                    <button className='botones'><div className='opciones'><i className=" pi pi-exclamation-circle" style={{ fontSize: '2.8rem' }}></i><h3>Ayuda</h3></div></button>
                    <Perfil1/>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}
export default Perfil