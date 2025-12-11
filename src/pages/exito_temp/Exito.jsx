import './exito.css';
import { useNavigate } from 'react-router-dom';
import logo from './img.png';


const exito = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="exito-container">
      <div className="exito-card">
        <div className="exito-left">
          <img
            src={logo}
            alt="Logo Pazveboost"
            className="exito-logo"
          />
        </div>
        <div className="exito-right">
          <div className="exito-icon">✔</div>
          <p className="exito-message">La Contraseña Ha Sido Cambiada Con Éxito</p>
          <button className="exito-button" onClick={handleLoginRedirect}>
            Volver a iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default exito;