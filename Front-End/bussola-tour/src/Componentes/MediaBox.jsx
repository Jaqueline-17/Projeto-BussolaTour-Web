import React from "react";
import styles from "../Estilos/MediaBox.module.css"

function MediaBox(props) {
  return (
    <>
      <div className="media container container-fluid border-primary" id={styles.boxDestinos}>
        <img className="rounded" src={props.imagem} width="200px" alt="" />
        <div className="media-body" id={styles.corpoMedia}>
          <h5>{props.cidade}</h5>
          <p>{props.texto}</p>
        </div>
      </div>
    </>
  );
}

export default MediaBox;