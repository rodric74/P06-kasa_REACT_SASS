import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Property from './pages/Property';
import Error from './pages/Error';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/property/:id" component={Property} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
