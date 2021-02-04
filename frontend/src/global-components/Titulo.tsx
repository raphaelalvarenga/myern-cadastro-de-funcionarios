import { Divider, Paper, Typography } from "@material-ui/core";
import React from "react";
import styles from "../styles";

const Titulo = (props: {descricao: string}) => {

    const classes = styles();

    return (
        <div className = {classes.divTitulos}>
            <Typography variant = "h5">{props.descricao}</Typography>
            <Divider />
        </div>
    )
}

export default Titulo;