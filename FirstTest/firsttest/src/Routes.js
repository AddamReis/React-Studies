import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Erro from './Erro';
import Usuario from './Usuario';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" component={Sobre} />
                <Route path="/usuario/:name" component={Usuario} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;