import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (

    <Router>
        <Route path="/about" component={Home} />
    </Router>

  );
}

export default App;
