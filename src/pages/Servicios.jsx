import React, {useRef, useState} from "react";
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';

import Logo from '../Imagenes/Logo.png'
import '../styles/Servicios.css';

function Header () {
    return (
<header className="header">
  <div className="header-top">
    <div className="header-logo">
      <img src={Logo} className="Imagen" alt="Logo"/>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Buscar productos o servicios..." />
      <button>
        🔍
      </button>
    </div>
  </div>
  <nav className="navbar">
    <div className="nav-links">
      <a href="#">INICIO</a>
      <a href="#">NOSOTROS</a>
      <a href="#">PRODUCTOS</a>
      <a href="#" className="active">SERVICIOS</a>
      <a href="#">CONTACTENOS</a>
    </div>
    <a href="#" className="login-button">Iniciar Sesión</a>
  </nav>
</header>
    )
}

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Camara Tipo Domo', code: 'CD' },
        { name: 'Instalacion', code: 'I' },
        { name: 'Camara Portaltil', code: 'CP' },
    ];

    return (
        <div className="card">  
            <ListBox filter value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem fondo" />
        </div>
    )
}

const CarritoCompras = () => {
  const op = useRef(null);
  const [carrito, setCarrito] = useState([
    { id: 1, nombre: 'Cámara Tipo Domo', precio: 150000 },
    { id: 2, nombre: 'Instalación', precio: 75000 }
  ]);

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div className="Boton-Carrito-Lateral">
      <div className="Filtro-Carrito">
      <Button
        icon="pi pi-shopping-cart"
        className="p-button-rounded p-button-text"
        onClick={(e) => op.current.toggle(e)}
        aria-label="Ver carrito"
      />
      <Badge 
      value={carrito.length} 
      severity="info"
      className="badge-carrito" 
      />
      </div>

      <OverlayPanel ref={op}>
        <div className="Panel-Filtro">
          <h4>Carrito</h4>
          {carrito.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <ul>
              {carrito.map((producto) => (
                <li key={producto.id}>
                  {producto.nombre} - ${producto.precio.toLocaleString('es-CO')}
                </li>
              ))}
            </ul>
          )}
          <p><strong>Total:</strong> ${total.toLocaleString('es-CO')}</p>
        </div>
      </OverlayPanel>
    </div>
  );
};

export {Header, CarritoCompras}; 