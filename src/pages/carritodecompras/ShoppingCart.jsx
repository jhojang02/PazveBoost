import './ShoppingCart.css'

const ShoppingCart = () => {
    const productPrice = "$300.000 COP";
    const shippingCost = "Gratis";
    const totalCost = "$300.000 COP";

    return (
        <div className='container'>
            <div className='header-shopping-cart-container'>
                <div className='container-icon'>
                <span className='header-arrow'>←</span>
                <span className='icon-shopping-cart'>🛒</span>
                <span className='text-header'>Carrito de Compras</span>
                </div>
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
    )
}

export default ShoppingCart