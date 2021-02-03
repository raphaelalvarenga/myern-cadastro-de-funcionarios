import React from "react";
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Funcionario } from "../classes/funcionario.class";
import { ResponseInterface } from "../interfaces/response.interface";
import { Refresh } from "@material-ui/icons";
import { Service } from "../classes/services.class";

const useStyles = makeStyles({
    divAcoes: {
        display: "flex",
        justifyContent: "space-evenly"
    }
})

const Home: React.FunctionComponent = () => {
    const classes = useStyles();

    const [funcionarios, setFuncionarios] = React.useState<Funcionario[]>([]);

    React.useEffect(() => {
        getFuncionarios();
    }, []);

    const getFuncionarios = () => {

        setFuncionarios([]);
        
        const service = new Service();

        service
            .getFuncionarios()
            .then(response => {
                const funcionarios = (response.data as ResponseInterface).params.funcionarios as Array<Funcionario>;
                setFuncionarios(funcionarios);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <IconButton onClick = {getFuncionarios}>
                <Refresh />
            </IconButton>
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
                                                    <TableCell align = "center">R$ { funcionario.salario }</TableCell>
                                                    <TableCell align = "center">
                                                        <div className = {classes.divAcoes}>
                                                            <div><Button variant = "outlined">Editar</Button></div>
                                                            <div><Button color = "secondary">Excluir</Button></div>
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

export default Home;