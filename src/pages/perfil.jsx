import "../style/perfil.css";

function perfil(){
    return(
        <div className="perfil">
            <Avatar icon="pi pi-user" size="xlarge" />
            <Avatar icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
            <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            

        </div>
    )
}
export default perfil