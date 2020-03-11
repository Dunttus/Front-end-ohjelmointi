import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigator = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a class="navbar-brand" href="#">My React Page</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/about">About</Link>>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    </ul>                    
                </div>
                </nav>
        </div>
    );
}

export default Navigator;