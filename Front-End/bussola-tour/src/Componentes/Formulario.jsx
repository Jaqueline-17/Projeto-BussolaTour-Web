import React from "react";
import { Link } from "react-router-dom";
import styles from '../Estilos/Formulario.module.css'


function Formulario() {


    return (
        <>

            <div className="container col-6 mt-5" id={styles.boxForm}>
                <header className="my-2 ml-3">
                    <h2>Viajou Conosco?</h2>
                    <h6>Nos conte como foi! Sua opinião é importante para tornar nosso serviço ainda melhor!</h6>
                </header>

                <form className="col-md-9" id={styles.formulario}>

                    <div className={styles.espacamento}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" id="nome" className="form-control" />
                        </div>
                    </div>

                    <div className={styles.espacamento}>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" id="email" className="form-control" />
                        </div>
                    </div>

                    <div className={styles.espacamento}>
                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea className="form-control" id="mensg"
                                placeholder="Nos conte sua experiência aqui.."></textarea>
                        </div>
                    </div>

                    <div className={styles.espacamento}>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mensagem">Enviar</button>
                    </div>
                </form>
            </div>

            <div class="modal fade" id="mensagem" tabindex="-1" aria-labelledby="mensagem" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="mensagem">Formulário enviado com Sucesso!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="ml-2">Obrigado por compartilhar sua experiência!</p>
                            <p class="ml-2">Sua opinião será levada para a nossa equipe para ser avaliada!</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><Link to="/" id={styles.botao}>Página Inicial</Link></button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Formulario;