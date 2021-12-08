import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Start from './pages/Start'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


class App extends React.Component {

  render() {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;