import React from "react";
import styles from "../Estilos/Subtitulo.module.css"

function Subtitulo(props){
    return(
        <h2 className={styles.subtitulo} id="tituloRevelar">{props.nome}</h2>
    );
}

export default Subtitulo;