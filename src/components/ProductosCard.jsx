import './ProductosCard.css';
import { useCart } from '../context/CartContext';
import carritoImg from '../components/carritoicono.png';
import { useState, useEffect, useRef } from 'react';

const ProductosCard = ({ product,}) => {
  const { addToCart } = useCart();
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDetails]);

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
            <button className="btn" onClick={toggleDetails}>Más detalles</button>
            <button className='btn add-btn' onClick={() => addToCart(product)}>
              <img src={carritoImg} alt="carrito" className='icono-carrito' />
            </button>
          </div>

          {showDetails && (
            <div className="floating-details" onClick={toggleDetails}>
              <p>{product.description || "Sin descripción disponible."} </p>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductosCard;
