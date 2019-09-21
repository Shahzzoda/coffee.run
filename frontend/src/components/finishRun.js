import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';


class FinishRun extends React.Component {
  render() {
    return(
      <div>
        <Confetti/>
        <h1 id="coffee-run-header" className="text-center">
          <Link to={{ pathname: '/' }}>
            <a><i className="material-icons">keyboard_arrow_left</i>Home<i className="material-icons">keyboard_arrow_right</i></a> 
          </Link>
        </h1>
        <div className="card cardOrder">
          <div className="card-header">
            Order Complete
          </div>
          <div className="card-body">
            <h4 className="card-title">Medium Iced Coffee</h4>
            <h5>Customer Name: Chris Panican</h5>
            <h5>Store Name: Dunkin Donuts</h5>
            <h5 className="card-title">Drop off Location: Library</h5>
            <p className="card-text">Notes: No sugar</p>
            <hr/>
            <p>Total Price: $4.65</p>
            <h4>Credits Applied: 1000 Beans</h4>
            <hr/>
            <Link to={{ pathname: '/' }}>
              <a href="#" className="btn btn-primary">Complete Order</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishRun;
