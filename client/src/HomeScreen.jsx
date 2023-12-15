import useFetch from '../src/hooks/useFetch';

const HomeScreen = () => {
  const { products, loading, error } = useFetch('/products/fetchfeatured');

  console.log(products);

  return (
    <div>
      <header>
        <a href='/'>Chiemela Store</a>
      </header>
      <main>
        <h1> All Products</h1>

        {products.map((product) => (
          <div>
            <p>{product.title}</p>
            <img src={product.image} alt='' />
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomeScreen;
