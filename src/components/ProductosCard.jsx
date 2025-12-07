<<<<<<< HEAD:src/components/ProductCard.jsx
import { useState } from 'react';
import './ProductCard.css'
import { Checkbox } from 'primereact/checkbox';
=======
import './ProductosCard.css'
>>>>>>> productos:src/components/ProductosCard.jsx

const ProductCard = ({ product }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className='product'>
         <Checkbox className='checkbox-product-card' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        <div className="product-card">
          <img src={product.image} alt={product.name} className="product-img" />
        </div>
        <div className='product-text'>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <div className="button-group">
            <button className="btn">Más detalles</button>
          </div>
        </div>
      </div></>
  );
};

export default ProductCard;
