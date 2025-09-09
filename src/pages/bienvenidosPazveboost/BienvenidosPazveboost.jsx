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
            <p><strong><h1>¡¡Bienvenidos A <br/>PazveBoost!!</h1><img src={img} className="ImagenBienvenida"/><br/>
            Tu tranquiliad es nuestra prioridad. Encuentra los <br/>mejores servicios de instalacion y monitoreo de<br/> camaras de seguridad para proteger lo que mas te<br/> importa.
            </strong><br/><br/>
            <button onClick={handClick}>Siguiente</button>
            </p>
          
        </div>
    )
}

export default BienvenidosPazveboost