import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';
import './perfil.css';
import { Perfil1 } from './componentesPerfil/primerComponente.jsx';
import { useNavigate } from "react-router-dom"


function Perfil() {

    const navigate = useNavigate();
    
        const Click = () => {
        navigate('/editarPerfil');
        };

    return (
        <div className='Contenedor'>
            <div className='pi pi-arrow-left'></div>
            <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <div className='avatar-container'>
                    <h2 className='Titulo_perfil'>Mi Perfil</h2>
                    <div className='Malparida_imagen'><Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="Avatar" id='Avatar'/> </div>
                    <h2 className='Titulo'>Usuario</h2>
                    </div>
                    <div className='general_botones'>
                    <button className='botones'><div className='opciones' onClick={Click}><i className="pi pi-user-edit" style={{ fontSize: '2.8rem' } }></i><h3 className='TituloBotonEditar'>Editar Perfil</h3></div></button>
                    <button className='botones'><div className='opciones'><i className=" pi pi-exclamation-circle" style={{ fontSize: '2.8rem' }}></i><h3 className='TituloBotonEditar'>Ayuda</h3></div></button>
                    <Perfil1/>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}
export default Perfil