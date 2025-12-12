import React, { useState, useRef } from "react";
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Rating } from "primereact/rating";

import './Servicios_producto.css';
import Logo from './Logo.png';
import perfilHeader from './perfil.png';
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { productspage } from "../../../data/productspage";
import { Dialog } from "primereact/dialog";

function Header() {

  const navigate = useNavigate();
  const { cart } = useCart();

  const [busqueda, setBusqueda] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibleCerrar, setVisibleCerrar] = useState(false);

  const productosFiltrados = busqueda
    ? productspage.filter(p =>
      p.name.toLowerCase().includes(busqueda.toLowerCase())
    )
    : [];

  const handClick = () => navigate('/servicios');
  const handClick2 = () => navigate('/bienvenida');
  const handClick3 = () => navigate('/'); 
  const handClick4 = () => {
    navigate('/carrito');
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };;
  const handClick5 = () => navigate('/perfil');

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

          {showDropdown && productosFiltrados.length > 0 && (
            <div className="dropdown-productos-float">
              {productosFiltrados.map(p => (
                <div key={p.id} className="dropdown-item-float">
                  <img src={p.image} alt={p.name} />
                  <div className="dropdown-text">
                    <p>{p.name}</p>
                    <p>{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <nav className="navbar">
        <div className="nav-links">
          <img src={perfilHeader} className="img-perf" onClick={handClick5} style={{ cursor: "pointer" }} />

          <a href="#" onClick={(e) => { e.preventDefault(); handClick2(); }}>INICIO</a>
          <a href="https://www.facebook.com/PAZGOSOLUCIONES/">NOSOTROS</a>
          <a href="#" className="active">PRODUCTOS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handClick(); }}>SERVICIOS</a>
          <a href="https://pazgo-contact.vercel.app">CONTACTENOS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handClick4(); }}>CARRITO</a>
        </div>

        <a
          href="#"
          className="login-button"
          onClick={(e) => {
            e.preventDefault();
            setVisibleCerrar(true);
          }}
        >
          Cerrar Sesión
        </a>
      </nav>

      <Dialog
        header="Cerrar sesión"
        visible={visibleCerrar}
        onHide={() => setVisibleCerrar(false)}
        style={{ width: '300px' }}
      >
        <p>¿Estás seguro de que quieres cerrar sesión?</p>
        <div className="flex justify-content-around mt-3">
          <Button
            label="Sí, cerrar sesión"
            icon="pi pi-check"
            className="p-button-success"
            onClick={handClick3}
          />
          <Button
            label="Cancelar"
            icon="pi pi-times"
            className="p-button-secondary"
            onClick={() => setVisibleCerrar(false)}
          />
        </div>
      </Dialog>

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
      <ListBox
        filter
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        className="w-full md:w-14rem fondo filtros-busqueda"
      />
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
};

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
  )
}

export { Header, BasicDemo, CarritoCompras, WithoutCancelDemo, AccesosRapidos };