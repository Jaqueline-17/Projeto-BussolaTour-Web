import React from "react";

function Tabela() {
    return (
        <>
           <table className="table table-striped table-hover tabelaRevelar">
                <thead>
                    <tr>
                        <th scope="col">Cidade</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Nº de Contato</th>
                        <th scope="col">Gerente Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>São Paulo (Matriz)</td>
                        <td>Rua São Carlos, nº 150, Ed Paulista, Sala 60, Zona Leste</td>
                        <td>(11) 3334-2451</td>
                        <td>Carlos Andrade</td>
                    </tr>

                    <tr>
                        <td>Salvador</td>
                        <td>Rua 11 de Maio, nº 30, Comércio</td>
                        <td>(71) 3506-2824</td>
                        <td>Adriana Santos</td>
                    </tr>

                    <tr>
                        <td>Rio de Janeiro</td>
                        <td>Rua Limoeiro, nº 320, Ed Primavera, Sala 150, Zona Sul</td>
                        <td>(21) 3648-1324</td>
                        <td>Roberta Marinho</td>
                    </tr>

                    <tr>
                        <td>Aracaju</td>
                        <td>Rua de Baixo, nº 67, Areal</td>
                        <td>(79) 3134-2159</td>
                        <td>Jhonatas Silva</td>
                    </tr>

                    <tr>
                        <td>Curitiba</td>
                        <td>Rua Cinzal, nº 80, Centro</td>
                        <td>(41) 3316-2121</td>
                        <td>Cássio Freitas</td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default Tabela;