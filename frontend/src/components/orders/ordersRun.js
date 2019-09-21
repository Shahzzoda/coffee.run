import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Faker from 'faker';


class OrdersRun extends React.Component {
  render() {
    return(
      <div>
        <div className="card cardOrder">
          <div className="card-header">
            Dunkin Donuts
          </div>
          <div className="card-body">
            <h4 className="card-title">Medium Iced Coffee</h4>
            <h5>Name: Chris Panican</h5>
            <h5 className="card-title">Dropoff: Library Room 220</h5>
            <p className="card-text">No sugar</p>
            <Link to={{ pathname: '/confirmation' }}>
              <a href="#" className="btn btn-primary">Accept Order</a>
            </Link>
          </div>
        </div>
        <div className="card cardOrder">
          <div className="card-header">
            Starbucks Coffee
          </div>
          <div className="card-body">
            <h4 className="card-title">Venti Pink Drink</h4>
            <h5>Name: {Faker.name.findName()}</h5>
            <h5 className="card-title">Dropoff: Chemistry Building 4/102</h5>
            <p className="card-text">N/A</p>
            <a href="#" className="btn btn-primary">Accept Order</a>
          </div>
        </div>
        <div className="card cardOrder">
          <div className="card-header">
            Starbucks Coffee
          </div>
          <div className="card-body">
            <h4 className="card-title">Double Shot Expresso</h4>
            <h5>Name: {Faker.name.findName()}</h5>
            <h5 className="card-title">Dropoff: Library (Meet Outside)</h5>
            <p className="card-text">N/A</p>
            <a href="#" className="btn btn-primary">Accept Order</a>
          </div>
        </div>
      </div>
    );
  }
}

export default OrdersRun;
