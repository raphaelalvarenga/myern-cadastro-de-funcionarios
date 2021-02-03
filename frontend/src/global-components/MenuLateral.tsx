import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import { AcUnit } from "@material-ui/icons";

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
                    <ListItem button>
                        <ListItemIcon><AcUnit /></ListItemIcon>
                        <ListItemText primary = "Item 1" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon><AcUnit /></ListItemIcon>
                        <ListItemText primary = "Item 2" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon><AcUnit /></ListItemIcon>
                        <ListItemText primary = "Item 3" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}

export default MenuLateral;