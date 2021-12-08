import React from 'react';
import logo from './images/white-eagle-transparent.png'
import bg from './images/wp4288362-aesthetic-laptop-wallpapers.jpg'

import './Homepage.css';

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.className}>{this.props.value}</button>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="home" {...this.props}>
                <div className="split top">
                    <img className="bg" src={bg} alt="Background" title="BG"/>
                    <img className="logo" src={logo} alt="Eagle Icon" title="Icon"/>
                    <h2 className="title">Raven</h2>
                </div>
                <div className='split bottom'>
                    <Button className="sign-up" value="Sign Up"/>
                    <Button classname="sign-in" value="Sign In"/>
                </div>
            </div>
        )
    }
}


export default Home
