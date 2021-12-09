import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import profpic from './images/profile.png'

import './Home.css';

var data;

class Home extends React.Component {  
  state = {
    username: '',
    body: '',
    redirect: null,
    tweets: []
  };

  componentDidMount = () => {
    this.getTweet();
  };

  getTweet = () => {
    axios.get('/api/home')
    .then((response) => {
      data = response.data;
      this.setState({ username: data.username, tweets: data.tweets });
      // console.log(this.state.tweets);
      console.log('User logged in');
    })
    .catch(() => {
      this.setState({ redirect: "/" });
      // alert('Error retrieving data!!!');
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();
    this.state.tweets.push(this.state.body)
    const payload = {
      username: this.state.username,
      tweets: this.state.tweets
    };
    // console.log(payload)

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
      this.getTweet();
    })
    .catch(() => {
      console.log('Internal server error');
    });;
  };

  logOut = (event) => {
    event.preventDefault();
    const payload = {
      username: this.state.username,
    };
    // console.log(payload)

    axios({
      url: '/api/logout',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
      this.setState({ redirect: "/" });
    })
    .catch(() => {
      console.log('Internal server error');
    });;
  };

  resetUserInputs = () => {
    this.setState({
      body: ''
    });
  };

  deleteTweet = (event) => {
    event.preventDefault();
    let { id } = event.target;

    console.log(this.state.tweets)

    var tweets_array = this.state.tweets;
    tweets_array.splice(id, 1);

    this.setState({
      tweets: tweets_array
    })

    const payload = {
      username: this.state.username,
      tweet_id: id,
      tweets_array: this.state.tweets
    };

    axios({
      url: '/api/delete',
      method: 'PUT',
      data: payload
    })
    .then((response) => {
      data = response.body;
      console.log(data)
      console.log('Data has been sent to the server');
      this.resetUserInputs();
      this.setState({tweets: data });
    })
    .catch(() => {
      console.log('Server error while deleting tweets');
    });
  };


  displayTweets = (tweets) => {

    if (!tweets.length) return null;
    // console.log(this.state.username);
    return tweets.map((tweet, index) => (
      <div key={index} className="tweet-display">
        <div className="username"><h1>{this.state.username}</h1></div>
        <p className="tweet-content">{tweet}</p>
        <button className='delete-tweet' id={index} onClick={this.deleteTweet}>Delete Tweet</button>
      </div>
    ))
  };

  render() {

    console.log('State: ', this.state);

    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    return(
      <div className="home">
        <div className="nav">
        
        <h1 className="myheader1">Welcome to Raven</h1>
        <button className="logout" onClick={this.logOut}>Logout</button>
        <div className="combined">
        <img className="profpic" src={profpic} alt="Profile" title="Icon"/>
        <div className="loguser"><h1>{this.state.username}</h1></div>
        </div></div>
        {/* <button className="logout" onClick={this.logOut}>Logout</button> */}

        <form className="form-inp" onSubmit={this.submit}>
          
          <div className="form-input">
            <textarea
              className="tweet-input"
              placeholder="Enter Tweet"
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            >
              
            </textarea>
          </div>

          {/* <img className="profpic" src={profpic} alt="Profile" title="Icon"/> */}

          <button>Submit</button>
        </form>

        <div className="tweet-end">
          {this.displayTweets(this.state.tweets)}
        </div>
      </div>
    );
  }
}

export default Home;