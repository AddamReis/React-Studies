import React from 'react';
import Inicio from './SPA/Inicio';
import Contato from './SPA/Contato';
import Sobre from './SPA/Sobre';
import './SPA/style.css';

function Home() {
    return (
        <div>
            <Inicio />
            <Sobre />
            <Contato />
        </div>
    );
}

export default Home;