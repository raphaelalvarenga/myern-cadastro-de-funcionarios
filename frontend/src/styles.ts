import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
    conteudo: {
        marginTop: "100px",
        maxWidth: "1200px",
        margin: "auto"
    },

    paper: {
        padding: "20px",
        marginBottom: "20px"
    },

    divTitulos: {
        marginBottom: "30px"
    },

    divAcoes: {
        display: "flex",
        justifyContent: "space-evenly"
    },
    
    buttonLink: {
        textDecoration: "none"
    },

    inputText: {
        minWidth: "300px",
        marginBottom: "20px"
    }
});

export default styles;