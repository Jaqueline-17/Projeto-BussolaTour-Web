import React from "react";
import Titulo from "../Componentes/Titulo";
import Subtitulo from "../Componentes/Subtitulo";
import Card from "../Componentes/Card";
import Rodape from "../Layout/Footer";
import styles from "../Estilos/Card.module.css"



function Promocoes(props) {
    return (
        <div>
            <Titulo titulo="Promocoes" slogan="Viaje por um preço que cabe no seu bolso" />
            <Subtitulo nome="Pacotes Standart" />

            <div className={styles.divCards}>
                    <Card imagem="./imagens/ibizaimg.jpg" pacote="Standart Basic" preco="R$ 895,00" />
                    <Card imagem="./imagens/aracajuimg.jpg" pacote="Standart Basic II" preco="R$ 910,00" />
                    <Card imagem="./imagens/portoalegreimg.jpg" pacote="Standart Confort" preco="R$ 930,00" />
                    <Card imagem="./imagens/curitiba.jpg" pacote="Standart Confort Max" preco="R$ 950,00" />
            </div>

            <Subtitulo nome="Pacotes VIP"/>
            <div className={styles.divCards}>
                    <Card imagem="./imagens/el_salvadorimg.jpg" pacote="VIP I" preco="R$ 1.200,00" />
                    <Card imagem="./imagens/lisboaimg.jpg" pacote="VIP II" preco="R$ 1.400,00" />
                    <Card imagem="./imagens/rioimg.jpg" pacote="VIP III" preco="R$ 1.450,00" />
                    <Card imagem="./imagens/salvadorimg.jpg" pacote="VIP IV" preco="R$ 1.600,00" />
            </div>

            <Subtitulo nome="Pacotes Lux"/>
            <div className={styles.divCards}>
                    <Card imagem="./imagens/dublinimg.jpg" pacote="Lux I" preco="R$ 3.600,00" />
                    <Card imagem="./imagens/novayorkimg.jpg" pacote="Lux Confort" preco="R$ 4.000,00" />
                    <Card imagem="./imagens/orlandoimg.png" pacote="Lux Executive" preco="R$ 5.000,00" />
                    <Card imagem="./imagens/roma-img.jpg" pacote="Lux First Class" preco="R$ 10.000,00" />
            </div>

            <Rodape/>


        </div>
    );
}

export default Promocoes;