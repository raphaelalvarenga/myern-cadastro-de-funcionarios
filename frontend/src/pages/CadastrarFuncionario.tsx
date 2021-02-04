import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Titulo from "../global-components/Titulo";

const CadastrarFuncionario = () => {
    return (
        <>
            <Titulo descricao = "Cadastrar Funcionario" />
            <Paper>
                <Grid container>
                    <Grid item xs = {12}>
                        <Typography variant = "h5">Cadastrar Funcionário</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default CadastrarFuncionario;