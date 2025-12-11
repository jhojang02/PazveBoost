import React, { useRef, useState } from "react";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { OverlayPanel } from "primereact/overlaypanel";
import { Rating } from "primereact/rating";

import { useCart } from "../../../context/CartContext.jsx";
import { products } from "../../../data/productsServices.js"; // asegúrate de la ruta
import perfilHeader from "./perfil.png";
import Logo from "../../../Imagenes/Logo.png";
import "./ServiciosComponentes.css";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [busqueda, setBusqueda] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const productosFuente = Array.isArray(products) ? products : [];
  const productosFiltrados =
    busqueda.trim() === ""
      ? []
      : productosFuente.filter((p) =>
          String(p.name).toLowerCase().includes(busqueda.toLowerCase())
        );

  const handClick = () => navigate("/productos");
  const handClick2 = () => navigate("/bienvenida");
  const handClick3 = () => navigate("/");
  const handClick4 = () => navigate("/carrito");
  const handClick5 = () => navigate("/perfil");

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
            onBlur={() => setTimeout(() => setShowDropdown(false), 120)}
          />
          <button>🔍</button>

          {showDropdown && busqueda.trim() !== "" && productosFiltrados.length > 0 && (
            <div className="dropdown-productos-float">
              {productosFiltrados.map((p) => (
                <div key={p.id} className="dropdown-item-float">
                  <img src={p.image} alt={p.name} />
                  <div className="dropdown-text">
                    <p className="dd-name">{p.name}</p>
                    <p className="dd-price">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-links">
          <img
            src={perfilHeader}
            className="img-perf"
            onClick={handClick5}
            style={{ cursor: "pointer" }}
            alt="perfil"
          />

          <a href="#" onClick={(e) => { e.preventDefault(); handClick2(); }}>
            INICIO
          </a>
          <a href="https://www.facebook.com/PAZGOSOLUCIONES/">NOSOTROS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handClick(); }}>
            PRODUCTOS
          </a>
          <a href="#" className="active">SERVICIOS</a>
          <a href="https://pazgo-contact.vercel.app">CONTACTENOS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handClick4(); }}>
            CARRITO
          </a>
        </div>

        <a href="#" onClick={(e) => { e.preventDefault(); handClick3(); }} className="login-button">
          Cerrar Sesión
        </a>
      </nav>
    </header>
  );
}

export default function BasicDemo() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Categorias", code: "CD" },
    { name: "Instalacion", code: "I" },
    { name: "Acesorias", code: "CP" },
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
  );
}

export const CarritoCompras = () => {
  const { cart } = useCart();
  const op = useRef(null);

  const total = cart.reduce((acc, s) => {
    const clean = Number(String(s.price).replace(/[^0-9]/g, ""));
    return acc + (isNaN(clean) ? 0 : clean);
  }, 0);

  return (
    <div className="Boton-Carrito-Lateral">
      <div className="Filtro-Carrito">
        <Button icon="pi pi-shopping-cart" rounded severity="info" onClick={(e) => op.current && op.current.toggle(e)} aria-label="Ver carrito" />
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
        <p><strong>Total:</strong> ${total.toLocaleString("es-CO")}</p>
      </OverlayPanel>
    </div>
  );
};

export function WithoutCancelDemo() {
  const [value, setValue] = useState(null);
  return (
    <div className="card flex justify-content-center">
      <Rating className="calificacion" value={value} onChange={(e) => setValue(e.value)} cancel={false} />
    </div>
  );
}

export function AccesosRapidos() {
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

export { Header, BasicDemo };