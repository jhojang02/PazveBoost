import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import "../pages/Perfil.css";


function Perfil() {

    return (
        <div className='Contenedor'>
            <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h2 className='Titulo'>Mi Perfil</h2>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <h2 className='Titulo'>Usuario</h2>
                    
                    <div className='pi pi-check'>
                        <h3 className='Opciones'>Editar Perfil</h3>
                    </div>
                    <h3>Ayuda</h3>
                    <h3>Cerrar Sesion</h3>
                </div>
        </div>
        </div>
        </div>
    )
}
export default Perfil