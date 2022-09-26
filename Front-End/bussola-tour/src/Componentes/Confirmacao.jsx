import React from "react";

function Confirmacao(){
    return(
        <div class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">Formulário enviado com Sucesso!</h3>
                        </div>

                        <div class="modal-body">
                            <p class="ml-2">Obrigado por compartilhar sua experiência!</p>
                            <p class="ml-2">Sua opinião será levada para a nossa equipe para ser avaliada!</p>
                        </div>

                        <div class="modal-footer">
                            <a href="../index.html" class="btn btn-primary" role="button" aria-pressed="true">Página
                                Inicial</a>
                            <a href="./Contato.html" class="btn btn-primary" role="button" aria-pressed="true">Continuar
                                na Página</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Confirmacao;