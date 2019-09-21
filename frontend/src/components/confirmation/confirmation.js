import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Faker from 'faker';


class Confirmation extends React.Component {
  render() {
    return(
      <div>
        <h1 id="coffee-run-header" className="text-center">
          <Link to={{ pathname: '/orders' }}>
            <a><i className="material-icons">keyboard_arrow_left</i>Cancel </a> 
          </Link>
          {/* <Link to={{ pathname: '/orders' }}> */}
            <a className="isDisabled">Confirmation<i className="material-icons">keyboard_arrow_right</i></a>
          {/* </Link> */}
        </h1>
        <div className="card cardOrder">
          <div className="card-header">
            Confirmation
          </div>
          <div className="card-body">
            <h4 className="card-title">Medium Iced Coffee</h4>
            <h5>Name: Chris Panican</h5>
            <h5>Store Location: <a href="https://goo.gl/maps/EnCitvW3wWGwjB7t5" target="_blank">Dunkin Donuts</a></h5>
            <h5 className="card-title">Drop Location: Library</h5>
            <p className="card-text">Notes: No sugar</p>
            <hr/>
            <p>Total Price: $4.65</p>
            <Link to={{ pathname: '/confirmation' }}>
              <a href="#" className="btn btn-primary">Accept Order</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
