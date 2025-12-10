import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import BasicDemo, { Header, CarritoCompras, WithoutCancelDemo, AccesosRapidos } from '../servicios_p/Servicios_producto.jsx';
import Home from '../menu_productos/Home_product.jsx';
import '../../../index_productos.css';

function Estructura() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      {/* Header único */}
      <Header busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className='body'>
        <div className='sidebar'>
          <CarritoCompras />
          <BasicDemo busqueda={busqueda} setBusqueda={setBusqueda} />
          <AccesosRapidos />
          <div className='estrellas'>
            <h4>¡Califica nuestra pagina! 😊</h4>
            <WithoutCancelDemo />
          </div>
        </div>
        <div className='contenedor contenedor_fondo'>
          <Home />
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default Estructura;
