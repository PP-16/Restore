import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import NotFound from "../errors/NotFound";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ServerError from "../errors/ServerError";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import HomePage from "../../features/home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { setBasket } from "../../features/basket/basketSlice";

export default function App() {
  // const { setBasket } = useStoreContext(); //ควบคุมสเตทด้วย React context to Centralize
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { fullscreen } = useAppSelector((state) => state.screen);

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else setLoading(false);
  }, [dispatch]);

  const [mode, setMode] = useState(false);
  const displayMode = mode ? "light" : "dark";

  const darkTheme = createTheme({
    palette: {
      mode: displayMode,
    },
  });

  const handleMode = () => setMode(!mode);
  if (loading) return <LoadingComponent message="Initilize App....." />;

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
        {fullscreen ? <>{mainroute}</> : <Container sx={{mt:2}}>{mainroute}</Container>}
      </ThemeProvider>
    </>
  );
}

const mainroute = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Contact" element={<ContactPage />} />
    <Route path="/About" element={<AboutPage />} />
    <Route path="/Catalog" element={<Catalog />} />
    <Route path="/Catalog/:id" element={<ProductDetails />} />
    <Route path="/basket" element={<BasketPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/server-error" element={<ServerError />} />
  </Routes>
);
