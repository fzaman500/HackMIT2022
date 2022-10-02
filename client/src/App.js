import "./App.css";
import Home from "./components/Home/Home.js";
import { get, post } from "./utilities.js";
import React, { useState, useEffect } from "react";

const App = (props) => {
  // const [userId, setUserId] = useState(undefined);
  // const [name, setName] = useState(undefined);
  // const [loc, setLoc] = useState("/");

  // useEffect(() => {
  //   setLoc(window.location.pathname);
  // }, [window]);

  // const handleLogin = () => {
  //   get("yo").then((hi) => {
  //     console.log({ hi });
  //   });
  // };

  return (
    <div>
      <div> hi </div>
      <Home />{" "}
    </div>
  );
};

export default App; // jchanged in game component
