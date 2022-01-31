import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  
  useEffect(() => {
    localStorage.setItem('token', 'something');
  }, [])
  return (
    <Router>
      <Switch>
        <ProtectedRoute path='/protected' component={Login}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
