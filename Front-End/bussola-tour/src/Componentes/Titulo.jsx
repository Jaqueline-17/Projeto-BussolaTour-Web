import React from "react";
import styles from '../Estilos/Titulo.module.css'

function Titulo(props) {
    return (
        <>
            <header className={styles.boxTitulo}>
                <div className="tituloRevelar">
                    <h2>{props.titulo}</h2>
                    <h6>{props.slogan}</h6>
                </div>
                <hr className={styles.corHr}/>
            </header>
        </>
    );
}

export default Titulo;