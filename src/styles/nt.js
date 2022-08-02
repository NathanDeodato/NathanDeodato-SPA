import styled from "styled-components";

export const NtLinks = styled.div`
    width: 55vw;
    height: 80vh;

    margin-top: 0%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border-radius: 25px;

    @media (max-width: 1025px) {
        width: 75vw;
        height: 50vh;

        margin-top: 20%;
    }

    @media (max-width: 769px) {
        height: 55vh;
    }

    @media (max-width: 426px) {
        width: 85vw;
        height: 60vh;
    }
`

export const NTimg = styled.img`
    width: 20%;

    @media (max-width: 1025px) {
        width: 25%;
    }
`

export const NTtext = styled.p`
    color: ${(props) => props.theme.textColor};
    
    font-size: 0.9em;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 769px) {
        font-size: 0.8em;
    }

    @media (max-width: 426px) {
        font-size: 0.7em;
    }

    @media (max-width: 320px) {
        font-size: 0.60em;
    }
`

export const LinkBox = styled.div`
    width: 40vw;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1025px) {
        width: 50vw;
    }

    @media (max-width: 426px) {
        width: 70vw;
    }
`

export const Link = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`

export const LinkButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.buttonColor};
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;        
    }

    @media (max-width: 1025px) {
        width: 16vw;
        height: 6vh;
    }

    @media (max-width: 769px) {
        width: 18vw;
        height: 7vh;
    }

    @media (max-width: 426px) {
        width: 28vw;
        height: 7.5vh;
    }

    @media (max-width: 320px) {
        width: 30vw;
        height: 7vh;
    }
`

export const GitHub = styled.button`
    width: 15vw;
    height: 8.5vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: #fff;
    background: linear-gradient(180deg, #010409 0%, #0D1117 100%);
    border: none;
    border-radius: 10px;
    font-size: 0.8em;

    @media (max-width: 1025px) {
        width: 16vw;
        height: 6vh;
    }

    @media (max-width: 769px) {
        width: 18vw;
        height: 7vh;
    }

    @media (max-width: 426px) {
        width: 28vw;
        height: 7.5vh;
    }

    @media (max-width: 320px) {
        width: 30vw;
        height: 7vh;
    }
`

export const Linkedin = styled.button`
    width: 15vw;
    height: 8.5vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: #fff;
    background: linear-gradient(180deg, #0A66C2 0%, #004182 100%);
    border: none;
    border-radius: 10px;
    font-size: 0.8em;

    @media (max-width: 1025px) {
        width: 16vw;
        height: 6vh;
    }

    @media (max-width: 769px) {
        width: 18vw;
        height: 7vh;
    }

    @media (max-width: 426px) {
        width: 28vw;
        height: 7.5vh;
    }

    @media (max-width: 320px) {
        width: 30vw;
        height: 7vh;
    }
`

export const Instagram = styled.button`
    width: 15vw;
    height: 8.5vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: #fff;
    background: linear-gradient(180deg, rgba(81, 91, 212, 0.5) 0%, rgba(129, 52, 175, 0.5) 61.98%, rgba(221, 42, 123, 0.5) 86.46%);
    border: none;
    border-radius: 10px;
    font-size: 0.8em;

    @media (max-width: 1025px) {
        width: 16vw;
        height: 6vh;
    }

    @media (max-width: 769px) {
        width: 18vw;
        height: 7vh;
    }

    @media (max-width: 426px) {
        width: 28vw;
        height: 7.5vh;
    }

    @media (max-width: 320px) {
        width: 30vw;
        height: 7vh;
    }
`

export const MetaBit = styled.button`
    width: 15vw;
    height: 8.5vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: #fff;
    background: linear-gradient(180deg, #010409 0%, #0D1117 100%);
    border: none;
    border-radius: 10px;
    font-size: 0.8em;

    @media (max-width: 1025px) {
        width: 16vw;
        height: 6vh;
    }

    @media (max-width: 769px) {
        width: 18vw;
        height: 7vh;
    }

    @media (max-width: 426px) {
        width: 28vw;
        height: 7.5vh;
    }

    @media (max-width: 320px) {
        width: 30vw;
        height: 7vh;
    }
`

export const NTportfolio = styled.button`
    width: 15vw;
    height: 8.5vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: #fff;
    background: linear-gradient(180deg, #1C1C34 0%, #2D2D45 100%);
    border: none;
    border-radius: 10px;
    font-size: 0.7em;

    @media (max-width: 1025px) {
        width: 16vw;
        height: 6vh;
    }

    @media (max-width: 769px) {
        width: 18vw;
        height: 7vh;
    }

    @media (max-width: 426px) {
        width: 28vw;
        height: 7.5vh;
    }

    @media (max-width: 320px) {
        width: 30vw;
        height: 7vh;
    }
`

export const ImgButton = styled.img`
    width: 1.5vw;

    position: relative;
    left: 2vw;

    @media (max-width: 426px) {
        width: 3.5vw;

        left: -2.5vw;
    }

    @media (max-width: 320px) {
        width: 4vw;
    }
`

export const MetaBitIcon = styled.img`
    width: 2.5vw;

    position: relative;
    left: 1.5vw;
`

export const TerminalIcon = styled.img`
    width: 2vw;

    position: relative;
    left: 1.5vw;
`

export const TextButton = styled.p`
    width: 7vw;
    
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;

    @media (max-width: 769px) {
        width: 12vw;

        font-size: 1em;
    }

    @media (max-width: 426px) {
        font-size: 0.9em;
    }

    @media (max-width: 320px) {
        width: 13vw;

        font-size: 0.8em;
    }
`
