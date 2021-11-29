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
