import React, { useState } from "react";
import { PrimeReactProvider } from 'primereact/api';
import { CartProvider } from '../../../context/CartContext.jsx';
import { Header, BasicDemo, CarritoCompras, AccesosRapidos, WithoutCancelDemo } from '../servicios_p/Servicios_producto.jsx';
import Home from '../menu_productos/Home_product.jsx';
import '../index_productos.css';
import '../servicios_p/Servicios_producto.css';

function Estructura() {
  const [busqueda, setBusqueda] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <CartProvider>
        {/* Header arriba */}
        <Header busqueda={busqueda} setBusqueda={setBusqueda} />

        {/* Contenedor principal */}
 
            <div className='body'>
        <div className='sidebar'>
          <div className='carrito-container'>
          <CarritoCompras/>
          </div>
          <div className='carrito-header'>
          <h3 className='name_car'>Carrito <span className='simbolo'>➡</span> </h3> 
          <BasicDemo />
          <AccesosRapidos />
          <div className='estrellas'>
            <h4>! Califica nuestra pagina ¡  😊  </h4>
          <WithoutCancelDemo />
          </div>
        </div>
        </div>

        <div className='contenedor contenedor_fondo'>
            <Home />
        </div>
      </div>

      </CartProvider>
    </PrimeReactProvider>
  );
}

export default Estructura;
