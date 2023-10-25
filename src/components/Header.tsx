import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/users">
                        Usuarios
                    </Link>
                </li>
                <li>
                    <Link to="/Album">
                        Albumes
                    </Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
                <li>
                    <Link to="/test">Responsive</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;