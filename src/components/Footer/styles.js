import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    heigh: auto;
    background-color: #8b1c83;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    color: #f1e5f5;

    h6{
        color: #C795D9;
        text-transform: uppercase;
    }

    svg{
        margin: 0 6px;
    }

    a{
        text-decoration: none;
        color: #f1e5f5;
    }

    .boxFooter{
        position: relative;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
        padding: 10px;
    }

    .socialMedia{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        width: 80%;
        margin-left: auto;
    }

    .icons{
        margin-left: auto;
    }

    .subSections{
        display: flex;
        flex-direction: row;
    }

    .subSection{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: baseline;
    }

    .downloads{
        margin-left: auto;
        text-align: center;
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

    @media screen and (max-width: 426px){
        .subSections{
            display:grid;
            grid-template-columns: 1fr 1fr; 
            
            .subSection, .downloads{
                margin-top: 6px;
                margin-left: 0px !important;
            }
        }
        .socialMedia{
            flex-direction: column;
            margin: 0 auto;
            
            .icons{
                margin-left: 0;
            }
        }
    }
    
    @media screen and (max-width:376px){
        .subSections{
            display:grid;
            grid-template-columns: 1fr 1fr; 
            
            .subSection, .downloads{
                margin-top: 6px;
                margin-left: 0px !important;
            }
        }
        .socialMedia{
            flex-direction: column;
            margin: 0 auto;
            
            .icons{
                margin-left: 0;
            }
        }
    }

    @media screen and (max-width:320px){
        .subSections{
            display:grid;
            grid-template-columns: 1fr;
            
            .subSection, .downloads{
                margin-top: 6px;
                margin-left: 0px !important;
            }
        }
        .socialMedia{
            flex-direction: column;

            .icons{
                margin-left: 0;
            }
        }
    }
`;