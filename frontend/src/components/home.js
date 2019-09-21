import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <div id="logo">
          <embed src="https://www.genetichealing.in/wp-content/uploads/2018/04/coffee-running.gif" alt="Running Coffee gif" />
          <div id="login" className="button-group">
            <Link to={{ pathname: '/login' }}>
              <button>Login</button>
            </Link>
            <Link to={{ pathname: '/register' }}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
