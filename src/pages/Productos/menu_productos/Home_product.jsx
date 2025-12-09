import ProductCard from "../../../components/ProductosCard";
import { productspage } from "../../../data/productspage";
import "./Home_product.css"

function Home () {
  return (
    <div className="product-grid">
        {productspage.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};


export default Home
