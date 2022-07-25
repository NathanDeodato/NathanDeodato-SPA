import React from "react"

import "./App.css"

import DeoStart from "./components/deoStart"

export default function DeodatontSPA() {
  const deoNav = () => {
    return(
      <Header>
          <SelectTheme>
              <Theme 
              src="{}" 
              alt="DarkMode Icon"
              />
              <Select 
              src="{}"
              onClick={() => {switchTheme()}}
              />
          </SelectTheme>
          <NTLogo src={NTterminal}/>
        </Header>
    )
  }
  
  return(
    <div className="divGlobal">
      <DeoStart/>
    </div>
  )
}
