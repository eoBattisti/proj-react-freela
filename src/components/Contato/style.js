import styled from 'styled-components';


export const Container = styled.div `
    width: 100%;
    background: rgba(235,193,222,1);
`;

export const ContainedBox = styled.div`
    box-sizing: border-box;
    background: #A04DBE;
    padding: 40px !important;
    width: 47%;
    border-radius: 10px;
    height: auto;
    background-color: rgba(160, 77, 190, .3);
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);

    p, h4, button {
        margin: 6px 0;
    }

    .MuiButton-contained {
        color: #f1e5f5;
        background: #8b1c83;
        &:hover{
            background: #701077;
        }
    }

    @media screen and (max-width: 768px){
        margin-left: 16px
    }

    @media screen and (max-width: 426px){
        width: 100%;
        padding: 25px !important;
        margin-top: 16px;
        h4{
            font-size: 24px
        }
    }

    @media screen and (max-width: 375px){
        width: 100%;
        padding: 25px !important;
        margin-top: 16px;
        h4{
            font-size: 24px
        }
    }

    @media screen and (max-width: 320px){
        width: 100%;
        padding: 25px !important;
        margin-top: 16px;
        h4{
            font-size: 24px
        }
    }
`;

export const OutlinedBox = styled.div `
    box-sizing: border-box;
    padding: 40px !important;
    width: 47%;
    border-radius: 10px;
    height: auto;
    background-color: rgba(255, 255, 255, .4);
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
    
    p, h4, button {
        margin: 6px 0;
    }

    .MuiButton-contained {
        background: #8b1c83;
        color: #f1e5f5;
        &:hover{
            background: #701077;
        }
    }
    
    @media screen and (max-width: 426px){
        width: 100%;
        padding: 25px !important;

        h4{
            font-size: 24px
        }
    }

    @media screen and (max-width: 375px){
        width: 100%;
        padding: 25px !important;

        h4{
            font-size: 24px
        }
    }

    @media screen and (max-width: 320px){
        width: 100%;
        padding: 25px !important;

        h4{
            font-size: 24px
        }
    }
`;