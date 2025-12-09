import ProductosCard from "../../../components/ProductosCard";
import { products } from "../../../data/productsServices";
import '../indexServicios.css';

function Home () {
  return (
    <div className="product-grid">
        {products.map((product) => (
          <ProductosCard key={product.id} product={product} />
        ))}
    </div>
  );
};


export default Home
