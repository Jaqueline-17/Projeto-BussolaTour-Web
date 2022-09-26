import React from "react";
import Titulo from "../Componentes/Titulo";
import Subtitulo from "../Componentes/Subtitulo";
import Tabela from "../Componentes/Tabela";
import Formulario from "../Componentes/Formulario";
import Rodape from "../Layout/Footer";

function Contato(){
    return(
        <div className="background">
        <Titulo titulo="Contato" slogan="Venha nos Conhecer!"/>
        <Subtitulo nome="Nossas Lojas"/>
        <Tabela/>
        <Formulario/>
        <Rodape/>   
        
        </div>
    );
}

export default Contato;