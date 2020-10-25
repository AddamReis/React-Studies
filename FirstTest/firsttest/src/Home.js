import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <center><h2>Home</h2></center> <br/>
                <Link to="/sobre"> Ir para Sobre</Link>
            </div>
        );
    }
}

export default Home;