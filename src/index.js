import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
// import { useMoralis, useMoralisCloudFunction } from "react-moralis";

// For Moralis

// console.log(process.env.REACT_APP_MORALIS_KEY,'keyyy');
// const { Moralis, user } = useMoralis();

// Moralis.start(appId, serverUrl);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <MoralisProvider
          appId="xG1sKEJRc9KHaDfS3mHLgbDpn419Gta1qm93o0I5"
          serverUrl= "https://7gyewuqh54md.usemoralis.com:2053/server"
        >
          <App />
        </MoralisProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
