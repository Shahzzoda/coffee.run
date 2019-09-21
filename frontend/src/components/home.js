import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1 id="coffee-run-header" className="text-center">
          <Link to={{ pathname: '/placeorder' }}>
            <i className="material-icons">keyboard_arrow_left</i><a>Coffee </a> 
          </Link>
          <Link to={{ pathname: '/orders' }}>
            <a>Run</a><i className="material-icons">keyboard_arrow_right</i>
          </Link>
        </h1>
        <div id="logo">
          <embed src="https://www.genetichealing.in/wp-content/uploads/2018/04/coffee-running.gif" alt="Running Coffee gif" />
        </div>
      </div>
    );
  }
}

export default Home;
