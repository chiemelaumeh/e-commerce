import './App.css';
import axios from 'axios';
import HomePage from './homePage/HomePage.jsx';
import ProductPage from './productPage/ProductPage.jsx';

axios.defaults.baseURL = 'http://localhost:8800/api';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to='/'>Chiemela Store </Link>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='product/:slug' element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
