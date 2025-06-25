import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import "../pages/Perfil.css";
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';

function EditarPerfil() {
const [value, setValue] = React.useState('');
    return (
        <div className='Contenedor'>
            <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h2 className='Titulo'> Editar Perfil</h2>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    
                    <FloatLabel>
                    <InputText id="Nombre U" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Username</label>
                    </FloatLabel>

                    <FloatLabel>
                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Correo</label>
                    </FloatLabel>

                    <FloatLabel>
                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Celular</label>
                    </FloatLabel>

                    
                </div>
        </div>
        </div>
        </div>
    )
}
export default EditarPerfil