import React from "react";
import Titulo from "../Componentes/Titulo";
import MediaBox from "../Componentes/MediaBox";
import Subtitulo from "../Componentes/Subtitulo";
import Rodape from "../Layout/Footer";


function Destinos() {
    return (
        <div>
            <Titulo titulo="Destinos" slogan="Encontre sua próxima parada." />

            <Subtitulo nome="Nacionais" />

            <MediaBox imagem="./imagens/salvadorimg.jpg" cidade="Salvador"
                texto="Emoldurada pela baía de Todos os Santos e por praias de grande beleza natural, Salvador, patrimônio
                cultural da humanidade, preserva um conjunto arquitetônico que representa um pedaço vivo da história do Brasil, de que foi a
                primeira capital."/>

            <MediaBox imagem="./imagens/rioimg.jpg" cidade="Rio de Janeiro"
                texto="Acorde cedo para caminhar na Lagoa Rodrigo de Freitas ou no calçadão de Ipanema. Para driblar o calor, dê um 
            mergulho no Leblon e tome um chope num boteco, como o Jobi. O tempo é curto, 
            então escolha." />

            <MediaBox imagem="./imagens/curitiba.jpg" cidade="Curituba"
                texto="Curitiba é a cidade brasileira modelo em sustentabilidade. Eleita como “Cidade Verde”, 
            a capital paranaense é a única do Brasil a dividir o título com outros destinos internacionais! As áreas verdes por lá 
            fazem sucesso entre os moradores e visitantes com os parques e bosques." />

            <MediaBox imagem="./imagens/saopauloimg.jpg" cidade="São Paulo"
                texto="São Paulo é uma cidade muito procurada para o turismo de negócios, 
            mas isso não quer dizer que os visitantes não possam passar algum tempo turistando de. A capital paulista oferece 
            atrações extremamente diversificadas, muitas desconhecidas até pelos próprios moradores." />

            <MediaBox imagem="./imagens/portoalegreimg.jpg" cidade="Porto Alegre"
                texto="A cidade de Porto Alegre tem muito a oferecer em turismo e lazer, além dos pontos turísticos de 
            Porto Alegre, há também os passeios e tours. Você pode visitar as belas arenas da dupla Grenal, 
            passear de barco pelo Guaíba." />

            <MediaBox imagem="./imagens/aracajuimg.jpg" cidade="Aracaju"
                texto="Aracaju, terra dos cajueiros e dos papagaios, a primeira cidade planejada do Brasil, 
            uma das capitais mais promissoras da região nordeste. Prédios históricos, museus, Centro de Artesanato, 
            até mesmo o comércio local é detentor de particularidades somente encontradas na região" />

            <Subtitulo nome="Internacionais"/>

            <MediaBox imagem="./imagens/dublinimg.jpg" cidade="Dublin"
                texto="Fundada pelos vikings no início do século IX, a capital irlandesa foi o cenário de guerras
            e conflitos até chegar a definir sua própria identidade no século XX. Dublin é hoje uma capital moderna 
            e rica em história, capaz de cultivar os visitantes com a mistura das tradições gaélicas e uma constante adaptação ao mundo moderno." />

            <MediaBox imagem="./imagens/ibizaimg.jpg" cidade="Ibiza"
                texto="Ibiza, Espanha, é um dos destinos mais badalados e animados de toda a Europa, principalmente, 
            na alta temporada, quando a ilha fica ainda mais vibrante e cheia de gente bonita. Se está planejando uma, 
            viagem para esse arquipélago, que reúne paisagens naturais de tirar o fôlego, praias paradisíacas e muita festa, este artigo é o que procura." />

            <MediaBox imagem="./imagens/lisboaimg.jpg" cidade="Lisboa"
                texto="Lisboa é uma cidade linda, cheia de pontos turísticos históricos repletos de tradições, 
            além de locais fantásticos para apreciar a beleza arquitetônica da cidade, bem como as suas belezas 
            naturais, como a presença do rio Tejo ao longo da cidade, que já é um deslumbre para quem visita à capital portuguesa." />

            <MediaBox imagem="./imagens/novayorkimg.jpg" cidade="Nova York"
                texto="Há várias Nova York dentro da mesma cidade. Tem a Nova York do luxo em Uptown; a alternativa em East e West 
            Village; a fashion em Chelsea e Meatpacking District; a que aparece nos filmes em Midtown; o centro econômico do 
            mundo em Lower Manhattan; a gospel no Harlem; a descolada na Union Square, Flatiron District e Gramercy Park e a de ruas bucólicas no Brooklyn." />

            <MediaBox imagem="./imagens/orlandoimg.png" cidade="Orlando"
                texto="Orlando é conhecida como a capital mundial da diversão e seus principais atrativos são os parques temáticos, é claro. 
            São eles que dão vida ao lugar e fazem de Orlando esse sucesso todo. Há vários parques para conhecer e todos têm atrações variadas, 
            que agradam aos públicos infantil, jovem e adulto." />

            <MediaBox imagem="./imagens/roma-img.jpg" cidade="Roma"
                texto="Um parque de diversões para apreciadores da história e arquitetura. Um tesouro inesgotável para amantes da arte e cultura. 
            Uma metrópole eletrizante de trânsito caótico. Um agitadíssimo centro com tudo do melhor para boêmios, modernos, glutões e fashionistas. 
            Roma consegue ser tudo isso e muito mais." />

            <Rodape />
        </div>

    );
}

export default Destinos;

