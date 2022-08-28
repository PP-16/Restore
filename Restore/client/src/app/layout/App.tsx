import { ThemeProvider } from '@emotion/react'
import { Container, createTheme, CssBaseline } from '@mui/material';
import React, { useState } from 'react'
import Catalog from '../../features/catalog/Catalog';
import Header from './Header'


export default function App() {
  const [mode,setMode] = useState(false)
  const displayMode = mode? 'light' : 'dark'

  const darkTheme = createTheme({
    palette: {
      mode: displayMode
    },
  });

  const handleMode =()=>setMode(!mode)
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header handleMode={handleMode}/>
      <Container>
      <Catalog/>
      </Container>
    </ThemeProvider>
    </>
  )
}
