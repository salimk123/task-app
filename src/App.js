import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import User from "./components/User";
import Task from "./components/Task";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import Login from './components/Login'
// import Protected from './components/Protected'
// import Logout from './components/Logout'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar className="header-nav">
          <Navbar.Brand href="">LOGO</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home"><Link to="/" className="nav-item">Home</Link></Nav.Link>
            <Nav.Link href="#task"><Link to="/task" className="nav-item">Tasks</Link></Nav.Link>
            <Nav.Link href="#user"><Link to="/user" className="nav-item">User</Link></Nav.Link>
            {/* {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#link"><Link to="/logout"> Logout </Link></Nav.Link>
                                    :
                                    <Nav.Link href="#link"><Link to="/login"> Login </Link></Nav.Link>
                            } */}
          </Nav>
        </Navbar>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login"
          render={props => (
            <Login {...props} />
          )}
        >
        </Route> */}
        {/* <Protected exact path="/task" component={Task} />
        <Protected exact path="/user" component={User} />
        <Protected exact path="/" component={Home} /> */}
      </Router>
    </React.Fragment>
  )
}

export default App;
