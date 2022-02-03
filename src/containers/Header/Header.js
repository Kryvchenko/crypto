import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { MenuItems } from "components/Navbar/MenuItems";
import { Container } from "components/Navbar/Container";

export const Header = () => {
  return (
    <>
      <Container>
        <Navbar />
        <MenuItems />
      </Container>
    </>
  );
};
