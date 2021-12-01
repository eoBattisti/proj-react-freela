import React from 'react';
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import logo from "../../assets/logo2.png";
import { Container } from "./styles"




const Header = () => {

  return (
    <Container>
        <Link href="/react-freela"><img  alt="Logo da Empresa" src={logo}/></Link>
        <nav>
            <ul>
                <li>
                  <Link  rel="noreferrer" href="/#Empreendedores"  variant="h6" underline="none">Como Funciona?</Link>
                </li>
                <li>
                  <Link variant="h6"  component="button" underline="none">Sobre a Freela</Link>
                </li>
                <li>
                  <Link variant="h6" component="button" underline="none">Atendimento</Link>
                </li>
            </ul>
        </nav>
        <nav id="btns">
            <ul>
                <li><Button variant="outlined">Login</Button></li>
                <li><Button variant="contained">Registre-se</Button></li>
            </ul>
        </nav>
    </Container> 
  );
};
export default Header;