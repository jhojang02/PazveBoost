import '../styles/Servicios.css';

function Header () {
    return (
<header className="header">
  <div className="header-top">
    <div className="header-logo">
      <img src="Logo.png" className="Imagen" alt="Logo"/>
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

export default Header