import React from "react";
import { Wrapper } from "components/Mainpage/Wrapper";
import { Currency } from "components/Mainpage/Currency";
import { BlogList } from "components/Blog/BlogList";
import { Benefits } from "components/BenefitsSection/Benefits";

export const Main = () => {
  return (
    <>
      <Wrapper />
      <Currency />
      <BlogList />
      <Benefits />
    </>
  );
};
