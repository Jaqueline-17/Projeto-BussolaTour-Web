import React from "react";
import Rodape from "../Layout/Footer";
import "../Home.css";




function Home() {
    return (

        <main className="background">
            <header className="container-fluid headerParalax">
                <h1 className="revelar">Bem Vindo a Agência de Viagens <strong id="marca">Bússola Tour</strong>!</h1>
                <p className="revelar">Estamos prontos para fazer sua viagem uma lembraça inesquecível. Confira nossos Destinos e Promoções.</p>
            </header>

            <section>
                <h2 className="titulos revelar">Descubra sua próxima viagem</h2>
            </section>

            <section>
                <p className="tamanho_texto controleTam revelar">Temos uma variedade de destinos e condições impredíveis para que você possa
                    viajar tranquilo.</p>
            </section>


            <section>
                <h2 className="titulos controleTam revelar">Cuidamos de tudo pra Você!</h2>
            </section>

            <section>
                <p className="tamanho_texto controleTam revelar">Confira os nossos pacotes especiais que <br />incluem hospedagem, passeios, guias
                    e transporte.</p>
            </section>

            <section>
                <h2 className="titulos controleTam revelar">Atendimento Personalizado</h2>
            </section>

            <section>
                <p className="tamanho_texto controleTam revelar">Para um Atendimento Personalizado, visite uma de nossas filiais e converse
                    com nossos corretores.
                </p>
            </section>

            <section>
                <h2 className="titulos controleTam revelar">Conheça o Mundo através da Bússola Tour!</h2>
            </section>
            <Rodape />
        </main>

    );
}

export default Home;