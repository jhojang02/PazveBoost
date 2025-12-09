import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import BasicDemo, { Header, CarritoCompras, WithoutCancelDemo, AccesosRapidos} from '../servicios_p/Servicios_producto.jsx';
import Home from '../menu_productos/Home_product.jsx';
import '../menu_productos/Home_product.css';
import '../index_productos.css';
import '../servicios_p/Servicios_producto.css';
import { CartProvider } from '../../../context/CartContext.jsx';

function Estructura() {

  return (

    <PrimeReactProvider value={{ unstyled: false }}>
      <CartProvider>
      <Header />

      <div className='body'>
        <div className='sidebar'>
          <div className='carrito-container'>
          <CarritoCompras/>
          </div>
          <div className='carrito-header'>
          <h3 className='name_car'>Carrito <span className='simbolo'>➡</span> </h3> 
          <BasicDemo />
          <AccesosRapidos />
          <div className='estrellas'>
            <h4>! Califica nuestra pagina ¡  😊  </h4>
          <WithoutCancelDemo />
          </div>
        </div>
        </div>

        <div className='contenedor contenedor_fondo'>
            <Home />
        </div>
      </div>
      
      </CartProvider>
    </PrimeReactProvider>
  )
}

export default Estructura