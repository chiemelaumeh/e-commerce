import './App.css';
import axios from 'axios';
import HomePage from './homePage/HomePage.jsx';
import ProductPage from './productPage/ProductPage.jsx';

axios.defaults.baseURL = 'http://localhost:8800/api';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
