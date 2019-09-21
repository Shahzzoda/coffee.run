import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Receipt2 extends React.Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.915430, lng: -73.122144 } }
        defaultZoom = { 18 }
      >
      </GoogleMap>
    ));
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
            <h5>Dunkin Donuts</h5>
            <h5 className="card-title">Go to this drop off Location: Library</h5>
            <GoogleMapExample
              containerElement={ <div style={{ height: `60vh`, width: '100%' }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
            <p className="card-text">Notes: No sugar</p>
            <hr/>
            <p>Total Price: $4.65</p>
            <Link to={{ pathname: '/finishRun' }}>
              <a href="#" className="btn btn-primary">Finish Dropoff</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Receipt2;
