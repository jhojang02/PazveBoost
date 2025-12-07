import ProductCard from "../../../components/ProductosCard";
import { products } from "../../../data/products";
import "./Home_product.css"

function Home () {
  return (
    <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};


export default Home
