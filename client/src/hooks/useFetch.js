import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData()
  }, []);

  return { products, error, loading }
};
export default useFetch;
