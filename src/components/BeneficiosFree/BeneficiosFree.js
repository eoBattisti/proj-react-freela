import React from 'react';

import { BoxCard } from '../Box/style';

import Talk from '../../assets/talk.jpg';
import Email from '../../assets/Emails.jpg';
import Coins from '../../assets/coins.jpg';
import Portfolio from '../../assets/portifolio.jpg'


const BeneficiosFree = () => {
    return (
        <BoxCard>
            <div className="cards">
                <div className="card2">
                    <div className="card__image-holder">
                        <img className="card__image" src={Email} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h2  className="headline6">
                            Receba propostas</h2>
                        <div className="">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                    </div>
                </div>

                <div className="card2">
                    <div className="card__image-holder">
                        <img className="card__image" src={Coins} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h2  className="headline6 purple">
                            100% do valor é seu
                        </h2>
                        <div className="">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                    </div>
                </div>

                <div className="card2">
                    <div className="card__image-holder">
                        <img className="card__image" src={Talk} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h2  className="headline6 purple">
                            Negocie valores

                        </h2>
                    
                        <div className="">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                    </div>
                </div>

                <div className="card2">
                    <div className="card__image-holder">
                        <img className="card__image" src={Portfolio} alt="wave" />
                    </div>
                    <div className="card-title">
            
                        <h2  className="headline6 purple">
                            Mostre seu portifolio 
                        
                        </h2>
                        <div className="">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                    </div>
                </div>
            </div>
        </BoxCard>
    );
}

export default BeneficiosFree;