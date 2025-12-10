import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './primerComponente.css';
import { useNavigate } from "react-router-dom"

function Perfil1() {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
   
  const Click = () => {
        navigate('/');
        }

  return (
    <div className="cerrar_sesion">
      <div style={{ textAlign: 'center' }}>
        <Button
          label="Cerrar Sesión"
          icon="pi pi-sign-out"
          onClick={() => setVisible(true)}
        />
      </div>

      <Dialog
        header="Cerrar sesión"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: '300px' }}
      >
        <p>¿Estás seguro de que quieres cerrar sesión?</p>
        <div className="flex justify-content-around mt-3">
          <Button
            label="Sí, Cerrar Sesión"
            icon="pi pi-check"
            className="p-button-success"
            onClick={Click}
          />
          <Button
            label="Cancelar"
            icon="pi pi-times"
            className="p-button-secondary"
            onClick={() => setVisible(false)}
          />
        </div>
      </Dialog>
    </div>
  );
}

export { Perfil1 };