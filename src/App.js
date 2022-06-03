import React from "react";
import Footer from "./components/Footer";
import DashboardNav from "./Pages/DashboardNav";
import Lending from "./Pages/Lending";
import Router from "./routes";

const App = () => {
  return (
    <>
    <DashboardNav />
      <Router />
      <Footer />
    </>
  );
};

export default App;
