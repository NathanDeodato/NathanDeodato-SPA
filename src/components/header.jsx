import React from "react"

import { 
    Header, 
    NTLogo,
    ThemeIcon,
    ThemeToggle
} from "../styles/header"

import { 
    NTterminal, 
    themeLight,
    toggleOn,
} from "../assets/assets"

export default function cHeader() {
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
