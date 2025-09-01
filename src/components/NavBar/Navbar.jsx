import React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <Link to="/" className="header__link nav__link">Inicio</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/equipos" className="header__link nav__link">Catálogo de equipos</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/equipos/Samsung" className="header__link nav__link">Samsung</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/equipos/Motorola" className="header__link nav__link">Motorola</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/equipos/Apple" className="header__link nav__link">iPhone</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/equipos/ZTE" className="header__link nav__link">ZTE</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/equipos/Nubia" className="header__link nav__link">Nubia</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/equipos/Xiaomi" className="header__link nav__link">Xiaomi</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/contacto" className="header__link nav__link">Contacto</Link>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
