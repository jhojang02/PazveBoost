import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home () {
  return (
    <div className="product-grid">
      <main>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};


export default Home
