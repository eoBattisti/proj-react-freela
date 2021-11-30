import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Container from './styles';
import Motivos from "./Motivos";


const Contratacao  = () => {
    return (
        <Container>
                <div className="contracaoWrapper1">
                    <Typography variant="h4">Trabalhe conosco</Typography>
                    <Motivos/>
                    <Button variant="contained">Confira nossas vagas</Button>
                </div>
                <div className="contratacaoWrapper2">
                    <Typography variant="h6">Trabalhe conosco</Typography>
                    <Motivos/>
                    <Button variant="contained">Confira nossas vagas</Button>
                </div>
        </Container>
    );
}

export default Contratacao;