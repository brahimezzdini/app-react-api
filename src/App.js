import './App.css';
import React from 'react';
import Users from './components/users/Users';
import UserItem from './components/users/UserItem';
import Navbar from './components/partials/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

class App extends React.Component  {
  render(){
    
    
  return ( //lentree d'application
  <Router>
    <div className="App">
     <Navbar />
     <div className="container">
     <Switch>
       <Route exact path="/users" component={Users} />
       <Route exact path="/users/:login" component={UserItem} />
       <Route exact component={Users} />
     </Switch>
     </div>
    </div>
    </Router>
  );

  }
}

export default App;
