import React from "react";
import MenuSuperior from "./global-components/MenuSuperior";
import MenuLateral from "./global-components/MenuLateral";
import Home from "./pages/Home";

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
        <div>
            <MenuSuperior openSidebar = {openSidebar} />
            <MenuLateral isSidebarOpen = {isSidebarOpen} closeSidebar = {closeSidebar} />
            <div style = {styles.conteudo}>
                <Home />
            </div>
        </div>
    );
}

export default App;