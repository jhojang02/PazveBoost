import React, { useRef, useState } from "react";
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Rating } from "primereact/rating";
import { useCart } from '../../../context/CartContext.jsx';

import perfilHeader from './perfil.png';
import Logo from '../../../Imagenes/Logo.png';
import './ServiciosComponentes.css';

import { useNavigate } from "react-router-dom";

function Header() {
        const navigate = useNavigate();
    
        const handClick = () => {
            navigate('/productos');
        };

        const handClick2 = () => {
            navigate('/bienvenida');
        };

        const handClick3 = () => {
            navigate('/');
        };
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
          <img src={perfilHeader} className="img-perf"></img>
          <a href="" onClick={handClick2}>INICIO</a>
          <a href="https://www.facebook.com/PAZGOSOLUCIONES/">NOSOTROS</a>
          <a href="" onClick={handClick}>PRODUCTOS</a>
          <a href="" className="active">SERVICIOS</a>
          <a href="https://pazgo-contact.vercel.app">CONTACTENOS</a>

        </div>
        <a href="" onClick={handClick3} className="login-button">Cerrar Sesión</a>
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
  const { cart } = useCart();
  const op = useRef(null);
  const navigate = useNavigate();

  const total = cart.reduce((acc, s) => {
    const clean = Number(s.price.replace(/[^0-9]/g, ""));
    return acc + clean;
  }, 0);

  return (
    <div className="Boton-Carrito-Lateral">
      <div className="Filtro-Carrito">
        <Button icon="pi pi-shopping-cart" rounded severity="info" onClick={(e) => op.current.toggle(e)} aria-label="Ver carrito" />
        <Badge value={cart.length} severity="info" className="badge-carrito" />
      </div>

      <OverlayPanel ref={op}>
          <h4>Carrito</h4>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <ul>
              {cart.map((s) => (
                <li key={s.id}>
                  {s.name} - {s.price}
                </li>
              ))}
            </ul>
          )}
          <p><strong>Total:</strong> ${total.toLocaleString('es-CO')}</p>

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