import styled from 'styled-components';

const Style = styled.div `
    width: 100%;

    #carouselWrapper2{
        display: none;
        margin: 16px 0;
    }
    .card{
        position: relative;
        cursor: pointer;
        margin: 0 100px;
    }

    .card .face{
        width: 300px;
        height: 200px;
        transition: 0.5s;
    }

    .card .face.face1{
        position: relative;
        background: #A04DBE;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transform: translateY(100px);
    }

    .card:hover .face.face1{
        background: #8b1c83;
        transform: translateY(0);
    }

    .card .face.face1 .content{
        opacity: 0.2;
        transition: 0.5s;
    }

    .card:hover .face.face1 .content{
        opacity: 1;
    }

    .card .face.face1 .content img{
        max-width: 100px;
    }

    .card .face.face1 .content h3{
        margin: 10px 0 0;
        padding: 0;
        color: #f7e6f1;
        text-align: center;
        font-size: 1.5em;
    }

    .card .face.face2{
        position: relative;
        background: #f7e6f1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px 0px #7b7b7b;
        transform: translateY(-100px);
    }

    .card:hover .face.face2{
        transform: translateY(0);
    }

    .card .face.face2 .content p{
        margin: 0;
        padding: 0;
    }

    .card .face.face2 .content a{
        margin: 15px 0 0;
        display:  inline-block;
        text-decoration: none;
        font-weight: 900;
        color: #9a228a;
        padding: 5px;
        border: 1px solid #9a228a;
    }

    .card .face.face2 .content a:hover{
        background: #9a228a;
        color: #f7e6f1;
    }

    .card2{
        display: none;
        background-color: #8b1c83;
        border-radius: 50%;
        margin: 0 55px;
        width: 125px;
        height: 125px;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 50%;
            height: 50%;
        }
    }

    .cardWrapper {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #8b1c83;
    }

    @media screen and (max-width: 426px){
        .card{
            display: none;
        }
        #carouselWrapper2{
            display: block
        }
        .cardWrapper{
            display: flex
        }
    }

    @media screen and (max-width: 375px){
        .card{
            display: none;
        }
        #carouselWrapper2{
            display: block
        }
        .cardWrapper{
            display: flex
        }
    }

    @media screen and (max-width: 320px){ 
        .card{
            display: none;
        }
        .cardWrapper{
            display: flex
        }
        #carouselWrapper2{
            display: block
        }
    }
`;  

export default Style;