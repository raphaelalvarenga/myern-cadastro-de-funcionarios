import React from "react";
import { Button, Divider, Grid, List, ListItem, ListItemText, Paper, SnackbarProps, TextField, Typography } from "@material-ui/core";
import { Service } from "../classes/services.class";
import Feedback from "../global-components/Feedback";
import { ResponseInterface } from "../interfaces/response.interface";
import styles from "../styles";
import Titulo from "../global-components/Titulo";

const service = new Service();

const CadastrarCargo = () => {

    const classes = styles();
    
    const [cargo, setCargo] = React.useState<string>("");
    const [cadastrosRecentes, setCadastrosRecentes] = React.useState<string[]>([]);
    const [snackbarProps, setSnackbarProps] = React.useState<SnackbarProps>({open: false, message: ""})

    const adicionarCargo = () => {
        if (cargo === "") {

        } else {
            service
                .postCargo(cargo)
                .then(response => {
                    const { success, message } = (response.data as ResponseInterface);
                    setSnackbarProps({open: true, message})

                    if (success) {
                        setCadastrosRecentes([...cadastrosRecentes, cargo]);
                        setCargo("");
                    }
                })
                .catch(error => {
                    setSnackbarProps({open: true, message: "Ocorreu um erro. Tente novamente..."});
                });
        }
    }
    
    return (
        <>
            <Feedback
                open = {snackbarProps.open}
                message = {snackbarProps.message}
                fecharSnackbar = {() => setSnackbarProps({open: false, message: ""})}
            />
            <Titulo descricao = "Cadastrar Cargo" />
            <Paper className = {classes.paper}>
                <Grid container>
                    <Grid item xs = {12}>
                        <TextField
                            required
                            label = "Descrição"
                            value = {cargo}
                            onChange = {(e) => setCargo(e.target.value)}
                            className = {classes.inputText}
                        />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item>
                        <Button
                            variant = "contained"
                            color = "primary"
                            onClick = {adicionarCargo}
                            style = {{ marginRight: "10px" }}
                        >Salvar</Button>
                    </Grid>

                    <Grid item>
                        <Button variant = "contained" color = "secondary" onClick = {() => setCargo("")}>Limpar</Button>
                    </Grid>
                </Grid>
            </Paper>

            {
                cadastrosRecentes.length > 0
                &&
                (
                    <Paper className = {classes.paper}>
                        <Typography variant = "h5">Recentemente adicionados</Typography>
                        <Divider />
                        <List>
                            {
                                cadastrosRecentes.map((cadastro, index) => (
                                    <ListItem key = {index}>
                                        <ListItemText primary = { cadastro } />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Paper>
                )
            }
            
        </>
    )
}

export default CadastrarCargo;