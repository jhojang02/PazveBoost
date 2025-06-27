import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import '../pages/EditarPerfil.css';

function EditarPerfil() {
const [value, setValue] = React.useState('');
    
return (
        <div className='Contenedor'>
            <i className='pi pi-arrow-left back-arrow'/>
            <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h2 className='Titulo'> Editar Perfil</h2>
                    <Avatar className="x-avatar" image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"  size="xlarge" shape="circle" />
                    <div className='labels-u'>
                        <div className='espaciado'>
                    <FloatLabel>
                    <InputText id="nombre_u" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Nombre Usuario</label>
                    </FloatLabel>
                        </div>

                        <div className='espaciado'>
                    <FloatLabel>
                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Correo</label>
                    </FloatLabel>
                        </div>
                        <div className='espaciado'>
                    <FloatLabel>
                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Celular</label>
                    </FloatLabel>
                    </div>
                    </div>

                </div>
        </div>
        </div>
        </div>
    )
}
export default EditarPerfil