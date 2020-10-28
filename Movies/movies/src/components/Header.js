import React, { Component } from 'react';
import '../style/style.css';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="header padrao">
                <Link to="/">Filmaria</Link>
            </div>
        );
    }
}

export default Header;