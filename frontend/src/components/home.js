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
          <Link to={{ pathname: '/login' }}>
            <a>Login</a>
          </Link>
          <Link to={{ pathname: '/register' }}>
            <a>Register</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
