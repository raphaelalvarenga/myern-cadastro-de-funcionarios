import React from "react";
import { Button, Divider, Grid, List, ListItem, ListItemText, Paper, SnackbarProps, TextField, Typography } from "@material-ui/core";
import { Service } from "../classes/services.class";
import Feedback from "../global-components/Feedback";
import { ResponseInterface } from "../interfaces/response.interface";
import styles from "../styles";
import Titulo from "../global-components/Titulo";
import Cargo from "../interfaces/cargo.interface";
import { RouteComponentProps } from "react-router-dom";
import MatchParams from "../interfaces/match-params.interface";

interface Props extends RouteComponentProps<MatchParams> {}

const service = new Service();

const CadastrarCargo = (props: Props) => {

    const classes = styles();
    
    const [cargo, setCargo] = React.useState<Cargo>({id: 0, descricao: "", createdAt: null, updatedAt: null});
    const [cadastrosRecentes, setCadastrosRecentes] = React.useState<string[]>([]);
    const [snackbarProps, setSnackbarProps] = React.useState<SnackbarProps>({open: false, message: ""});
    const [acao] = React.useState(props.match.params.id ? "editar" : "cadastrar");

    React.useEffect(() => {
        if (acao === "editar") {
            getCargo();
        }
    }, []);
    
    const getCargo = () => {
        const id = parseInt(props.match.params.id);
        service
            .getCargoById(id)
            .then(response => {
                const cargo = (response.data as ResponseInterface).params.cargos as Cargo;

                setCargo(cargo);
            })
            .catch(error => console.log(error))

    }

    const adicionarCargo = () => {
        if (cargo.descricao === "") {
            setSnackbarProps({open: true, message: "Preencha o campo!"});
        } else {
            service
                .postCargo(cargo)
                .then(response => {
                    const { success, message } = (response.data as ResponseInterface);
                    setSnackbarProps({open: true, message})

                    if (success) {
                        setCadastrosRecentes([...cadastrosRecentes, cargo.descricao]);
                        setCargo({...cargo, descricao: ""});
                    }
                })
                .catch(error => {
                    setSnackbarProps({open: true, message: "Ocorreu um erro. Tente novamente..."});
                });
        }
    }

    const editarCargo = () => {
        if (cargo.descricao === "") {
            setSnackbarProps({open: true, message: "Preencha o campo!"});
        } else {
            service
                .putCargo(cargo)
                .then(response => {
                    const { message } = (response.data as ResponseInterface);
                    setSnackbarProps({open: true, message})
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
                            value = {cargo.descricao}
                            onChange = {(e) => setCargo({...cargo, descricao: e.target.value})}
                            className = {classes.inputText}
                        />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item>
                        <Button
                            variant = "contained"
                            color = "primary"
                            onClick = {acao === "editar" ? editarCargo : adicionarCargo}
                            style = {{ marginRight: "10px" }}
                        >{acao === "editar" ? "Editar" : "Salvar"}</Button>
                    </Grid>

                    <Grid item>
                        <Button
                            variant = "contained"
                            color = "secondary"
                            onClick = {() => setCargo({...cargo, descricao:""})}>Limpar</Button>
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