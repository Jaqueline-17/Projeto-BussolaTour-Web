import React from "react";
import styles from "../Estilos/Login.module.css"
import { Link } from "react-router-dom";


function Login() {
    return (
        <div id={styles.principal}>

            <div id={styles.logo}>
                <img src="../imagens/bussola_logo.png" width="55px" alt="Logo Bússola Tour" />
                <h5 id={styles.fonte}>Bússola Tour</h5>
            </div>

            <div className="container p-4" id={styles.boxLogin}>
                <header>
                    <h3>Login</h3>
                    <p>Seja Bem-vindo! Entre ou Cadastre-se.</p>
                </header>

                <form>
                    <div className="my-3">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="nome@email.com" />
                    </div>

                    <div className="my-3">
                        <label>Senha:</label>
                        <input type="password" className="form-control" placeholder="******" />
                    </div>
                </form>

                <div>
                    <p>Não tem cadastro? Cadastre-se, Fácil e Rápido.</p>
                    <p>Voltar para <Link to="/">Página Home</Link></p>
                    <input type="checkbox" />
                    <label className={styles.label}>Lembrar de mim</label>
                </div>

                <div class="d-flex justify-content-around mt-4">
                    <button type="submit" className="btn btn-primary col-4">Enviar</button>
                    <button type="submit" className="btn btn-primary col-5"><Link to="/cadastro" id={styles.botao}>Cadastre-se</Link></button>
                </div>
            </div>
        </div>

    );
}

export default Login;
