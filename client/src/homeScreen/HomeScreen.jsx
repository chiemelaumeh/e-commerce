import './homeScreen.css';
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
              <a href={`/products/${product._id}`}>
                <img src={product.image} alt={product.title} />
              </a>
              <div className='product-info'>
                <a href={`/products/${product._id}`}>
                  <p>{product.title}</p>
                </a>

                <p>
                  {' '}
                  <strong>$ {product.price}</strong>{' '}
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
