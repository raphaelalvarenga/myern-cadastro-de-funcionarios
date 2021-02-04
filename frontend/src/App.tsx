import React from "react";
import MenuSuperior from "./global-components/MenuSuperior";
import MenuLateral from "./global-components/MenuLateral";
import Funcionarios from "./pages/Funcionarios";
import Cargos from "./pages/Cargos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastrarFuncionario from "./pages/CadastrarFuncionario";
import CadastrarCargo from "./pages/CadastrarCargo";
import styles from "./styles";

const App = () => {

    const classes = styles();

    // Esta state controla o abre/fecha do menu lateral
    const [ isSidebarOpen, setIsSidebarOpen ] = React.useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    
    return (
        <BrowserRouter>
            <MenuSuperior openSidebar = {openSidebar} />
            <MenuLateral isSidebarOpen = {isSidebarOpen} closeSidebar = {closeSidebar} />
            <div className = {classes.conteudo}>
                <Switch>
                    <Route path = "/funcionario/:id" component = {CadastrarFuncionario} />

                    <Route path = "/cadastrar-funcionario" component = {CadastrarFuncionario} />

                    <Route path = "/cargos">
                        <Cargos />
                    </Route>

                    <Route path = "/cadastrar-cargo" component = {CadastrarCargo} />

                    <Route path = "/cargo/:id" component = {CadastrarCargo} />

                    <Route path = "/">
                        <Funcionarios />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;