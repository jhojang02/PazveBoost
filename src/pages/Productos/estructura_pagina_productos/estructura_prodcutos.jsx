import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Accordion, AccordionTab } from 'primereact/accordion';

import BasicDemo, { Header, CarritoCompras, WithoutCancelDemo, AccesosRapidos } from '../servicios_p/Servicios_producto.jsx';
import Home from '../menu_productos/Home_product.jsx';
import '../index_productos.css';
import { CartProvider } from '../../../context/CartContext.jsx';

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
      <CartProvider>
        <Header busqueda={busqueda} setBusqueda={setBusqueda} />

        <div className="body">
          {/* Sidebar */}
          <aside className="sidebar">
            {/* Carrito */}
            <div className="carrito-container">
              <CarritoCompras />
            </div>

            {/* Tabla de productos */}
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

            {/* Calificación */}
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
      </CartProvider>
    </PrimeReactProvider>
  );
}

export default Estructura;
