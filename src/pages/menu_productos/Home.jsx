import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import "./home.css"

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
