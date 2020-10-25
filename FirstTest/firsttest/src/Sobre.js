import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sobre extends Component {
    render() {
        return (
            <div>
                <center><h2>Sobre</h2></center><br/>
                <Link to="/"> Ir para Home</Link>
            </div>
        );
    }
}

export default Sobre;