import React from "react";
import MenuSuperior from "./global-components/MenuSuperior";
import MenuLateral from "./global-components/MenuLateral";
import Home from "./pages/Funcionarios";
import Cargos from "./pages/Cargos";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
                    <Route path = "/cargos" component = {Cargos} />
                    <Route path = "/" component = {Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;