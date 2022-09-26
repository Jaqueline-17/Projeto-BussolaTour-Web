import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages";
import Destinos from "./Pages/Destinos";
import Promocoes from "./Pages/Promocoes"
import Contato  from "./Pages/Contato";
import Login from "./Pages/Login"
import Menu from "./Layout/Menu";
import Cadastro from "./Pages/Cadastro";


const Rotas = () =>  {
    return(
        <Router>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </Router>
    );
}

export default Rotas;