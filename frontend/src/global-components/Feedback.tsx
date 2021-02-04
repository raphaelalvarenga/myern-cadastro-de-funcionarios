import { Button, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import SnackbarProps from "../interfaces/snackbar-props.interface";

const Feedback = (props: SnackbarProps) => {
    
    return <Snackbar
        anchorOrigin = {{
            vertical: "top",
            horizontal: "right"
        }}
        open = {props.open}
        autoHideDuration = {6000}
        message = {props.message}
        onClose = {props.fecharSnackbar}
        action = {
            <React.Fragment>
                <Button color = "inherit" size = "small" onClick = {props.fecharSnackbar}>
                    <Close fontSize = "small" />
                </Button>
            </React.Fragment>
        }
    />
}

export default Feedback