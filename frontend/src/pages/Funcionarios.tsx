import React from "react";
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import Funcionario from "../interfaces/funcionario.interface";
import { ResponseInterface } from "../interfaces/response.interface";
import { Add, Refresh } from "@material-ui/icons";
import { Service } from "../classes/services.class";
import { Link } from "react-router-dom";
import styles from "../styles";
import Titulo from "../global-components/Titulo";

const service = new Service();

const Funcionarios: React.FunctionComponent = () => {
    const classes = styles();

    const [funcionarios, setFuncionarios] = React.useState<Funcionario[]>([]);

    React.useEffect(() => {
        getFuncionarios();
    }, []);

    const getFuncionarios = () => {

        setFuncionarios([]);
        
        service
            .getFuncionarios()
            .then(response => {
                const funcionarios = (response.data as ResponseInterface).params.funcionarios as Array<Funcionario>;
                setFuncionarios(funcionarios);
            })
            .catch(error => console.log(error));
    }

    const deleteFuncionario = (id: number) => {
        service
            .deleteFuncionario(id)
            .then(response => {
                const tempFuncionarios = funcionarios.filter(funcionario => funcionario.id !== id);

                setFuncionarios(tempFuncionarios);
            })
    }

    return (
        <>
            <Titulo descricao = "Funcionários" />
            <Grid container justify = "space-between">
                <Grid item>
                    <Link to = "/cadastrar-funcionario" className = {classes.buttonLink}>
                        <Button
                            variant = "outlined"
                            color = "primary"
                            startIcon = {<Add />}
                        >Adicionar</Button>
                    </Link>
                </Grid>

                <Grid item>
                    <IconButton onClick = {getFuncionarios} color = "secondary">
                        <Refresh />
                    </IconButton>
                </Grid>
            </Grid>
            {
                funcionarios.length > 0 ? (
                    <TableContainer component = {Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align = "center">ID</TableCell>
                                    <TableCell align = "center">Nome</TableCell>
                                    <TableCell align = "center">Sobrenome</TableCell>
                                    <TableCell align = "center">Data de Nascimento</TableCell>
                                    <TableCell align = "center">Cargo</TableCell>
                                    <TableCell align = "center">Salário</TableCell>
                                    <TableCell align = "center">Ações</TableCell>
                                </TableRow>
                            </TableHead>
            
                            <TableBody>
                                {
                                    funcionarios.map(
                                        (funcionario, index) => {
                                            return (
                                                <TableRow key = {index}>
                                                    <TableCell align = "center">{ funcionario.id }</TableCell>
                                                    <TableCell align = "center">{ funcionario.nome }</TableCell>
                                                    <TableCell align = "center">{ funcionario.sobrenome }</TableCell>
                                                    <TableCell align = "center">{ new Date(funcionario.dataNascimento).toLocaleDateString() }</TableCell>
                                                    <TableCell align = "center">{ funcionario.cargo }</TableCell>
                                                    <TableCell align = "center">R$ { funcionario.salario }</TableCell>
                                                    <TableCell align = "center">
                                                        <div className = {classes.divAcoes}>
                                                            <div>
                                                                <Link to = {`/funcionario/${funcionario.id}`} className = {classes.buttonLink}>
                                                                    <Button variant = "outlined">Editar</Button>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Button
                                                                    color = "secondary"
                                                                    onClick = {() => deleteFuncionario(funcionario.id as number)}
                                                                >Excluir</Button>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : <Typography variant = "h5">Não há registro de funcionarios!</Typography>
            }
        </>
    )
}

export default Funcionarios;