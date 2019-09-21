import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PlaceOrder2 extends React.Component {
  render() {
    fetch(`http://localhost:8000/twilio-placeorder`);
    return(
      <div>
        <h1 id="coffee-run-header" className="text-center">
          <a className="isDisabled"><i className="material-icons">keyboard_arrow_left</i>Thank You!<i className="material-icons">keyboard_arrow_right</i></a>
        </h1>
        <div className="card cardOrder">
          <div className="card-header">
            Receipt
          </div>
          <div className="card-body">
            <p>Your order is on the way! You will receive text notifications.</p>
            <h4 className="card-title">Medium Iced Coffee</h4>
            <h5>Location: <a href="https://goo.gl/maps/EnCitvW3wWGwjB7t5" target="_blank">Dunkin Donuts</a></h5>
            <h5 className="card-title">Drop Location: Library</h5>
            <p className="card-text">Notes: No sugar</p>
            <hr/>
            <p>Total Price: $4.65</p>
            <Link to={{ pathname: '/' }}>
              <a href="#" className="btn btn-primary">Home</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceOrder2;
