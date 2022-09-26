import React from "react";
import { Link } from 'react-router-dom';
import styles from "../Estilos/Menu.module.css"


function Menu() {
    return (
        <nav className="navbar navbar-light bg-primary navbar-expand-lg" id={styles.menuShadow}>
            <Link to="/" className="navbar-brand ml-3" id={styles.botao1}>
                <img src="./imagens/bussola_logo.png" width="25px" alt="logo" />
                Bússola Tour
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu"
                aria-expanded="false" aria-label="navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/destinos" className="nav-link">Destinos</Link></li>
                    <li className="nav-item"><Link to="/promocoes"className="nav-link">Promoções</Link></li>
                    <li className="nav-item"><Link to="/contato"className="nav-link">Contato</Link></li>
                    <li className="nav-item active"><Link to="/login"className="nav-link">Entre ou Cadastre-se</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;