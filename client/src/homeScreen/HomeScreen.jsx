import "./homeScreen.css"
import useFetch from '../hooks/useFetch';

const HomeScreen = () => {
  const { products, loading, error } = useFetch('/products/fetchfeatured');

  return (
    <div>
      <header>
        <a href='/'>Chiemela Store</a>
      </header>
      <main>
        <h1> All Products</h1>{' '}
        <div className='products'>
          {products.map((product) => (
            <div className='product' key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
