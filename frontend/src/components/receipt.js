import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withGoogleMap, GoogleMap } from 'react-google-maps';



class Receipt extends React.Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.920621, lng: -73.129118 } }
        defaultZoom = { 18 }
      >
      </GoogleMap>
    ));
    fetch(`http://localhost:8000/twilio-order-accepted`);
    return(
      <div>
        <h1 id="coffee-run-header" className="text-center">
          <a className="isDisabled"><i className="material-icons">keyboard_arrow_left</i>Order In Progress<i className="material-icons">keyboard_arrow_right</i></a>
        </h1>
        <div className="card cardOrder">
          <div className="card-header">
            Receipt
          </div>
          <div className="card-body">
            <h4 className="card-title">Medium Iced Coffee</h4>
            <h5>Customer Name: Chris Panican</h5>
            <h5>Go to this Store Location: <a href="https://goo.gl/maps/EnCitvW3wWGwjB7t5" target="_blank">Dunkin Donuts</a></h5>
            <GoogleMapExample
              containerElement={ <div style={{ height: `60vh`, width: '100%' }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
            <br/>
            <h5 className="card-title">Drop Location: Library</h5>
            <p className="card-text">Notes: No sugar</p>
            <hr/>
            <p>Total Price: $4.65</p>
            <Link to={{ pathname: '/receipt2' }}>
              <a href="#" className="btn btn-primary">Confirm Pickup</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Receipt;
