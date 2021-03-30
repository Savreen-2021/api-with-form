
import React from 'react';
import './App.css'
import Nav from './Nav'
import Homepage from './Homepage';
import About from './About';
import Form from './Form';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Logo</h1>

     <Nav/>
     
     <Route path="/about" component={About} />
     <Route path = "/homepage" component={Homepage} />
     <Route path = "/Form" component = {Form} />
    </div>
    </Router>
  );
}

export default App;