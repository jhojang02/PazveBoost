import './ProductosCard.css';
import { useCart } from '../context/CartContext';
import carritoImg from '../components/carritoicono.png';

const ProductosCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <div className="product-card">

        <img src={product.image} alt={product.name} className="product-img" />

        <div className="product-text">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <div className="button-group">
            <button className="btn">Más detalles</button>
            <button className='btn add-btn' onClick={() => addToCart(product)}>
              <img src={carritoImg} alt="carrito" className='icono-carrito' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosCard;
