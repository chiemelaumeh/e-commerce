import './App.css'
import axios from "axios"
import HomeScreen from './HomeScreen';

axios.defaults.baseURL = "http://localhost:8800/api";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
       <Route path ="/" element={<HomeScreen/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
