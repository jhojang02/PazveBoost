import React, { useRef, useState } from "react";
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Rating } from "primereact/rating";

import Logo from '../Imagenes/Logo.png'
import '../styles/Servicios.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <img src={Logo} className="Imagen" alt="Logo" />
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
          <img src="https://acortar.link/AHVt47" className="img-perf"></img>
          <a href="#">INICIO</a>
          <a href="https://www.facebook.com/PAZGOSOLUCIONES/">NOSOTROS</a>
          <a href="https://pazveboostproductos.vercel.app/">PRODUCTOS</a>
          <a href="#" className="active">SERVICIOS</a>
          <a href="https://pazgo-contact.vercel.app">CONTACTENOS</a>
        </div>
        <a href="https://pazveboost.vercel.app" className="login-button">Cerrar Sesión</a>
      </nav>
    </header>
  )
}

export default function BasicDemo() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'Categorias', code: 'CD' },
    { name: 'Instalacion', code: 'I' },
    { name: 'Acesorias', code: 'CP' },
  ];

  return (
    <div className="card-uno">
      <ListBox filter value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem fondo filtros-busqueda" />
    </div>
  )
}

const CarritoCompras = () => {
  const op = useRef(null);
  const [carrito, setCarrito] = useState([
    { id: 1, nombre: 'Instalación', precio: 175000 },
    { id: 2, nombre: 'Soporte Técnico', precio: 350000 }
  ]);

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div className="Boton-Carrito-Lateral">
      <div className="Filtro-Carrito">
        <Button icon="pi pi-shopping-cart" rounded severity="info" onClick={(e) => op.current.toggle(e)} aria-label="Ver carrito" />
        <Badge value={carrito.length} severity="info" className="badge-carrito" />
      </div>

      <OverlayPanel className="panel-filtro-overlay" ref={op}>
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
          <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Success" severity="success" rounded className="sucess-boton" onClick={() => window.location.href = "https://pazveboostcarritocompras.vercel.app"}/>
            <Button label="Danger" severity="danger" rounded className="delete-boton"/>
          </div>
        </div>
      </OverlayPanel>

    </div>
  );
};

function WithoutCancelDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating className="calificacion" value={value} onChange={(e) => setValue(e.value)} cancel={false} />
        </div>
    );
}

function AccesosRapidos() {
  return (
    <div class="sidebar-accessos">
  <h4>Accesos Rápidos</h4>
  <ul class="accessos-lista">
    <li><a href="#promociones">🔥 Cámaras en promoción</a></li>
    <li><a href="#kits">🔧 Kits de instalación</a></li>
    <li><a href="#nuevos">🆕 Nuevos productos</a></li>
    <li><a href="#populares">⭐ Más populares</a></li>
  </ul>
</div>
  )
}

export { Header, CarritoCompras, WithoutCancelDemo, AccesosRapidos}; 