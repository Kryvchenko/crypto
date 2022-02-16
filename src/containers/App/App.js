import React from "react";
import { Header } from "containers/Header/Header";
import { Main } from "containers/Main/Main";
import { Footer } from "containers/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
