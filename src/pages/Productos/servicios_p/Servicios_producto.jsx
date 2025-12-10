import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Rating } from 'primereact/rating';

import './Servicios_producto.css';
import Logo from './Logo.png';
import perfilHeader from './perfil.png';
import { products } from "../../../data/products";

// ------------------ HEADER ------------------
function Header({ busqueda, setBusqueda }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const productosFiltrados = busqueda
    ? products.filter(p =>
        p.name.toLowerCase().includes(busqueda.toLowerCase())
      )
    : [];

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <img src={Logo} className="Imagen" alt="Logo" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar productos o servicios..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          />
          <button>🔍</button>

          {showDropdown && busqueda !== "" && productosFiltrados.length > 0 && (
            <div className="dropdown-productos-float">
              {productosFiltrados.map(p => (
                <div key={p.id} className="dropdown-item-float">
                  <img src={p.image} alt={p.name} />
                  <div className="dropdown-text">
                    <p>{p.name}</p>
                    <p>{p.price}</p>
                    <Button
                      label="Agregar"
                      icon="pi pi-shopping-cart"
                      className="btn-dropdown"
                      onClick={() => alert(`Añadido: ${p.name}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-links">
          <img src={perfilHeader} className="img-perf" alt="perfil" />
          <a href="#">INICIO</a>
          <a href="https://www.facebook.com/PAZGOSOLUCIONES/">NOSOTROS</a>
          <a href="#" className="active">PRODUCTOS</a>
          <a href="https://pazveboost-servicios.vercel.app/">SERVICIOS</a>
          <a href="https://pazgo-contact.vercel.app">CONTACTENOS</a>
        </div>
        <a href="https://pazveboost.vercel.app" className="login-button">Cerrar Sesión</a>
      </nav>
    </header>
  );
}

// ------------------ COMPONENTE PRINCIPAL ------------------
export default function BasicDemo({ busqueda, setBusqueda }) {
  // Aquí no renderizamos Header, solo se ocupa para contenido opcional
  return <div className="page-container"></div>;
}

// ------------------ CARRITO ------------------
const CarritoCompras = () => {
  const op = useRef(null);
  const [carrito, setCarrito] = useState([
    { id: 1, nombre: 'Cámara Tipo Domo', precio: 150000 },
    { id: 2, nombre: 'Instalación', precio: 75000 }
  ]);

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div className="Boton-Carrito-Lateral">
      <Button icon="pi pi-shopping-cart" rounded severity="info" onClick={(e) => op.current.toggle(e)} />
      <Badge value={carrito.length} severity="info" />
      <OverlayPanel ref={op}>
        <h4>Carrito</h4>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ul>
            {carrito.map(p => <li key={p.id}>{p.nombre} - ${p.precio.toLocaleString('es-CO')}</li>)}
          </ul>
        )}
        <p><strong>Total:</strong> ${total.toLocaleString('es-CO')}</p>
      </OverlayPanel>
    </div>
  );
};

// ------------------ RATING ------------------
function WithoutCancelDemo() {
  const [value, setValue] = useState(null);
  return <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />;
}

// ------------------ ACCESOS RAPIDOS ------------------
function AccesosRapidos() {
  return (
    <div className="sidebar-accessos">
      <h4>Accesos Rápidos</h4>
      <ul className="accessos-lista">
        <li><a href="#promociones">🔥 Cámaras en promoción</a></li>
        <li><a href="#kits">🔧 Kits de instalación</a></li>
        <li><a href="#nuevos">🆕 Nuevos productos</a></li>
        <li><a href="#populares">⭐ Más populares</a></li>
      </ul>
    </div>
  );
}

export { Header, CarritoCompras, WithoutCancelDemo, AccesosRapidos };
