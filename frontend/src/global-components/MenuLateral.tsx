import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import { People, Work } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    divList: {
        width: 250
    }
})

const MenuLateral = (props: { isSidebarOpen: boolean, closeSidebar: () => void }) => {  

    const classes = useStyles();

    return (
        <Drawer anchor = "left" open = {props.isSidebarOpen} onClose = {props.closeSidebar}>
            <div className = {classes.divList}>
                <List>
                    <ListItem button component = {Link} to = "/" onClick = {props.closeSidebar}>
                        <ListItemIcon><People /></ListItemIcon>
                        <ListItemText primary = "Funcionarios" />
                    </ListItem>

                    <ListItem button component = {Link} to = "/cargos" onClick = {props.closeSidebar}>
                        <ListItemIcon><Work /></ListItemIcon>
                        <ListItemText primary = "Cargos" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}

export default MenuLateral;