import React from "react";
import { Wrapper } from "components/Mainpage/Wrapper";
import { Currency } from "components/Mainpage/Currency";
import { BlogList } from "components/Blog/BlogList";
import { Benefits } from "components/BenefitsSection/Benefits";
import { Statistic } from "components/StatisticSection /Statistic";
import { Miners } from "components/MinersSection/Miners";
import { Download } from "components/DownloadSection/Download";

export const Main = () => {
  return (
    <>
      <Wrapper />
      <Currency />
      <BlogList />
      <Benefits />
      <Statistic />
      <Miners />
      <Download />
    </>
  );
};
