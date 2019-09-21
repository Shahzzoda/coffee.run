import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import PlaceOrder from './components/placeorder';
import Profile from './components/profile';
import Orders from './components/orders';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/placeorder' component={PlaceOrder}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/orders' component={Orders}/>
                </Switch>
            </main>
        )
    }
}

export default Routes;
