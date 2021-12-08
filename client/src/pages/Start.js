import React from 'react';
import { Link } from 'react-router-dom'


class Start extends React.Component {

  render() {
    return(
        <div className="start">
            <div>
            <Link to="/signup">Sign Up</Link>
            </div>
            <div>
            <Link to="/login">Login</Link>
            </div>
        </div>
    );
  }
}

export default Start;