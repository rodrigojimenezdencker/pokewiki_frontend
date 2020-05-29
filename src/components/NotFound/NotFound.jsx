import React from 'react';
import './NotFound.css';
import pokeball from '../../Assets/img/pokeball.png';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <main id="not_found">
        <h1>4<img src={pokeball} alt="0" />4</h1>
        <h2><strong>¡Vaya!</strong></h2>
        <p>Parece que te has perdido en tu aventura...</p>
        <Link to="/">
            <button>&larr; Volver al inicio</button>
        </Link>
    </main>
)
