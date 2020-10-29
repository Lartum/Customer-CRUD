import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './component/PrivateRoute'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import NewOrderForm from './component/NewOrderForm'

function App() {
  return (
    <div>
    <Router >
      <Route exact path='/' component={ Home }/>
      <PrivateRoute exact path='/neworder' component={ NewOrderForm } />
      <PrivateRoute exact path='/dashboard' component={ Dashboard } />
    </Router>
    </div>
  );
}

export default App;
