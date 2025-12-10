import './ShoppingCart.css';
import { Header } from '../../components/Servicios.jsx';
import Logo from '../../Imagenes/Logo.png';
import '../../components/Servicios.css';
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from "react-router-dom";


const ShoppingCart = () => {
    const {cart, increaseQuantity, decreaseQuantity, removeFromCart} = useCart();
    const navigate = useNavigate();

    const calculateTotal = () => {
        const total = cart.reduce ((sum, item) => {
            const digitsOnly = item.price ? String(item.price).replace(/\D/g, '') : '0';
            const priceInt = parseInt(digitsOnly, 10) || 0;
            return sum + item.quantity * priceInt;
        }, 0);
        return total.toLocaleString('es-CO');
    };

    return (
        <>
        <div className='shopping-body'>

                    <Header />

                <div className='shopping-container'>
                    
                    <div className='header-shopping-cart-container'>
                        <div className='container-icon'>
                            <span className='header-arrow' onClick={() => navigate(-1)}>←</span>
                            <span className='icon-shopping-cart'>🛒</span>
                            <span className='text-header'>Carrito de Compras</span>
                        </div>
                    </div>

                <div className="cart-list">
                    {cart.length === 0 ? (
                        <p className="empty">Tu carrito está vacío</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">

                                <img src={item.image} alt={item.name} className="cart-img" />

                                <div className="cart-info">
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>

                                    <div className="qty-controls">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                </div>

                                <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                                    ❌
                                </button>
                            </div>
                        ))
                    )}
                </div>


                <div className='shopping-cart-container'>
                    <p className='title'>Información de la Compra</p>

                    <div className='item'>
                        <span>Productos</span>
                        <span className='item-value'>{cart.reduce((sum, item) => sum + item.quantity, 0)} productos</span>
                    </div>
                    
                    <div className='item'>
                        <span>Envio</span>
                        <span className='item-value green'>Gratis</span>
                    </div>

                    <div className='item'>
                        <span>Total</span>
                        <span className='item-value'>${calculateTotal()} COP</span>
                    </div>

                    <button className='action-button primary' onClick={() => navigate("/productos")}>Seguir comprando</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ShoppingCart;