import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

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

export {Header}; 