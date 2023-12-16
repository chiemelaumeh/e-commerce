import './homePage.css';
import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
  const productReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: false };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: false,
        };
      case 'FETCH_FAILED':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [{ loading, error, products }, dispatch] = useReducer(productReducer, {
    products: [],
    loading: false,
    error: false,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const response = await axios.get('/products/fetchfeatured/');

        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: error.message });
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <main>
        <h1> All Products</h1>{' '}
        <div className='products'>
          {products.map((product) => (
            <div className='product' key={product._id}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <div className='product-info'>
                <Link to={`/products/${product.slug}`}>
                  <p>{product.title}</p>
                </Link>

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

export default HomePage;
