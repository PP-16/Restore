import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/account/SignIn";
import Test from "./components/account/Test";
import ConterPage1 from "./components/features/CounterPage1";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import New from "./components/New";
import ConterPage from "./components/reduxs/ConterPage";
import { useAppSelector } from "./components/reduxs/store";

export default function App() {
  const {isFull} = useAppSelector(state=>state.mycontainer)
  const [mode, setMode] = useState(true);
  const modeDisplay = mode ? "dark" : "light";

  const handleMode = () => setMode(!mode);

  const theme = createTheme({
    palette: {
      mode: modeDisplay,
      background: {
        default: modeDisplay === "light" ? "#f0f5f7" : "#384348",
      },
    },
  });
  const routes =(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<SignIn/>} />
    <Route path="/New" element={<New />} />
    <Route path="/counter" element={<ConterPage />} />
    <Route path="/counter1" element={<ConterPage1 />} />

  </Routes>
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header handleMode={handleMode} />
        {isFull ?  <>{routes}</>:<Container sx={{mt:10}}>{routes}</Container> }
      </ThemeProvider>
    </>
  );
}
