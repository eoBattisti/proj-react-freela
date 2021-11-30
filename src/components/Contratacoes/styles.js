import styled from 'styled-components';

const Container = styled.div `
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(235,193,222,1) 100%);
    color: #8b1c83;
    button{
        background: #8b1c83;
        color: #f1e5f5;
        margin-top: 16px ;
    }

    button:hover{
        background: #701077;
    }

    .MuiTypography-subtitle2{
        color:#8b1c83;
        text-align: center
    }
    .MuiGrid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .contracaoWrapper1 {
        align-items: center; 
        display: flex; 
        flex-direction: column;
        box-sizing: border-box;
        background: #A04DBE;
        padding: 32px;
        width: 40%;
        border-radius: 10px;
        height: auto;
        background-color: rgba(160, 77, 190, .3);
        backdrop-filter: blur(10px);
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
        margin: 0 auto;

        h4{
            text-align: center;
            margin-bottom: 16px;
        }
    }

    .contratacaoWrapper2{
        display: none;
        flex-direction: column;
        align-items: center;
        
        h6{
            text-align: center;
            color:#8b1c83;
        }

        img{
            width: 50%
        }
    }
    @media screen and (max-width: 768px){
        .contracaoWrapper1{
            width: 60%;
        }
    }

    @media screen and (max-width: 426px){
        .contracaoWrapper1{
            display: none;
        }
        .contratacaoWrapper2{
            display: flex;

            .MuiGrid-item {
                padding:8px;
                
            }
        }
    }

    @media screen and (max-width: 375px){
        .contracaoWrapper1{
            display: none;
        }
        .contratacaoWrapper2{
            display: flex;
        }
    }

    @media screen and (max-width: 320px){
        .contracaoWrapper1{
            display: none;
        }
        .contratacaoWrapper2{
            display: flex;
        }
    }
`;

export default Container;