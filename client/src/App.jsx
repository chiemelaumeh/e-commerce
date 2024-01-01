import './App.css';
import axios from 'axios';
import HomePage from './homePage/HomePage.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import ProductPage from './productPage/ProductPage.jsx';

axios.defaults.baseURL = 'http://localhost:8800/api';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='d-flex flex-column page-container'>
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container className='nav-container'>
              <Link to='/'>
                <Navbar.Brand>Chiemela Store</Navbar.Brand>
              </Link>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='product/:slug' element={<ProductPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All Rights Reserved</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
