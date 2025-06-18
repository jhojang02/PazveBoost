import { Avatar } from "primereact/avatar"
import 'primeicons/primeicons.css';
import { AvatarGroup } from "primereact/avatargroup";


function Perfil(){
    return(
        <div className="perfil">
            <h1>Mi Perfil</h1>
           <Avatar image="/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
            <h2> Usuario 777</h2>

            
            <i className="pi pi-check"></i> <p>Editar Perfil</p>
            <br></br>
            <i className="pi pi-times"></i> <p>Ayuda</p>
            <br></br>
            <span className="pi-arrow-left"></span>
            <br></br>
            <span className="pi pi-user"></span>
        
        </div>
    )
}
export default Perfil