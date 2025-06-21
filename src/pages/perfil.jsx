import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';
import "../pages/Perfil.css";


function Perfil() {

    return (
        <div className='Contenedor'>
            <div className='pi pi-arrow-left'></div>
            <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h2 className='Titulo'>Mi Perfil</h2>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="img" />
                    <h2 className='Titulo'>Usuario</h2>
                    
                    <div className='opciones'><i className="pi pi-user-edit" style={{ fontSize: '1.8rem' }}></i><h3>Editar Perfil</h3></div>
                    <div className='opciones'><i className=" pi pi-exclamation-circle" style={{ fontSize: '1.8rem' }}></i><h3>Ayuda</h3></div>
                    <div className='opciones'><i className=" pi pi-sign-out" style={{ fontSize: '1.8rem' }}></i><h3>Cerrar Sesion</h3></div>
                </div>
        </div>
        </div>
        </div>
    )
}
export default Perfil