import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

function Contato(){
    return(
        <div className="contato" id="contato">
            <h1>Contato</h1>
            <h2>Sobre o desenvolvimento em React JS</h2>
            <Link smooth to="#home">Ir para Home</Link>
        </div>
    );
}

export default Contato;