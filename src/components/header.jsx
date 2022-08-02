import React from "react"

import { 
    Header, 
    NTLogo,
    ThemeIcon
} from "../styles/header"

import { 
    NTterminal, 
    themeLight
} from "../assets/assets"

export default function cHeader() {
    return(
        <Header>
            <ThemeIcon
            src={themeLight}
            />
            <NTLogo
            src={NTterminal}
            />
        </Header>
    )
}
