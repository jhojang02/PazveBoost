import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <>
      <div className='product'>
        <div className="product-card">
          <img src={product.image} alt={product.name} className="product-img" />
        </div>
        <div className='product-text'>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <div className="button-group">
            <button className="btn">Más detalles</button>
            <button className="btn">🛒</button>
          </div>
        </div>
      </div></>
  );
};

export default ProductCard;