import React from "react";
import MenuSuperior from "./global-components/MenuSuperior";
import MenuLateral from "./global-components/MenuLateral";
import Funcionarios from "./pages/Funcionarios";
import Cargos from "./pages/Cargos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Funcionario from "./pages/Funcionario";
import CadastrarFuncionario from "./pages/CadastrarFuncionario";

const styles = {
    conteudo: {
        marginTop: "100px"
    }
}

const App = () => {

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
            <div style = {styles.conteudo}>
                <Switch>
                    <Route path = "/funcionario/:id">
                        <Funcionario />
                    </Route>

                    <Route path = "/cadastrar-funcionario">
                        <CadastrarFuncionario />
                    </Route>

                    <Route path = "/cargos">
                        <Cargos />
                    </Route>

                    <Route path = "/">
                        <Funcionarios />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;