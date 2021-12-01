import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { BoxMedium } from '../Box/style';
import { Container, ContainedBox , OutlinedBox } from './style';

const Contato = () => {
    return(
        <Container>
            <BoxMedium>
                <OutlinedBox>
                    <Typography variant="h4">Já sou cliente</Typography>
                    <Typography variant="body1">Dúvidas, problemas ou solicitações em geral</Typography>

                    <Typography variant="h4">0000-0000</Typography>
                    <Typography variant="body1">Capitais e regiões metropolitanas</Typography>

                    <Typography variant="h4">0800 000 0000</Typography>
                    <Typography variant="body1">Demais regiões</Typography>   

                    <Button variant="outlined"><i class="fa fa-comment"></i> Inicie um chat</Button>
                    <Button variant="contained"><i class="fa fa-whatsapp"></i> Envie um WhatsApp</Button>

                    <Typography variant="body1">Se ainda preferir, nos envie um e-mail para:</Typography>
                    <Typography variant="body2">ajuda@freela.com.br</Typography>
                </OutlinedBox>
                <ContainedBox>
                    <Typography variant="h4">Quero ser parceiro</Typography>
                    <Typography variant="body1">Dúvidas, problemas ou solicitações em geral</Typography>

                    <Typography variant="h4">0000-0000</Typography>
                    <Typography variant="body1">Capitais e regiões metropolitanas</Typography>

                    <Typography variant="h4">0800 000 0000</Typography>
                    <Typography variant="body1">Demais regiões</Typography>   

                    <Button variant="outlined"><i class="fa fa-comment"></i> Inicie um chat</Button>
                    <Button variant="contained"><i class="fa fa-whatsapp"></i> Envie um WhatsApp</Button>

                    <Typography variant="body1">Se ainda preferir, nos envie um e-mail para:</Typography>
                    <Typography variant="body2">ajuda@freela.com.br</Typography>
                </ContainedBox>
            </BoxMedium>
        </Container>
        
    );
}

export default Contato;