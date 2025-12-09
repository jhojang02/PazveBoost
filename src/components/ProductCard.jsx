import './ProductosCard.css';
import { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const ProductCard = ({ product }) => {
  const [ checked, setChecked ] = useState(false);

  return (
    <div className="product">
      <div className="product-card">
        <Checkbox
        className='checkbox-product-card'
        onChange={(e) => setChecked(e.checked)}
        checked={checked} />
        <img src={product.image} alt={product.name} className="product-img" />

        <div className="product-text">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <div className="button-group">
            <button className="btn">Más detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
