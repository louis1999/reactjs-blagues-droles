import logo from './logo.svg';
import './App.css';
import HomePage from './components/Pages/HomePage';
import BlaguePage from './components/BlaguePage';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blague' element={<BlaguePage/>}/>
      </Routes>
        
    </Router>
  );
}

export default App;
