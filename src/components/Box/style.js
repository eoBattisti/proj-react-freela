import styled from 'styled-components';

export const Box = styled.div `
    position: relative;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 16px;
    color: #8b1c83;

    img {
        width: 50%;
        height: 50%;
    }

    h3 {
        margin-top: 16px;
        text-align: center;
    }

    h6 {
        text-align: justify;
        margin-top: 16px;
    }

    @media screen and (max-width:769px){
        img {
            width: 55%;
        }

        h3 {
            font-size: 40px;
        }
    }

    @media screen and (max-width:426px){
        img {
            display: none;
        }
        h3 {
            text-align: center;
        }
    }

    @media screen and (max-width:376px){
        img {
            display: none;
        }
        h3 {
            text-align: center;
            font-size: 40px;
        }
    }

    @media screen and (max-width:320px){
        img {
            display: none;
        }

        h3 {
            text-align: center;
            font-size: 40px;
        }

    }
`;

export const BoxMedium = styled.div `
    position: relative;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 16px;
    color: #8b1c83;

    img {
        width: 40%;
        height: 40%;
    }

    h3 {
        margin-top: 16px;
        text-align: center;
    }

    h6 {
        text-align: justify;
        margin-top: 16px;
    }
    div {
        padding: 0 16px;
    }

    @media screen and (max-width:769px){
        width: 80%;
        justify-content: center;
        img {
            width: 55%;
        }

        h3 {
            font-size: 40px;
        }
    }

    @media screen and (max-width:426px){
        width: 80%;
        justify-content: center;
        flex-direction: column;
        img {
            display: none;
        }
        h3 {
            text-align: center;
        }
    }

    @media screen and (max-width:376px){
        width: 80%;
        justify-content: center;
        flex-direction: column;
        img {
            display: none;
        }
        h3 {
            text-align: center;
            font-size: 40px;
        }
    }

    @media screen and (max-width:320px){
        width: 80%;
        flex-direction: column;
        justify-content: center;
        img {
            display: none;
        }

        h3 {
            text-align: center;
            font-size: 40px;
        }

    }
`;

export const BoxMediumReversed = styled.div `
    position: relative;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 16px;
    color: #8b1c83;

    img {
        width: 50%;
        height: 50%;
    }

    h3 {
        margin-top: 16px;
        text-align: center;
    }

    h6 {
        text-align: justify;
        margin-top: 16px;
    }

    @media screen and (max-width:769px){
        width: 80%;
        img {
            width: 55%;
        }

        h3 {
            font-size: 40px;
        }
    }

    @media screen and (max-width:426px){
        width: 80%;
        img {
            display: none;
        }
        h3 {
            text-align: center;
        }
    }

    @media screen and (max-width:376px){
        width: 80%;
        img {
            display: none;
        }
        h3 {
            text-align: center;
            font-size: 40px;
        }
    }

    @media screen and (max-width:320px){
        width: 80%;

        img {
            display: none;
        }

        h3 {
            text-align: center;
            font-size: 40px;
        }

    }

`;

export const BoxCard = styled.div`
    width:50%; 
    display: flex; 
    flex-wrap: wrap; 
    align-content: stretch; 
    justify-content: center;
    margin: 0 auto;


    a.btn {
        background: rgba(171, 42, 145, 0.5);
        backdrop-filter: blur(10px);
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        color: #ffffff;
        display: inline-block;
        padding: 6px 30px 8px;
        position: relative;
        text-decoration: none;
        transition: all 0.1s 0s ease-out;
      }
    .no-touch a.btn:hover {
        background: #701077;
        box-shadow: 0px 8px 2px 0 rgba(0,0,0,0.075);
        transform: translateY(-2px);
        transition: all 0.25s 0s ease-out;
      }
    .no-touch a.btn:active,
      a.btn:active {
        background: #ab2a91;
        box-shadow: 0 1px 0px 0 rgba(255,255,255,0.25);
        transform: translate3d(0,1px,0);
        transition: all 0.025s 0s ease-out;
      }

    div.cards {
        margin: 80px auto;
        max-width: 90%;
        text-align: center;
    }

    div.card2 {
        background: #ffffff;
        display: inline-block;
        margin: 8px;
        max-width: 300px;
        perspective: 1000;
        position: relative;
        text-align: left;
        transition: all 0.3s 0s ease-in;
        width: 300px;
        z-index: 1;
        box-shadow: -4px 5px 9px 0px #4845493b;
    }

    div.card2 img {
        max-width: 300px;
    }
    div.card2 .card__image-holder {
        height: 0;
        padding-bottom: 100%;
    }
    div.card2 div.card-title {
        background: #ffffff;
        padding: 6px 15px 10px;
        position: relative;
        z-index: 0;
    }
    div.card2 div.card-title a.toggle-info {
        border-radius: 32px;
        height: 32px;
        padding: 0;
        position: absolute;
        right: 15px;
        top: 10px;
        width: 32px;
    }
    div.card2 div.card-title a.toggle-info span {
        background: #ffffff;
        display: block;
        height: 2px;
        position: absolute;
        top: 16px;
        transition: all 0.15s 0s ease-out;
        width: 12px;
    }
    div.card2 div.card-title a.toggle-info span.left {
        right: 14px;
        transform: rotate(45deg);
    }
    div.card2 div.card-title a.toggle-info span.right {
        left: 14px;
        transform: rotate(-45deg);
    }
    
    div.card2 div.card-title h2 small {
        display: block;
    }
    div.card2 div.card-description {
        padding: 0 15px 10px;
        position: relative;
        box-shadow: -4px 5px 9px 0px #4845493b;
    }

    div.card2 div.card-flap {
        background: #d9d9d9;
        position: absolute;
        width: 100%;
        transform-origin: top;
        transform: rotateX(-90deg);
    }
    div.card2 div.flap1 {
        transition: all 0.3s 0.3s ease-out;
        z-index: -1;
    }
    div.cards.showing div.card2 {
        cursor: pointer;
        opacity: 0.6;
        transform: scale(0.88);
    }
    .no-touch  div.cards.showing div.card2:hover {
        opacity: 0.94;
        transform: scale(0.92);
    }
    div.card2.show {
        opacity: 1 !important;
        transform: scale(1) !important;
    }
    div.card2.show div.card-title a.toggle-info {
        background: #B16BCA !important;
    }
    div.card2.show div.card-title a.toggle-info span {
        top: 15px;
    }
    div.card2.show div.card-title a.toggle-info span.left {
        right: 10px;
    }
    div.card2.show div.card-title a.toggle-info span.right {
        left: 10px;
    }
    div.card2.show div.card-flap {
        background: #ffffff;
        transform: rotateX(0deg);
    }
    div.card2.show div.flap1 {
        transition: all 0.3s 0s ease-out;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }

    @media screen and (max-width: 426px){
        width: 100%;
    }

    @media screen and (max-width: 375px){
        width: 100%;
    }

    @media screen and (max-width: 320px){
        width: 100%;
    }

`;
