import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 2px solid #8b1c83;
    padding: 0 1rem;

    nav li {
        display: inline-block;
        margin-left: 15px;
        align-items: top;
        margin: 0 20px;
    }

    .MuiButton-contained{
        background-color: #8b1c83;
        color: #fff;
    }

    .MuiButton-contained:hover{
        background-color: #701077;
    }

    .MuiTypography-colorPrimary{
        color: #8b1c83;
    }

    .MuiButton-outlined{
        border: 1px solid #8b1c83;
        color: #8b1c83;
    }

    @media screen and (max-width: 1025px){
        nav ul{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        span {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 769px){
        .MuiButton-contained, .MuiButton-outlined, #btns{
            display: none;
        }
    }

    @media screen and (max-width: 426px){
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
        
        nav ul{
            display: inline;
            padding: 0;
            margin: 0;
            
        }

        nav li {
            margin: 10px 10px;
            
        }
        button {
            font-size: 16px;
        }
        .MuiButton-contained, .MuiButton-outlined, #btns{
            display: none;
        }
    }
    
    @media screen and (max-width:376px){
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;    

        nav ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
        }

        nav li {
            margin: 10px 0;
        }

        .MuiButton-contained, .MuiButton-outlined, #btns{
            display: none;
        }
    }

    @media screen and (max-width:320px){
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;    

        nav ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
        }

        nav li {
            margin: 10px 0;
        }

        .MuiButton-contained, .MuiButton-outlined, #btns{
            display: none;
        }
    }

`;  
  