import './ShoppingCart.css';
import { Header } from '../../components/Servicios.jsx';
import Logo from '../../Imagenes/Logo.png';
import '../../components/Servicios.css';
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();

    const idCliente = localStorage.getItem("id_cliente");

    const calculateTotal = () => {
        const total = cart.reduce((sum, item) => {
            const digitsOnly = item.price ? String(item.price).replace(/\D/g, '') : '0';
            const priceInt = parseInt(digitsOnly, 10) || 0;
            return sum + item.quantity * priceInt;
        }, 0);
        return total.toLocaleString('es-CO');
    };

    const guardarCarritoEnBD = () => {

        if (!idCliente) {
            alert("Debes iniciar sesión para guardar el carrito.");
            navigate("/iniciarSesion");
            return;
        }

        const productos = cart.map(item => ({
            COD_PRODCT: item.id,
            NOM_PRODCT: item.name,
            CANTIDAD: item.quantity
        }));

        fetch("http://localhost/pazveboost/guardar_carrito.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id_cliente: idCliente,
                productos: productos
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            if (data.ok) {
                alert("Carrito guardado en la base de datos.");
            } else {
                alert("Error: " + data.mensaje);
            }
        })
        .catch(err => console.error("Error al guardar carrito:", err));
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
                            <span className='item-value'>
                                {cart.reduce((sum, item) => sum + item.quantity, 0)} productos
                            </span>
                        </div>
                        
                        <div className='item'>
                            <span>Envio</span>
                            <span className='item-value green'>Gratis</span>
                        </div>

                        <div className='item'>
                            <span>Total</span>
                            <span className='item-value'>${calculateTotal()} COP</span>
                        </div>

                        <button className='action-button primary' onClick={() => navigate("/productos")}>
                            Seguir comprando
                        </button>

                        <button
                            className="action-button primary"
                            onClick={() => window.location.href = "https://v0-purchase-confirmation-page-ten.vercel.app/"}
                        >
                            Confirmar Compra
                        </button>

                        <button
                            className="action-button secondary"
                            onClick={guardarCarritoEnBD}
                        >
                            Guardar carrito en BD
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
