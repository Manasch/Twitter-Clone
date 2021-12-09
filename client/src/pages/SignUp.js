import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import logo from './images/white-eagle-transparent.png'
import bg from './images/wp4288389-aesthetic-laptop-wallpapers.jpg'

import './SignUp.css'

class SignUp extends React.Component {  
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    dob: '',
    redirect: null,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      dob: this.state.dob,
    };

    axios({
      url: '/api/signup',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
      this.setState({ redirect: "/home" });
    })
    .catch(() => {
      console.log('Internal server error');
    })
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      username: '',
      email: '',
      password: '',
      dob: ''
    });
  };

  render() {

    console.log('State: ', this.state);
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    return(
      <div className="split top2">
                    <img className="bg2" src={bg} alt="Background" title="BG"/>
                    <img className="logo" src={logo} alt="Eagle Icon" title="Icon"/>
      <div className="signup1">
        <h2 className="desc21"><i>Sign Up</i></h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
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
              type="email"
              name="email"
              placeholder="Enter Email ID"
              value={this.state.email}
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
          <div className="form-input">
            <input 
              type="date"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </div>

          <button>Submit</button>
        </form>

      </div>
      </div>
    );
  }
}

export default SignUp;