import React, { useState } from "react"

import { ThemeProvider } from "styled-components"
import { DarkMode, LightMode } from "../styles/themes"
import GlobalStyle from "../styles/global"

import { Header, NTLogo } from "../styles/deoStart"

import { DeoLinks, NTimg, NTtext, LinkBox, Link, LinkButton, ImgButton, TextButton } from "../styles/deoStart"

import { NTterminal, NTBitMoji, gitHub, linkedin, portifolio, onu } from "../assets/assets"

export default function DeoStart() {
    const [ myTheme, setMyTheme ] = useState(DarkMode)
    
    const switchTheme = () => {
        if(myTheme == DarkMode){
            setMyTheme(LightMode)
        }else {
            setMyTheme(DarkMode)
        }
    }

    const DeoNav = () => {
        return(
            <Header>
                <NTLogo
                src={NTterminal}
                />
            </Header>
        )
    }

    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle/>
            <DeoNav/>
            <DeoLinks>
                <NTimg 
                onClick={() => {switchTheme()}}
                src={NTBitMoji}/>
                <Link href="">
                    <NTtext>@Deodatont.Dev</NTtext>
                </Link>
                <LinkBox>
                    <Link href="https://github.com/NathanDeodato">
                        <LinkButton>
                            <ImgButton src={gitHub}/>
                            <TextButton>GitHub</TextButton>
                        </LinkButton>
                    </Link>
                    <Link href="">
                        <LinkButton>
                            <ImgButton src={portifolio}/>
                            <TextButton>Portifolio</TextButton>
                        </LinkButton>
                    </Link>
                </LinkBox>
                <LinkBox>
                    <Link href="">
                        <LinkButton>
                            <ImgButton src={linkedin}/>
                            <TextButton>Linkedin</TextButton>
                        </LinkButton>
                    </Link>
                    <Link href="">
                        <LinkButton>
                            <ImgButton src={onu}/>
                            <TextButton>My Onu</TextButton>
                        </LinkButton>
                    </Link>
                </LinkBox>
            </DeoLinks>
        </ThemeProvider>
    )
}
