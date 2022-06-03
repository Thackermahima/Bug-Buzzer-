import React from "react";
import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Bugs from "../components/Bugs";
import Compaigns from "../components/Compaigns";
import QandAList from "../components/QandAList";
import BountyWinners from "../components/BountyWinners";
import Footer from "../components/Footer";

export default function Lending() {
  return (
    <>
      {/* <Router> */}
      {/* <h1>Lending</h1> */}

      <Navbar />


      <Container>
        <Intro />
        <Bugs />
        <Compaigns />
        <QandAList />
        <BountyWinners />
      </Container>

      {/* <Footer /> */}
    </>
  );
}
