import React from "react";
import Typography from "@material-ui/core/Typography";

import { Box, BoxMedium, BoxMediumReversed } from '../Box/style';

import rocket from '../../assets/rocket.png';
import rocket2 from '../../assets/rocket2.jpg';
import empreendedores from '../../assets/empreendedores.png';
import freelancer from '../../assets/freelancer.png';
import missao from '../../assets/missao.png';
import polvo from '../../assets/polvo.jpg';
import jornada from '../../assets/jornada.png';


const  Body = () => {
    return (
        <>
            <Box> {/* Parte Inicial */}
                <img  alt="Foquete decolando" src={rocket}/>
                {/* <a href="https://br.freepik.com/vetores/espaco">Espaço vetor criado por stories - br.freepik.com</a> */}
                <div>   
                    <Typography variant="h3">A Freela, é a solução em suas mãos!</Typography>
                    <Typography mt={20} variant="subtitle1" > Através do nosso aplicativo você encontra profissionais freelancers, dispostos a solucionar 
                        seu problema, na palma da sua mão ou no seu computador, você escolhe
                    </Typography>
                </div> 
            </Box>
            <BoxMedium> {/* Para os EMPREENDEDORES */}
                <img alt="Empreendedores" src={empreendedores} />
                <div>   
                    <Typography variant="h3">Para você empreendedor</Typography>
                    <Typography mt={20} variant="subtitle1" > 
                        Utilizando nosso aplicativo você conseguirá procurar e encontrar os melhores profissionais o
                        mais perto de você. 
                    </Typography>
                </div> 
            </BoxMedium>

            <BoxMediumReversed> {/* Para os FREELANCERS */}
                <img alt="Empreendedores" src={freelancer} />
                <div>   
                    <Typography variant="h3">Para você Freelancer</Typography>
                    <Typography mt={20} variant="subtitle1" > 
                        Aqui você encontrar as mais diferenciadas oportunidades de trabalho
                    </Typography>
                </div> 
            </BoxMediumReversed>

            <BoxMedium> {/* Sobre a Freela */}
                <img alt="Empreendedores" src={polvo} />
                <div>   
                    <Typography variant="h3">A Freela</Typography>
                    <Typography mt={20} variant="subtitle1" > 
                        A Freela começou na idéa de amigos, acreditamos que as oportunidades de trabalho existem, e
                        temos como nosso objetivo conectar profissionais e empreendedores através da nossa plataforma
                    </Typography>
                </div> 
            </BoxMedium>
            <BoxMedium> {/* Missão */}
                <img alt="Empreendedores" src={missao} />
                <div>   
                    <Typography variant="h3">Qual a nossa MISSÃO?</Typography>
                    <Typography mt={20} variant="subtitle1" > 
                        Oferecer a sociedade uma plataforma totalmente segura e confiável para aumentar,
                        desenvolver e facilitar a relação entre pessoas e empresas conectando-os
                    </Typography>
                </div> 
            </BoxMedium>
            <BoxMedium> {/* Visão */}
                <img alt="Empreendedores" src={jornada} />
                <div>   
                    <Typography variant="h3">A nossa VISÃO</Typography>
                    <Typography mt={20} variant="subtitle1" > 
                        Possuir uma plataforma de confiança e transparência para impulsionar o mercado de
                            trabalho
                    </Typography>
                </div> 
            </BoxMedium>
            <BoxMedium> {/* Visão */}
                <img alt="Empreendedores" src={rocket2} />
                <div>   
                    <Typography variant="h3">A Os nossos VALORES</Typography>
                    <Typography mt={20} variant="subtitle1" > 
                        A Freela tem como base fundamental intrínseca o foco no cliente tanto com os empreendedores como freelancers, 
                        proporcionando uma experiência e suporte fora da curva. Contribuir, ajudar e facilitar a comunicação entre 
                        os trabalhadores e as empresas solucionando o ruído que há entre as vagas de emprego e o acesso a elas.
                    </Typography>
                </div> 
            </BoxMedium>
        </>
    );
};

export default Body;