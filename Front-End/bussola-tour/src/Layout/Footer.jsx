import React from "react";
//mport { Link } from "react-router-dom"
import styles from "../Estilos/Footer.module.css"

function Rodape(){
    return(

    <>
    <hr className="mt-5"></hr>
    <footer className="container" id={styles.rodape}>  
        <div className="container col-4" id={styles.boxRedes}>
        <img src="./imagens/facebook_icon.png" className={styles.tamRedes} alt="ícone facebook"/>
            <img src="./imagens/Instagram_icon.png"  className={styles.tamRedes} alt="ícone instagram"/>
            <img src="./imagens/whatsapp_icon.png" className={styles.tamRedes} alt="ícone WhatsApp"/>
            <img src="./imagens/email_icon.png" className={styles.tamRedes} alt="ícone email"/>
            <img src="./imagens/telegram_icon.png" className={styles.tamRedes} alt="ícone telegram"/>
            <img src="./imagens/linkedin_icon.png" className={styles.tamRedes} alt="ícone linkedin"/>
        </div>

        <p>Proporcionado Viagens de Qualidade</p>
        <span>&copy;Bússola Tour</span>
    </footer>
    </>
    );
}

export default Rodape
