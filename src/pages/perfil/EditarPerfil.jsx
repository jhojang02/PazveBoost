import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import './EditarPerfil.css';
import { Checkbox } from 'primereact/checkbox';


function EditarPerfil() {

    const avataresData = [
        {
            image: "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        },
        {
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            image: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            image: "https://randomuser.me/api/portraits/men/4.jpg" 
        },
        {
            image: "https://randomuser.me/api/portraits/women/5.jpg"
        }
    ];
    const [value, setValue] = React.useState('');

    return (
        <div className='Contenedor'>
            <i className='pi pi-arrow-left back-arrow' />
            <div className="card">
                <div className="flex flex-wrap gap-5">
                    <div className="flex-auto">
                        <h2 className='Titulo'> Editar Perfil</h2>
                        <Avatar className="x-avatar" image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
                        <h2 className='nombre-usuario'>Usuario 777</h2>
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
                        <div className='avatars'>
                            <div className='contenedor-avatar'>
                            {
                                avataresData.map((element,index) => (
                                    <>
                                        <Avatar className="x-avatar" image={element.image} size="xlarge" shape="circle" />
                                    </>
                                ))
                            }
                        </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditarPerfil