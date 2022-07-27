import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 20vh;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: solid 4px #373751;
`

export const NTLogo = styled.img`
    width: 20vw;

    &:hover {
        cursor: pointer;
    }
`

//

export const ThemeBox = styled.div`
    width: 20%;
    height: 100%;

    display: flex;
    justify-content: space-around;
`

export const ThemeIcon = styled.img`
    width: 2.5%;

    position: relative;
    left: -30%;

    &:hover {
        cursor: pointer;
    }
`

export const ThemeToggle = styled.img`
    width: 2.5%;

    position: relative;
    left: -29%;

    &:hover {
        cursor: pointer;
    }
`

//

export const DeoLinks = styled.div`
    width: 55vw;
    height: 62vh;

    margin-top: 9vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border: solid 5px #373751;
    border-radius: 25px;
`

export const NTimg = styled.img`
    width: 12vw;
`

export const NTtext = styled.p`
    color: ${(props) => props.theme.textColor};
    
    font-size: 1em;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`

export const LinkBox = styled.div`
    width: 40vw;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
`

export const LinkButton = styled.button`
    width: 13vw;
    height: 8vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.buttonColor};
    border: none;
    border-radius: 12px;

    &:hover {
        cursor: pointer;        
    }
`

export const ImgButton = styled.img`
    width: 1.5vw;

    position: relative;
    left: -1vw;
`

export const TextButton = styled.p`
    width: 7vw;
    
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
`
