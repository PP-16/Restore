import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import NotFound from "../errors/NotFound";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ServerError from "../errors/ServerError";

export default function App() {
  const [mode, setMode] = useState(false);
  const displayMode = mode ? "light" : "dark";

  const darkTheme = createTheme({
    palette: {
      mode: displayMode,
    },
  });

  const handleMode = () => setMode(!mode);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <CssBaseline />
        <Header handleMode={handleMode} />
        <Container>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Catalog/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/server-error" element={<ServerError />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}
