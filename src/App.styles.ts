import styled, { createGlobalStyle } from 'styled-components';
import BG from './Images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }

    body{
        background-image: url(${BG});
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }
    `

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p{
        color: black;
        font-size: 2rem;
        margin: 0;
    }

    .loading{
        font-size: 1rem;
        margin-top:20px;
    }

    h1{
        font-size: 70px;
        text-align:center ;
        margin: 20px;
    }
    
    .start, .next{
        cursor: pointer;
        border: 2px solid black;
        background: none;
        padding: 10px;
        margin: 20px;
    }

    `