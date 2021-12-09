import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import logo from './images/white-eagle-transparent.png'
import bg from './images/wp4288389-aesthetic-laptop-wallpapers.jpg'


import './Login.css'

class Login extends React.Component {  
  state = {
    username: '',
    password: '',
    redirect: null,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      username: this.state.username,
      password: this.state.password,
    };

    axios({
      url: '/api/login',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
      this.setState({ redirect: "/home" });
    })
    .catch((err) => {
      console.log('Internal server error', err);
    })
  };

  resetUserInputs = () => {
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {

    console.log('State: ', this.state);
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    return(
      <div className="split top1">
                    <img className="bg1" src={bg} alt="Background" title="BG"/>
                    <img className="logo" src={logo} alt="Eagle Icon" title="Icon"/>
      <div className="login1">
        <h1 className="desc11"><i>Login</i></h1>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          
          </div>
          
          <button className="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;