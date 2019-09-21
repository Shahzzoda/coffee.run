import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import PlaceOrder from './components/placeorder';
import Profile from './components/profile';
import Orders from './components/orders/orders';
import Confirmation from './components/confirmation/confirmation';
import Receipt from './components/receipt';
import Receipt2 from './components/receipt2';
import FinishRun from './components/finishRun';
import PlaceOrder2 from './components/placeorder2';

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
                  <Route path='/confirmation' component={Confirmation}/>
                  <Route path='/receipt' component={Receipt}/>
                  <Route path='/receipt2' component={Receipt2}/>
                  <Route path='/finishRun' component={FinishRun}/>
                  <Route path='/placeOrder2' component={PlaceOrder2}/>
                </Switch>
            </main>
        )
    }
}

export default Routes;
