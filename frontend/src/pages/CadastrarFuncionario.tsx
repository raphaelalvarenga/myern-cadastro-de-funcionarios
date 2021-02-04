import React from "react";
import { Button, Divider, Grid, List, ListItem, ListItemText, MenuItem, Paper, Select, SnackbarProps, TextField, Typography } from "@material-ui/core";
import Titulo from "../global-components/Titulo";
import MatchParams from "../interfaces/match-params.interface";
import { RouteComponentProps } from "react-router-dom";
import styles from "../styles";
import { Service } from "../classes/services.class";
import Funcionario from "../interfaces/funcionario.interface";
import Feedback from "../global-components/Feedback";
import { ResponseInterface } from "../interfaces/response.interface";
import Cargo from "../interfaces/cargo.interface";

interface Props extends RouteComponentProps<MatchParams> {}

const service = new Service();

const CadastrarFuncionario = (props: Props) => {

    const classes = styles();

    const [funcionario, setFuncionario] = React.useState<Funcionario>({
        id: null,
        nome: "",
        sobrenome: "",
        dataNascimento: "",
        CargoId: 0,
        salario: 0,
        createdAt: null,
        updatedAt: null
    });
    const [snackbarProps, setSnackbarProps] = React.useState<SnackbarProps>({open: false, message: ""});
    const [cadastrosRecentes, setCadastrosRecentes] = React.useState<string[]>([]);
    const [acao] = React.useState(props.match.params.id ? "editar" : "cadastrar");
    const [cargos, setCargos] = React.useState<Cargo[]>([]);

    React.useEffect(() => {
        if (acao === "editar") {
            getFuncionario();
        }

        getCargos();
    }, []);

    const getCargos = () => {
        service
            .getCargos()
            .then(response => {
                const tempCargos = (response.data as ResponseInterface).params.cargos;
                setCargos(tempCargos);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const getFuncionario = () => {
        const id = parseInt(props.match.params.id);
        service
            .getFuncionarioById(id)
            .then(response => {
                console.log(response);
                const funcionario = (response.data as ResponseInterface).params.funcionario as Funcionario;

                setFuncionario(funcionario);
            })
            .catch(error => console.log(error))
    }

    const adicionarFuncionario = () => {
        if (false) {
            setSnackbarProps({open: true, message: "Preencha o campo!"});
        } else {
            service
                .postFuncionario(funcionario)
                .then(response => {
                    const { success, message } = (response.data as ResponseInterface);
                    setSnackbarProps({open: true, message})

                    if (success) {
                        const { nome, sobrenome } = funcionario;
                        setCadastrosRecentes([...cadastrosRecentes, `${nome} ${sobrenome}`]);
                        setFuncionario({...funcionario, nome: "", sobrenome: "", dataNascimento: "", CargoId: 0, salario: 0})
                    }
                })
                .catch(error => {
                    setSnackbarProps({open: true, message: "Ocorreu um erro. Tente novamente..."});
                });
        }
    }

    const editarFuncionario = () => {
        if (false) {
            setSnackbarProps({open: true, message: "Preencha o campo!"});
        } else {
            service
                .putFuncionario(funcionario)
                .then(response => {
                    const { success, message } = (response.data as ResponseInterface);
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
            <Titulo descricao = "Cadastrar Funcionario" />
            <Paper className = {classes.paper}>
                <Grid container>
                    <Grid item sm = {12} md = {6} lg = {4}>
                        <TextField
                            required
                            label = "Nome"
                            value = {funcionario.nome}
                            onChange = {(e) => setFuncionario({...funcionario, nome: e.target.value})}
                            className = {classes.inputText}
                        />
                    </Grid>
                    <Grid item sm = {12} md = {6} lg = {4}>
                        <TextField
                            required
                            label = "Sobrenome"
                            value = {funcionario.sobrenome}
                            onChange = {(e) => setFuncionario({...funcionario, sobrenome: e.target.value})}
                            className = {classes.inputText}
                        />
                    </Grid>

                    <Grid item sm = {12} md = {6} lg = {4}>
                        <TextField
                            required
                            label = "Data de Nascimento"
                            value = {funcionario.dataNascimento ? new Date(funcionario.dataNascimento).toLocaleDateString() : ""}
                            onChange = {(e) => setFuncionario({...funcionario, dataNascimento: e.target.value})}
                            className = {classes.inputText}
                        />
                    </Grid>

                    <Grid item sm = {12} md = {6} lg = {4}>
                        <Select
                            value = {funcionario.CargoId === 0 ? "" : funcionario.CargoId}
                            onChange = {(e) => setFuncionario({...funcionario, CargoId: parseInt(e.target.value as string)})}
                            className = {classes.inputText}
                            label = "Cargo"
                        >
                            {
                                cargos.map((cargo, index) => <MenuItem key = {index} value = {cargo.id}>{cargo.descricao}</MenuItem>)
                            }
                        </Select>
                    </Grid>

                    <Grid item sm = {12} md = {6} lg = {4}>
                        <TextField
                            required
                            label = "Salário"
                            value = {funcionario.salario === 0 ? "" : funcionario.salario}
                            onChange = {(e) => setFuncionario({...funcionario, salario: parseInt(e.target.value)})}
                            className = {classes.inputText}
                            type = "number"
                        />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item>
                        <Button
                            variant = "contained"
                            color = "primary"
                            onClick = {acao === "editar" ? editarFuncionario : adicionarFuncionario}
                            style = {{ marginRight: "10px" }}
                        >{acao === "editar" ? "Editar" : "Salvar"}</Button>
                    </Grid>

                    <Grid item>
                        <Button
                            variant = "contained"
                            color = "secondary"
                            onClick = {() => setFuncionario({...funcionario, nome: "" })}>Limpar</Button>
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

export default CadastrarFuncionario;