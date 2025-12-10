import { useState, useRef } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Rating } from "primereact/rating";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

import BasicDemo, { Header, AccesosRapidos } from '../servicios_p/Servicios_producto.jsx';
import Home from '../menu_productos/Home_product.jsx';
import '../../../index_productos.css';

function Estructura() {
  const [busqueda, setBusqueda] = useState("");

  // Ejemplo de productos
  const productos = [
    { id: 1, nombre: 'Instalación', categoria: 'Instalacion', precio: 175000 },
    { id: 2, nombre: 'Soporte Técnico', categoria: 'Acesorias', precio: 350000 },
    { id: 3, nombre: 'Cámara IP', categoria: 'Categorias', precio: 250000 },
    { id: 4, nombre: 'Kit de Instalación', categoria: 'Instalacion', precio: 120000 },
    { id: 5, nombre: 'Accesorio A', categoria: 'Acesorias', precio: 45000 },
  ];

  // Filtrado por búsqueda
  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Agrupar productos por categoría
  const categorias = [...new Set(productosFiltrados.map(p => p.categoria))];

  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      {/* Header con búsqueda */}
      <Header busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="body">
        {/* Sidebar */}
        <aside className="sidebar">
          {/* Carrito con icono a la derecha y más espacio */}
        <div className="carrito-titulo" style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h4 style={{ margin: 0 }}>🛒 Carrito</h4>
          <div style={{ marginLeft: '2rem' }}>
          <CarritoConBotones />
          </div>
        </div>


          {/* Tabla de productos como acordeón con color de fondo */}
          <div className="tabla-productos">
            <h4>Productos</h4>
            <Accordion>
              {categorias.map(cat => (
                <AccordionTab key={cat} header={cat}>
                  <table className="tabla-categorias" style={{ backgroundColor: '#f0f4f8', borderRadius: '5px', width: '100%' }}>
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productosFiltrados
                        .filter(p => p.categoria === cat)
                        .map(prod => (
                          <tr key={prod.id}>
                            <td>{prod.nombre}</td>
                            <td>${prod.precio.toLocaleString('es-CO')}</td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </AccordionTab>
              ))}
            </Accordion>
          </div>

          {/* Accesos rápidos */}
          <AccesosRapidos />

          {/* Calificación interactiva */}
          <div className="estrellas" style={{ overflow: 'hidden', padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#f9f9f9', marginTop: '1rem' }}>
            <h4>¡Califica nuestra página! 😊</h4>
            <WithoutCancelDemo />
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="contenedor contenedor_fondo">
          <Home />
        </main>
      </div>
    </PrimeReactProvider>
  );
}

// Componente de carrito con botones Confirmar y Cancelar
const CarritoConBotones = () => {
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

          {/* Botones Confirmar y Cancelar */}
          <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Confirmar" severity="success" rounded className="sucess-boton" />
            <Button label="Cancelar" severity="danger" rounded className="delete-boton" />
          </div>
        </div>
      </OverlayPanel>
    </div>
  );
};

// Componente de calificación interactiva
function WithoutCancelDemo() {
  const [value, setValue] = useState(null);

  return (
    <div className="card flex justify-content-center">
      <Rating className="calificacion" value={value} onChange={(e) => setValue(e.value)} cancel={false} />
    </div>
  );
}

export default Estructura;
