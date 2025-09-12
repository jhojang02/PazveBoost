import "./BienvenidosPazveboost.css"
import img from "./img.png"
import { useNavigate } from "react-router-dom"

function BienvenidosPazveboost(){
    const navigate = useNavigate();

    const handClick = () => {
        navigate('/usuario');
    };

    return(
        <div className="ContenedorBienvenida">
            <div className="ParrafoBienvenida">
            <p><strong><h1>¡¡Bienvenidos A <br/>PazveBoost!!</h1><img src={img} className="ImagenBienvenida"/><br/>
            Tu tranquiliad es nuestra prioridad. Encuentra los <br/>mejores servicios de instalacion y monitoreo de<br/> camaras de seguridad para proteger lo que mas te<br/> importa.
            </strong>
            </p>
            <div className="BotonSiguienteBienvenida">
            <button className="BotonSiguienteBienvenida" onClick={handClick}>Siguiente</button>
            </div>
            </div>
            
          
        </div>
    )
}

export default BienvenidosPazveboost