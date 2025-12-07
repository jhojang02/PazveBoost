import './ShoppingCart.css'
import ProductCard from '../../components/ProductosCard';
import { products } from '../../data/products';
import { Header } from '../../components/Servicios.jsx';
import Logo from '../../Imagenes/Logo.png';
import '../../components/Servicios.css';
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const productPrice = "$300.000 COP";
    const shippingCost = "Gratis";
    const totalCost = "$300.000 COP";

    return (
        <>
        <div className='shopping-body'>
        <div>
            <Header />
        </div>
        <div className='shopping-container'>
                <div className='header-shopping-cart-container'>
                    <div className='container-icon'>
                        <span className='header-arrow'>←</span>
                        <span className='icon-shopping-cart'>🛒</span>
                        <span className='text-header'>Carrito de Compras</span>
                    </div>
                </div>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="shopping-cart-container">
                    <p className="title">Información de la Compra</p>

                    <div className="item">
                        <span className="item-label">Productos</span>
                        <span className="arrow">➔</span>
                        <span className="item-value">{productPrice}</span>
                        <button className="action-button primary">Comprar ahora</button>
                    </div>

                    <div className="item">
                        <span className="item-label">Envio</span>
                        <span className="arrow">➔</span>
                        <span className="item-value green">{shippingCost}</span>
                        <div className="button-placeholder"></div>
                    </div>

                    <div className="item">
                        <span className="item-label">Total</span>
                        <span className="arrow">➔</span>
                        <span className="item-value">{totalCost}</span>
                        <button className="action-button secondary">Descarga tu factura</button>
                    </div>
                </div>
            </div>
            </div>
            </>
    )
}

export default ShoppingCart