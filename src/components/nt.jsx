import React, { useState } from "react"

import { ThemeProvider } from "styled-components"
import { 
    DarkMode, 
    LightMode 
} from "../styles/themes"

import {
    NtLinks, 
    NTimg, 
    NTtext, 
    LinkBox, 
    Link, 
    LinkButton, 
    ImgButton, 
    TextButton 
} from "../styles/nt"

import { 
    NTBitMoji, 
    gitHub, 
    linkedin, 
    portifolio, 
    onu } from "../assets/assets"

import cHeader from "./header"

export default function DeoStart() {
    const [ myTheme, setMyTheme ] = useState(DarkMode)
    
    const switchTheme = () => {
        if(myTheme == DarkMode){
            setMyTheme(LightMode)
        }else {
            setMyTheme(DarkMode)
        }
    }

    return(
        <ThemeProvider 
        theme={myTheme}
        >
            {cHeader()}
            <NtLinks>
                <NTimg 
                src={NTBitMoji}/>
                <Link href="">
                    <NTtext>@Deodatont.Dev</NTtext>
                </Link>
                <LinkBox>
                    <Link 
                    href="https://github.com/NathanDeodato"
                    >
                        <LinkButton>
                            <ImgButton 
                            src={gitHub}
                            />
                            <TextButton>GitHub</TextButton>
                        </LinkButton>
                    </Link>
                    <Link 
                    href=""
                    >
                        <LinkButton>
                            <ImgButton 
                            src={portifolio}
                            />
                            <TextButton>Portifolio</TextButton>
                        </LinkButton>
                    </Link>
                </LinkBox>
                <LinkBox>
                    <Link 
                    href="https://www.linkedin.com/in/nathan-deodato-527ab2222/"
                    >
                        <LinkButton>
                            <ImgButton 
                            src={linkedin}
                            />
                            <TextButton>Linkedin</TextButton>
                        </LinkButton>
                    </Link>
                    <Link 
                    href="https://myonu.netlify.app/"
                    >
                        <LinkButton>
                            <ImgButton 
                            src={onu}
                            />
                            <TextButton>My Onu</TextButton>
                        </LinkButton>
                    </Link>
                </LinkBox>
            </NtLinks>
        </ThemeProvider>
    )
}
