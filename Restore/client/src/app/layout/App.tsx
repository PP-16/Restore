import { ThemeProvider } from '@emotion/react'
import { Container, createTheme, CssBaseline } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/home/HomePage';
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
      <Routes>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Catalog' element={<Catalog/>}/>
        <Route path='/Catalog/:id' element={<ProductDetails/>}/>
      </Routes>
      </Container>
    </ThemeProvider>
    </>
  )
}
