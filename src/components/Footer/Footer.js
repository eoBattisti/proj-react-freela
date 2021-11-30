import React from 'react';
import Typography  from '@material-ui/core/Typography';
import Link  from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

import { Container } from './styles';

const Footer = () =>{
    return (
        <Container>
            <div className="boxFooter">

                <div className="socialMedia">
                    <Typography variant="h2"> Freela</Typography>
                    <div className="icons">
                        <FacebookIcon fontSize="large" />
                        <TwitterIcon fontSize="large" />
                        <InstagramIcon fontSize="large" />
                        <YoutubeIcon fontSize="large" />
                    </div>
                </div>

                <div className="subSections">
                    <div className="subSection">
                        <Typography variant="h6">Freela</Typography>
                        <Link underline="none" href="#" variant="body1"> Porque a Freela</Link>
                        <Link underline="none" href="#" variant="body1">Trabalhe conosco</Link>
                        <Link underline="none" href="#" variant="body1">Parcerias</Link>
                        <Link underline="none" href="#" variant="body1">Invesidores</Link>
                    </div>
                    <div className="subSection" Style="margin-left: 40px">
                        <Typography variant="h6">Atendimento</Typography>
                        <Link underline="none" href="#" variant="body1">Entre em contato</Link>
                        <Link underline="none" href="#" variant="body1">Central de ajuda</Link>
                        <Link underline="none" href="#" variant="body1">Já sou cadastrado</Link>
                        <Link underline="none" href="#" variant="body1">Seja nosso parceiro</Link>
                    </div>
                    <div className="subSection" Style="margin-left: 40px">
                        <Typography variant="h6">Institucional</Typography>
                        <Link underline="none" href="#" variant="body1">Segurança</Link>
                        <Link underline="none" href="#" variant="body1">Contrato</Link>
                        <Link underline="none" href="#" variant="body1">Demonstração Financeira</Link>
                        <Link underline="none" href="#" variant="body1">Portal de Privacidade</Link>
                        <Link underline="none" href="#" variant="body1">Aviso de Privacidade</Link>
                        <Link underline="none" href="#" variant="body1">Politica de Segurança</Link>
                        <Link underline="none" href="#" variant="body1">Politica de Cookies</Link>
                    </div>
                    <div className="downloads">
                        <Typography variant="h6">Downloads</Typography>
                        <AndroidIcon fontSize="large" />
                        <AppleIcon fontSize="large" />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Footer;