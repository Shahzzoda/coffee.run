import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import OrdersRun from './ordersRun';


class Orders extends React.Component {
  render() {
    return(
      <div>
        <h1 id="coffee-run-header" className="text-center">
          {/* <Link to={{ pathname: '/placeorder' }}> */}
            <a className="isDisabled"><i className="material-icons">keyboard_arrow_left</i>Coffee </a> 
          {/* </Link> */}
          <Link to={{ pathname: '/orders' }}>
            <a>Run<i className="material-icons">keyboard_arrow_right</i></a>
          </Link>
        </h1>
        <OrdersRun/>
      </div>
    );
  }
}

export default Orders;
