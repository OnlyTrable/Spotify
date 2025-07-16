import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Main from './components/layout/main/index.jsx'
import FlexContainer from './components/ui/flexContainer/index.jsx'


function App() {
  return (
    <FlexContainer className="App">
      <Main />
    </FlexContainer>
  )
}

export default App
