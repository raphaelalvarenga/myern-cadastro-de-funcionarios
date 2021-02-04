import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { Add, Refresh } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Cargo from "../interfaces/cargo.interface";
import { Service } from "../classes/services.class";
import Titulo from "../global-components/Titulo";
import { ResponseInterface } from "../interfaces/response.interface";
import styles from "../styles";

const service = new Service();

const Cargos = () => {

    const classes = styles();

    // State
    const [cargos, setCargos] = React.useState<Cargo[]>([]);

    // Buscar todos os cargos ao abrir a página
    React.useEffect(() => {
        getCargos();
    }, []);

    // Buscar registros
    const getCargos = () => {
        setCargos([]);

        service
            .getCargos()
            .then(response => {
                const cargos = (response.data as ResponseInterface).params.cargos as Array<Cargo>;
                setCargos(cargos);
            })
            .catch(error => console.log(error));
    }

    // Este método é disparado quando o usuário clica no botão excluir registro
    const deleteCargo = (id: number) => {
        service
            .deleteCargo(id)
            .then(response => {
                const tempCargos = cargos.filter(cargo => cargo.id !== id);
                setCargos(tempCargos);
            })
    }

    return (
        <>
            <Titulo descricao = "Cargos" />
            <Grid container justify = "space-between">
                <Grid item>
                    <Link to = "/cadastrar-cargo" className = {classes.buttonLink}>
                        <Button
                            variant = "outlined"
                            color = "primary"
                            startIcon = {<Add />}
                        >Adicionar</Button>
                    </Link>
                </Grid>

                <Grid item>
                    <IconButton onClick = {getCargos} color = "secondary">
                        <Refresh />
                    </IconButton>
                </Grid>
            </Grid>

            
            {
                cargos.length > 0 ? (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align = "center">ID</TableCell>
                                    <TableCell align = "center">Descrição</TableCell>
                                    <TableCell align = "center">Ações</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    cargos.map(
                                        (cargo, index) => {
                                            return (
                                                <TableRow key = {index}>
                                                    <TableCell align = "center">{ cargo.id }</TableCell>
                                                    <TableCell align = "center">{ cargo.descricao }</TableCell>
                                                    <TableCell align = "center">
                                                        <div className = {classes.divAcoes}>
                                                            <div>
                                                                <Link to = {`/cargo/${cargo.id}`} className = {classes.buttonLink}>
                                                                    <Button variant = "outlined">Editar</Button>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Button
                                                                    color = "secondary"
                                                                    onClick = {() => deleteCargo(cargo.id as number)}
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
                ) : <Typography variant = "h5">Não há registro de cargos!</Typography>
            }
                        
        </>
    )
}

export default Cargos;