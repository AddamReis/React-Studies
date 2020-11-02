import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;