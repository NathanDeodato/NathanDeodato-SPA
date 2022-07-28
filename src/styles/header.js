import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-bottom: solid 4px #373751;
    @media (max-width: 1025px) {
        height: 15vh;
    }
`

export const ThemeIcon = styled.img`
    width: 2.5%;
    position: relative;
    left: -30%;
    &:hover {
        cursor: pointer;
    }
    
    @media (max-width: 1025px) {
        width: 3.5%;
        left: -22%
    }
    @media (max-width: 426px) {
        width: 4%;
        left: -18%;
    }
    @media (max-width: 320px) {
        width: 4.5%;
        left: -16%;
    }
`

export const ThemeToggle = styled.img`
    width: 2.5%;
    position: relative;
    left: -29%;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 1025px) {
        width: 3.5%;
        left: -20%
    }
    @media (max-width: 426px) {
        width: 4%;
        left: -16%;
    }
    @media (max-width: 320px) {
        width: 4.5%;
        left: -14%;
    }
`

export const NTLogo = styled.img`
    width: 20%;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 1025px) {
        width: 40%;
    }
    @media (max-width: 376px) {
        width: 50%;
    }
`
