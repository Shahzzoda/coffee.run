import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlaceOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price : 2.00,
            quantity : 1,
            total: 2.00,
        }
        this.getPrice = this.getPrice.bind(this);
 
    }

    getPrice(e){
        this.setState({ price: e.target.value });
        this.setState({ total: e.target.value * this.state.quantity })

    }

    getQuantity(e){
        this.setState({ quantity: e.target.value });
        this.setState({ total: e.target.value * this.state.price })
    }



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
                
                <span>Store 
                    <div class="dropdown">
                     <select>
                        <option value="Starbucks">Starbucks</option>
                        <option value="Seawolves Cafe">Seawolves Cafe</option>
                        <option value="Dunkin' Dounts">Dunkin' Dounts</option>
                    </select>
                    </div> 
                </span> 
                
                <span> QTY 
                    <div class="dropdown">
                    <select onChange ={(event) => this.getQuantity(event)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </div>
                </span>
                
                <span>Order 
                    <div class="dropdown">
                    <select onChange={(event) => this.getPrice(event) }>
                        <option value="2.00">Small Coffee - $2.00</option>
                        <option value="3.00">Medium Coffee - $3.00</option>
                        <option value="4.00">Large Coffee -$4.00</option>
                    </select>
                    </div> 
                </span>
                
                <h6>Order Details</h6>
                <textarea rows="4" cols="50"> </textarea>
                
                <h6>Location</h6>
                <span> 
                    <div class="dropdown">
                     <select>
                        <option value="Library">Frank Melville Jr. Memorial Library</option>
                        <option value="Physics">Physics</option>
                        <option value="Chem">Chemisty</option>
                        <option value="Mathematics">Mathematics Tower</option>
                        <option value="Other">Humanities</option>
                    </select>
                    </div> 
                </span> 

                <h6>Total</h6>
                <p>${(this.state.total+(this.state.total * 0.25)).toFixed(2)}</p>
        </div>
        );
    }
}

export default PlaceOrder;
