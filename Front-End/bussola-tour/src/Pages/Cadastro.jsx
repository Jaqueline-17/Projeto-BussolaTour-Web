import React from "react";
import styles from "../Estilos/Cadastro.module.css"
import Titulo from "../Componentes/Titulo"
import Rodape from "../Layout/Footer";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Cadastro() {
    
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [data_nasc, setNasc] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/cliente", {
            nome: nome,
            dataNasc: data_nasc,
            sexo: sexo,
            cpf: cpf,
            telefone: telefone,
            email: email,
            senha: senha,

        }).then((result) => {
            alert("Cadastro Efetuado com Sucesso!");
            navigate("/")
        }).catch((erro) => {
            console.log(erro);
        })
    }

    return (
        <>
            <div>
                <Titulo titulo="Cadastro" />
                <form className={styles.boxFormulario}>
                    <div className={styles.boxLinha}>
                        <div className={styles.boxLabel}>
                            <label>Nome Completo:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}/>
                        </div>
                    </div>

                    <div className={styles.boxLinha}>
                        <div class={styles.boxLabel}>
                            <label>Data de Nascimento</label>
                            <input 
                                type="date" 
                                className="form-control"
                                value={data_nasc}
                                onChange={(e) => setNasc(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.boxLinha}>
                        <div className={styles.boxLabel}>
                            <label>Sexo</label>
                            <select className="form-control" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                                <option className="selected">Selecione...</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                                <option>Outro</option>
                                <option>Não desejo Informar</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.boxLinha}>
                        <div className={styles.boxLabel}>
                            <label>CPF</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="000000000-00"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)} />
                        </div>

                    </div>

                    <div className={styles.boxLinha}>
                        <div className={styles.boxLabel}>
                            <label>Telefone</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="(00) 00000-0000"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.boxLinha}>
                        <div className={styles.boxLabel}>
                            <label>Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="nome@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.boxLinha}>
                        <div className={styles.boxLabel}>
                            <label>Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="******" />
                        </div>
                    </div>

                    <div className={styles.boxLinha}>
                        <div className={styles.boxLabel}>
                            <label>Confirmar Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="******" 
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}/>
                        </div>
                    </div>
                </form>

                <div className={styles.boxButton}>
                    <button type="submit" className="btn btn-outline-primary col-3" onClick={salvar}>Criar</button>
                </div>
            </div>
            <Rodape/>

        </>
    );
}

export default Cadastro;