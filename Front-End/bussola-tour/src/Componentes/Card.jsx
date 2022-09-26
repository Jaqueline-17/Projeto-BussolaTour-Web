import React from "react";
import styles from "../Estilos/Card.module.css"

function Card(props) {
    return (
        <>
            <div className="card border border-primary" id={styles.cardHover}>
                <img className="card-img-top" src={props.imagem} alt="Imagem de Destino" />
                <div className="card-body" id={styles.corpoCard}>
                    <h5 className="card-title">{props.pacote}</h5>
                    <p className={styles.tamanho_preco}><strong>{props.preco}</strong></p>
                    <button type="submit" className="btn btn-primary">Comprar</button>
                </div>
            </div>

        </>
    );
}

export default Card;