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
        <div className="body">
          {/* Sidebar */}
          <aside className="sidebar">
            <CarritoCompras />
            <BasicDemo selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
            <AccesosRapidos />
            <WithoutCancelDemo />
          </aside>

          {/* Contenido principal */}
          <main className="contenedor_fondo">
            <Home />
          </main>
        </div>
      </CartProvider>
    </PrimeReactProvider>
  );
}

export default Estructura;
