import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Style from './style';

import Saude from '../../assets/heartbeat.png';
import Tecnologia from '../../assets/data.png';
import Estetica from '../../assets/maquiagem.png';
import Restaurante from '../../assets/restaurant-menu.png';
import Reparos from '../../assets/tool-box.png';
import Aulas from '../../assets/tongues.png';
import Servicos from '../../assets/house.png';

const Carrosel = () => {
    return (
        <div>

        
        <div id="carouselWrapper">
            <Carousel 
            autoPlay={true} 
            interval={3000} 
            infiniteLoop={true}
            emulateTouch={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={window.innerWidth > 768 ? 35 : 75}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeable={true}
            >
                <Style>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src={Saude} />
                                <h3>Saúde</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p className="body1 purple">Você pode encontrar profissionais formados na área tanto para os cuidados do corpo quanto a mente</p>
                                <a className="body2" href="error.html">Leia mais</a>
                            </div>
                        </div>
                    </div>
                </Style>

                <Style>
                    <div className="card"> 
                        <div className="face face1">
                            <div className="content">
                                <img src={Tecnologia}/>
                                <h3>Tecnologia</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p className="body1 purple"> Você pode encontrar profissionais formados nas áreas de programação, design, marketing digital, editores 
                                    de aúdio e video, etc.
                                </p>
                                <a className="body2" href="error.html">Leia mais</a>
                            </div>
                        </div>
                    </div>
                </Style>
                
                <Style>
                    <div className="card"> 
                        <div className="face face1">
                            <div className="content">
                                <img src={Estetica}/>
                                <h3>Estética</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p className="body1 purple">Você encontra serviços de bronzeamento, depilação, manicures, maquiadoras, entre outros.</p>
                                <a className="body2" href="error.html">Leia mais</a>
                            </div>
                        </div>
                    </div>
                </Style>
                
                <Style> 
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src={Restaurante}/>
                                <h3>Restaurantes</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p className="body1 purple">Procurando por garçons, bartenders, cozinheiros, nesa categoria você pode encontra-los</p>
                                <a className="body2" href="error.html">Leia mais</a>
                            </div>
                        </div>
                    </div>
                </Style>

                <Style>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src={Reparos} />
                                <h3>Reparos</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p className="body1 purple">Você pode encontrar encanadores, eletricistas, pintores, chaveiros entre outros profissionais da área</p>
                                <a href="error.html">Leia mais</a>
                            </div>
                        </div>
                    </div>
                </Style>

                <Style>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src={Aulas} />
                                <h3>Aulas</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p className="body1 purple">Você pode encontrar profissionais no ensino de idiomas, professores particulares, 
                                    preparatório para concursos, entre outros</p>
                                <a className="body2" href="error.html">Leia mais</a>
                            </div>
                        </div>
                    </div>
                </Style>
   
                <Style>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src={Servicos} />
                                <h3>Serviços <br/>Domésticos</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p className="body1 purple">Aqui você encontra desde profissionais para cuidar da sua casa quanto de seu pet</p>
                                <a className="body2" href="error.html">Leia mais</a>
                            </div>
                        </div>
                    </div>
                </Style>
            
            </Carousel>
        </div>
            <div id="carouselWrapper2">
                <Carousel 
                autoPlay={true} 
                interval={3000} 
                infiniteLoop={true}
                emulateTouch={true}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={70}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeable={true}
                >
                    <Style>
                        <div className="cardWrapper">
                            <div className="card2">
                                <img src={Saude} />        
                            </div>
                            <h3>Saúde</h3>
                        </div>
                    </Style>
                    <Style>
                        <div className="cardWrapper">
                            <div className="card2">
                                <img src={Tecnologia}/>        
                            </div>
                            <h3>Tecnologia</h3>
                        </div>
                    </Style>
                    
                    <Style>
                        <div className="cardWrapper">
                            <div className="card2">
                                <img src={Estetica} />        
                            </div>
                            <h3>Estética</h3>
                        </div>
                    </Style>
                    <Style> 
                        <div className="cardWrapper">
                            <div className="card2">
                                <img src={Restaurante} />        
                            </div>
                            <h3>Restaurantes</h3>
                        </div>
                    </Style>

                    <Style>
                        <div className="cardWrapper">
                            <div className="card2">
                                <img src={Reparos} />        
                            </div>
                            <h3>Reparos</h3>
                        </div>
                    </Style>
                    <Style>
                        <div className="cardWrapper">
                            <div className="card2">
                                <img src={Aulas} />        
                            </div>
                            <h3>Aulas</h3>
                        </div>
                    </Style>
                    <Style>
                        <div className="cardWrapper">
                            <div className="card2">
                                <img src={Servicos} />
                            </div>
                            <h3>Serviços <br/>Domésticos</h3>
                        </div>
                    </Style>
                </Carousel>

            </div>
        </div>
    );
}

export default Carrosel;