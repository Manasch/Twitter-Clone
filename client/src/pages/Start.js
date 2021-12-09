import React from 'react';
import { Link } from 'react-router-dom'
import logo from './images/white-eagle-transparent.png'
import bg from './images/wp4288362-aesthetic-laptop-wallpapers.jpg'

  import './Start.css'

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.className}>{this.props.value}</button>
        )
    }
}
// class Start extends React.Component {

//   render() {
//     return(
//         <div className="start">
//             <div>
//             <Link to="/signup">Sign Up</Link>
//             </div>
//             <div>
//             <Link to="/login">Login</Link>
//             </div>
//         </div>
//     );
//   }
// }

// export default Start;

class Start extends React.Component {
    render() {
        return (
            <div className="start" {...this.props}>
                <div className="split top">
                    <img className="bg" src={bg} alt="Background" title="BG"/>
                    <img className="logo" src={logo} alt="Eagle Icon" title="Icon"/>
                    <h1 className="title">Raven</h1>
                    <h1 className="desc1"><i>A community for the connected</i></h1>
                    <h2 className="desc2"><i>Join now!</i></h2>


    
                </div>
                <div className="split bottom">
                <div className="signup">
             <Link to="/signup">Sign Up</Link>
             </div>
             <div className="login">
             <Link to="/login">Login</Link>
             </div>
</div>
                
            </div>
        )
    }
}


export default Start;