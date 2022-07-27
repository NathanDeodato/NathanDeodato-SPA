import React, { useState } from "react"

import { ThemeProvider } from "styled-components"
import { DarkMode, 
    LightMode 
} from "../styles/themes"

import { 
    Header, 
    NTLogo 
} from "../styles/deoStart"

import {
    ThemeBox,
    ThemeIcon,
    ThemeToggle
} from "../styles/deoStart"

import {
    DeoLinks, 
    NTimg, 
    NTtext, 
    LinkBox, 
    Link, 
    LinkButton, 
    ImgButton, 
    TextButton 
} from "../styles/deoStart"

import { 
    NTterminal, 
    themeLight,
    toggleOn,
    NTBitMoji, 
    gitHub, 
    linkedin, 
    portifolio, 
    onu } from "../assets/assets"

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
                <ThemeIcon
                src={themeLight}
                />
                <ThemeToggle
                src={toggleOn}
                />
                <NTLogo
                src={NTterminal}
                />
            </Header>
        )
    }

    return(
        <ThemeProvider 
        theme={myTheme}
        >
            <DeoNav/>
            <DeoLinks>
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
            </DeoLinks>
        </ThemeProvider>
    )
}
