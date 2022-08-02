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
    GitHub,
    Linkedin,
    Instagram,
    MetaBit,
    NTportfolio,
    ImgButton,
    MetaBitIcon,
    TerminalIcon,
    TextButton, 
} from "../styles/nt"

import { 
    NTBitMoji, 
    gitHub,
    linkedin, 
    instagram,
    metaBit,
    terminal,
    NTterminal
} from "../assets/assets"

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
                    <NTtext>@NathanDeodato.Dev</NTtext>
                </Link>
                <LinkBox>
                    <Link 
                    href="https://github.com/NathanDeodato"
                    >
                        <LinkButton>
                            <GitHub>
                                <ImgButton 
                                src={gitHub}
                                />
                                <TextButton>GitHub</TextButton>
                            </GitHub>
                        </LinkButton>
                    </Link>
                    <Link 
                    href=""
                    >
                        <LinkButton>
                            <Linkedin>
                                <ImgButton 
                                src={linkedin}
                                />
                                <TextButton>Linkedin</TextButton>
                            </Linkedin>
                        </LinkButton>
                    </Link>
                </LinkBox>
                <LinkBox>
                    <Link 
                    href=""
                    >
                        <LinkButton>
                            <Instagram>
                                <ImgButton 
                                src={instagram}
                                />
                                <TextButton>Instagram</TextButton>
                            </Instagram>
                        </LinkButton>
                    </Link>
                    <Link 
                    href=""
                    >
                        <LinkButton>
                            <MetaBit>
                                <MetaBitIcon
                                src={metaBit}
                                />
                                <TextButton>Blog</TextButton>
                            </MetaBit>
                        </LinkButton>
                    </Link>
                </LinkBox>
                <LinkBox>
                <Link 
                    href=""
                    >
                        <LinkButton>
                            <NTportfolio>
                                <TerminalIcon
                                src={terminal}
                                />
                                <TextButton>Nathan Deodato</TextButton>
                            </NTportfolio>
                        </LinkButton>
                    </Link>
                </LinkBox>
            </NtLinks>
        </ThemeProvider>
    )
}
