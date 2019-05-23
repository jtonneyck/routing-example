import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./pages/About"
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Students from "./pages/Users"
import UserDetail from "./components/UserDetail"
function App() {
  return (
    <Router>
        <nav>
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Dashboard">Dashboard</Link>
           <Link to="/Contact">Contact</Link>
           <Link to="/Students">Students</Link>

        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/About/" component={About} />
        <Route path="/Dashboard/" component={Dashboard} />
        <Route path="/Contact/" component={Contact} />
        <Route path="/Students/" component={Students} />
        <Route path="/user-detail/" component={UserDetail} />

    </Router>

  );
}

export default App;
