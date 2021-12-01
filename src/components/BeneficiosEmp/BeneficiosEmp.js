import React from 'react';

import { BoxCard }from '../Box/style'

import Price from '../../assets/price.jpg';
import Calendar from '../../assets/calendar.jpg';
import Requisitos from '../../assets/requisitos.jpg';
import Feedback from '../../assets/addfriends.jpg';


const BeneficiosEmp = () => {
    return(
        <BoxCard>
            <div className="card2">
                        <div className="card__image-holder">
                            <img className="card__image" src={Price} alt="wave" />
                        </div>
                        <div className="card-title">
                            <h2 className="headline6 purple">
                                Defina o preço do serviço
                            
                            </h2>
                            <div className="">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="card__image-holder">
                            <img className="card__image" src={Calendar} alt="wave" />
                        </div>
                        <div className="card-title">
                            
                            <h2 className="headline6 purple">
                                Estipule o tempo
                                
                            </h2>
                        
                            <div className="">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="card__image-holder">
                            <img className="card__image" src={Requisitos} alt="wave" />
                        </div>
                        <div className="card-title">
                            <h2  className="headline6 purple">
                                Defina Requisitos
                            </h2>
                            <div className="">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="card__image-holder">
                            <img className="card__image" src={Feedback} alt="wave" />
                        </div>
                        <div className="card-title">
                            <h2  className="headline6 purple">
                                Dê feedbacks
                            </h2>
                            <div className="">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                            </div>
                        </div>
                    </div>
        </BoxCard>
    );
}

export default BeneficiosEmp;