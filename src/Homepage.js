import React from 'react';
import logo from './images/white-eagle-transparent.png'
import bg from './images/wp4288362-aesthetic-laptop-wallpapers.jpg'

import './Homepage.css';

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.value}</button>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="Home" {...this.props}>
                <div className="Top">
                    <img id="bg" src={bg} alt="Background" title="BG"/>
                    <img id="logo" src={logo} alt="Eagle Icon" title="Icon"/>
                </div>
                <Button className="sign-up" value="Sign Up"/>
                <Button classname="sign-in" value="Sign In"/>
                <h1> test </h1>
            </div>
        )
    }
}


export default Home
